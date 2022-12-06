export const loadState = () => {
	try {
		const savedState = localStorage.getItem("state");

		if (savedState === null) {
			return [];
		}

		return JSON.parse(savedState);

	} catch (error) {
		return undefined;
	}
};