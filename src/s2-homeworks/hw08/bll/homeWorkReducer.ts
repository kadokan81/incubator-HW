import { UserType } from '../HW8';

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number };

// Custom comparison function
function compare(a: UserType, b: UserType, way: 'up' | 'down') {
	const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
	const nameB = b.name.toUpperCase();

	if (way === 'up') {
		if (nameA < nameB) {
			return -1; // a should come before b in the sorted order
		} else if (nameA > nameB) {
			return 1; // a should come after b in the sorted order
		}
		return 0; // names are equal
	}
	if (way === 'down') {
		if (nameA > nameB) {
			return -1; // a should come before b in the sorted order
		} else if (nameA < nameB) {
			return 1; // a should come after b in the sorted order
		}
		return 0; // names are equal
	}
}

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
	// need to fix any
	switch (action.type) {
		case 'sort': {
			if (action.payload === 'up') {
				return state.sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();

					if (nameA < nameB) {
						return -1; // a should come before b
					} else if (nameA > nameB) {
						return 1; // a should come after b
					} else {
						return 0; // names are equal
					}
				});
			} else if (action.payload === 'down') {
				return state.sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();

					if (nameA > nameB) {
						return -1; // a should come before b
					} else if (nameA < nameB) {
						return 1; // a should come after b
					} else {
						return 0; // names are equal
					}
				});
			} else {
				return state;
			}
		}
		case 'check': {
			return state
				.filter((user) => user.age > action.payload)
				.sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();

					if (nameA < nameB) {
						return -1; // a should come before b
					} else if (nameA > nameB) {
						return 1; // a should come after b
					} else {
						return 0; // names are equal
					}
				}); // need to fix
		}
		default:
			return state;
	}
};
