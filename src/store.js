import { createStore } from 'redux'
import filtersReducer from './reducer'

export default function createFilterStore(initialState) {
	return createStore(filtersReducer, initialState)
}
