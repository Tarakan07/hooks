import React, { useEffect, useRef } from "react";


export const useEventListener = (eventName:keyof WindowEventMap, handler:React.MouseEvent, element = window) => {
	const saveHandler = useRef<React.MouseEvent>(null!);
	
	useEffect(() => {
		if(saveHandler.current){
			saveHandler.current = handler;
		}
		
	}, [handler]);
	useEffect(() => {
		const isSupported = element && element.addEventListener;
		if (!isSupported) {
			throw new Error("error support" + element);
		}

		const eventListener = (event:any) => {
			if (saveHandler !== null) {
				saveHandler.current=event;
			}
		};

		element.addEventListener(eventName, eventListener);

		return () => element.removeEventListener(eventName, eventListener);
	}, [eventName, element]);
};
