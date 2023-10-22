import { useCallback, useReducer, useState } from "react";

const useToggle = (initialState:boolean|null|undefined) => {
	const [value, setValue] = useState<boolean>(initialState || false);

	const changeToggle = useCallback(() => {
		setValue((prev) => !prev);
	}, []);

	return [value, changeToggle];
};

const useToggleWithReducer = (initialState:boolean|null|undefined) => {
	return useReducer((state) => !state, initialState || false);
};

export { useToggle, useToggleWithReducer };