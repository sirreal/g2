import { FiX } from '@wp-g2/icons';
import { ui } from '@wp-g2/styles';
import { getValidChildren, useListState } from '@wp-g2/utils';
import faker from 'faker';
import { Schema } from 'faker-schema';
import React, { createContext, useContext, useEffect, useState } from 'react';

import {
	Animated,
	AnimatedContainer,
	Button,
	Divider,
	DragHandle,
	HStack,
	Image,
	SortableContainer,
	SortableItemBase,
	Spacer,
	Surface,
	Text,
	View,
	VStack,
} from '../../index';

export default {
	title: 'Components/FlatList',
};

const FlatListContext = createContext({});
const useFlatListContext = () => useContext(FlatListContext);

const FlatListItemContext = createContext({});
const useFlatListItemContext = () => useContext(FlatListItemContext);

function EditButton(props) {
	const { isEditing, setFlatListState } = useFlatListContext();

	useEffect(() => {
		setFlatListState((prevState) => ({
			...prevState,
			hasEditButton: true,
		}));
	}, [setFlatListState]);

	const onClick = () => {
		setFlatListState((prevState) => ({
			...prevState,
			isEditing: !prevState.isEditing,
		}));
	};

	const label = isEditing ? 'Done' : 'Edit';

	return (
		<Button {...props} onClick={onClick}>
			{label}
		</Button>
	);
}

function FlatList({ children, isEditing, onMove, ...props }) {
	const [state, setState] = useState({
		hasDeleteAction: false,
		hasEditButton: false,
		hasSortAction: !!onMove,
		isEditing,
	});

	const contextProps = {
		...state,
		onMove,
		setFlatListState: setState,
	};

	return (
		<FlatListContext.Provider value={contextProps}>
			<View {...props}>{children}</View>
		</FlatListContext.Provider>
	);
}

const FlatListItems = ({ children }) => {
	const { onMove } = useFlatListContext();
	const validChildren = getValidChildren(children);

	const handleOnSortEnd = ({ newIndex, oldIndex }) => {
		onMove && onMove(oldIndex, newIndex);
	};

	const clonedChildren = validChildren.map((child, index) => {
		const _key = child.key || index;
		const isLast = index === validChildren.length - 1;
		const contextProps = {
			_key,
			index,
			isLast,
		};

		return (
			<React.Fragment key={_key}>
				<FlatListItemContext.Provider value={contextProps}>
					{child}
				</FlatListItemContext.Provider>
			</React.Fragment>
		);
	});

	return (
		<View>
			<SortableContainer
				distance={5}
				lockAxis="y"
				onSortEnd={handleOnSortEnd}
				useDragHandle
			>
				<AnimatedContainer>{clonedChildren}</AnimatedContainer>
			</SortableContainer>
		</View>
	);
};

const FlatListItem = ({ children, onDelete, onMove, ...props }) => {
	const {
		hasDeleteAction,
		hasEditButton,
		hasSortAction,
		isEditing,
		setFlatListState,
	} = useFlatListContext();

	const { _key, index, isLast } = useFlatListItemContext();

	useEffect(() => {
		if (onDelete) {
			setFlatListState((prev) => ({ ...prev, hasDeleteAction: true }));
		}
	}, [onDelete, setFlatListState]);

	return (
		<SortableItemBase index={index}>
			<Animated auto key={_key}>
				<Surface {...props}>
					<HStack>
						{hasEditButton && hasSortAction && (
							<View
								css={[
									{
										opacity: isEditing ? 1 : 0,
										overflow: 'hidden',
										width: isEditing ? 24 : 0,
									},
									ui.animation.default,
								]}
							>
								<VStack css={{ paddingTop: 4 }}>
									<DragHandle />
								</VStack>
							</View>
						)}
						<Spacer>{children}</Spacer>
						{hasEditButton && hasDeleteAction && (
							<View
								css={[
									{
										opacity: isEditing ? 1 : 0,
										overflow: 'hidden',
										width: isEditing ? 36 : 0,
									},
									ui.animation.default,
								]}
							>
								<HStack alignment="right" css={{ padding: 2 }}>
									<Button
										icon={<FiX />}
										onClick={onDelete}
										size="small"
										variant="tertiary"
									/>
								</HStack>
							</View>
						)}
					</HStack>
				</Surface>
				{!isLast && <Divider />}
			</Animated>
		</SortableItemBase>
	);
};

const Avatar = ({ src }) => {
	return (
		<View css={{ height: 40, width: 40 }}>
			<Image
				css={{
					borderRadius: 9999,
					display: 'block',
				}}
				src={src}
			/>
		</View>
	);
};

const userSchema = new Schema(() => ({
	avatar: faker.image.avatar(),
	description: faker.lorem.sentences(),
	id: faker.random.uuid(),
	name: faker.name.firstName(),
}));

const Example = () => {
	const [users, usersData] = useListState(userSchema.make(10));

	const addUser = () => usersData.prepend(userSchema.makeOne());
	const deleteUser = (id) => usersData.remove({ id });
	const moveUser = (from, to) => usersData.move(from, to);

	return (
		<HStack alignment="center">
			<FlatList
				css={{ maxWidth: '100%', minWidth: 0, width: 400 }}
				onMove={(from, to) => moveUser(from, to)}
			>
				<VStack>
					<HStack>
						<Button onClick={addUser} variant="primary">
							Add User
						</Button>
						<Spacer />
						<EditButton />
					</HStack>
					<FlatListItems>
						{users.map((user, index) => {
							return (
								<FlatListItem
									css={{ padding: 12 }}
									key={user.id || index}
									onDelete={() => deleteUser(user.id)}
								>
									<HStack alignment="left" spacing={3}>
										<Avatar src={user.avatar} />
										<Spacer>
											<VStack spacing={1}>
												<Text size={14} weight="bold">
													{user.name}
												</Text>
												<Text
													numberOfLines={2}
													size={12}
													truncate
													variant="muted"
												>
													{user.description}
												</Text>
											</VStack>
										</Spacer>
									</HStack>
								</FlatListItem>
							);
						})}
					</FlatListItems>
				</VStack>
			</FlatList>
		</HStack>
	);
};

export const _default = () => {
	return <Example />;
};
