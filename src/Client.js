export default async function getTableData() {
	return await fetch("http://api.interview.staging.foodieorders.com/v3/orders/search", 
					{
  						method: 'POST',
  						headers: {
      						'Content-Type': 'application/json'
    					},
 						body: JSON.stringify({})
					})
}