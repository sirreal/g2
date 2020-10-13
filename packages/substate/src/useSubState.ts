import { useRef } from 'react';
import createStore from 'zustand';

export function useSubState(s: any) {
	return useRef(createStore(s)).current;
}
