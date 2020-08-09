import { combineReducers } from 'redux'
import eventReducer from '../../features/event/eventReducer'
import modalReducer from '../common/form/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'

const rootReducer = combineReducers({
	event: eventReducer,
	modals: modalReducer,
	auth: authReducer,
})

export default rootReducer
