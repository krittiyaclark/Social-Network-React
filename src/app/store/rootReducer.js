import { combineReducers } from 'redux'
import eventReducer from '../../features/event/eventReducer'
import modalReducer from '../common/form/modals/modalReducer'

const rootReducer = combineReducers({
	event: eventReducer,
	modals: modalReducer,
})

export default rootReducer
