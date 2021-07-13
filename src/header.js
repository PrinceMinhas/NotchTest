import React from 'react'
import './header.scss';
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';

const Header = () => {

  const dispatch = useDispatch()

  const supplierNameData = useSelector((state) => {
    let supplierNames = new Set(state.data.map(supplier => supplier.vendorName));
    return Array.from(supplierNames)
  })

  const supplierFilterValue = useSelector((state) => {
    if (state.supplierFilter) {
      return state.supplierFilter
    }
    return "All Suppliers"
  })

  const onSupplierFilterChange = (event) => {
    if (event.target.value === "All Suppliers") {
      dispatch({type: "resetSupplierFilter"})
    }
    else {
      dispatch({type: "supplierFilterAdded", payload: event.target.value})
    }
  }

  const resetSupplierFilter = () => {
     dispatch({type: "resetSupplierFilter"})
  }

  return (
    <div className="header">
      <div className="dropDown">
        <label>{"Supplier"}</label>
        <select className="font-weight-bold" value={supplierFilterValue} onChange={onSupplierFilterChange}>
        <option value="All Suppliers">All Suppliers</option>
        {
            supplierNameData.map((supplier, index) => {
              return( 
                <option key={index} value={supplier}>{supplier}</option>
              )})
        }
        </select>
      </div>
      <Button type="button" onClick={resetSupplierFilter}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      {"Reset Filters"}
      </Button>
    </div>
  )
}

export default Header