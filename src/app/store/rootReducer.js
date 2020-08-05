import { combineReducers } from 'redux'
import eventReducer from '../../features/event/eventReducer'

const rootReducer = combineReducers({
	event: eventReducer,
})

export default rootReducer
