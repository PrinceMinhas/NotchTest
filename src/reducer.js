export default function filtersReducer(state, action) {
  switch (action.type) {
    case 'supplierFilterAdded': {
    	return {
        	...state,
        	supplierFilter: action.payload
        }
    }
    case 'resetSupplierFilter': {
    	return {
    		...state,
    		supplierFilter: ""
    	}
    }
    default:
      return state
  }
}