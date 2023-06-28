type StateType = {
	themeId: number;
};

type ActionType = {
	type: 'SET_THEME_ID';
	id: number;
};
const initState = {
	themeId: 1,
};

export const themeReducer = (
	state = initState,
	action: ActionType
): StateType => {
	// fix any
	switch (action.type) {
		// дописать
		case 'SET_THEME_ID':
			return { ...state, themeId: action.id };

		default:
			return state;
	}
};

export const changeThemeId = (id: number): ActionType => ({
	type: 'SET_THEME_ID',
	id,
}); // fix any
