import React,{useEffect,useState,useRef} from "react";
export const useThrottle =<T,>(value:T, time:number=1000 ):T => {
	const [thrValue, setThrValue] = useState<T>(value);
	const lastChange = useRef<number>(Date.now());

	const setChanges = () => {
		lastChange.current = Date.now();
		setThrValue(value);
	
	};
	useEffect(() => {
		if (Date.now() >= lastChange.current + time) {
			setChanges();
		} else {
			const timer=setTimeout(() => {
				lastChange.current = Date.now();
				setThrValue(value);
			}, time);
			 return () => clearTimeout(timer);
		}
	}, [value, time]);
	return thrValue;
};