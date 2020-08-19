import { LISTEN_TO_CURRENT_USER_PROFILE } from './profileConstant'

const initialState = {
	currentUserProfile: null,
	selectedUserProfile: null,
}

export default function profileReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case LISTEN_TO_CURRENT_USER_PROFILE:
			return {
				...state,
				currentUserProfile: payload,
			}

		default: {
			return state
		}
	}
}
