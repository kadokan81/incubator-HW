const initState = {
	isLoading: false,
};

export const loadingReducer = (
	state = initState,
	action: LoadingActionType
): any => {
	// fix any
	switch (action.type) {
		// пишет студент  // need to fix
		case 'CHANGE_LOADING': {
			return {
				...state,
				// isLoading: !state.isLoading,
				isLoading: action.isLoading,
			};
		}

		default:
			return state;
	}
};

type LoadingActionType = {
	type: 'CHANGE_LOADING';
	isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: 'CHANGE_LOADING',
	isLoading,
});
