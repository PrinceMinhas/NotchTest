import React from 'react'
import './table.scss';
import { useSelector} from 'react-redux'

const FormattedTable = () => {

	const supplierData = useSelector((state) => {
		if (state.supplierFilter) {
			const result =  state.data.filter(supplier => supplier.vendorName === state.supplierFilter);
			return result
		}
		return state.data
	})

	const getBuyerStatusClass = (orderBuyerStatus) => {
		if (orderBuyerStatus.indexOf(' ') >= 0) {
			return orderBuyerStatus.split(' ').join('-');
		}
		else {
			return orderBuyerStatus
		}
	}

	const getFormattedDate = (numericalDate) => {

		if (numericalDate) {
			const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
	                       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
			const date = new Date(numericalDate)
			return monthNames[date.getMonth()] + ". " + date.getDate() + ", " + date.getFullYear()
		}
		return ""
	}

	const getFormattedTotal = (total) => {
		if (total) {
			return total
		}
		return null
	}

	return (
	  	<div className="supplierTableContainer">
	  		<table className="table table-hover">
	  			<thead>
	  				<tr>
	  					<th className="text-uppercase" scope="col">Status</th>
	  					<th className="text-uppercase" scope="col">Delivery Day</th>
	  					<th className="text-uppercase" scope="col">Supplier</th>
	  					<th className="text-uppercase" scope="col">Total</th>
	  				</tr>
	  			</thead>
	  			<tbody>
	  				{
	                	supplierData.map((supplier, index) => {
	                    return(
	                        <tr key={index}>
	                            <td>
	                            	<span className={"badge badge-pill badge-primary text-uppercase " + getBuyerStatusClass(supplier.orderBuyerStatus)}>{supplier.orderBuyerStatus}</span>
	                            </td>
	                            <td>{getFormattedDate(supplier.deliveryDay)}</td>
	                            <td>
	                            	{supplier.vendorName}
	                            	{supplier.isPendingVendorOnboarding ? <span className={"badge badge-pill badge-secondary first"}>{"1st"}</span> : null}
	                            	{!supplier.isBYOS ? <span className={"badge badge-pill badge-secondary market"}>{"Market"}</span> : null}
	                            </td>
	                            <td>{getFormattedTotal(supplier.total)}</td>
	                        </tr>
	                   	)})
	                }
	  			</tbody>
	  		</table>
	  	</div>
	)
}

export default FormattedTable