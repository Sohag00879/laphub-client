import React from 'react'
const AllProducts = async() => {

type TItem = {
  title:string;
  brand:string;
  productId:string;
  price:string;
  _id:string;
}

  const tableHead = [
    'SL NO','Items','Brand','Product ID','Price'
  ]

  const res = await fetch("https://labhub-server.vercel.app/api/v1/products", {
   cache:'no-store'
  });

  const products = await res.json();

  return (
  <>
  <h1 className='text-3xl text-center'>All Products</h1>
    <table className="min-w-full divide-y divide-gray-200">
    <thead>
        <tr>
            {
              tableHead.map((item,i)=>(
                <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{item}</th>
              ))
            }
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
  {
    products?.data?.map((item:TItem,i:number)=>(
      <tr key={item._id}>
      <td className="px-6 py-4 whitespace-nowrap">{i+1}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.brand}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.productId}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
  </tr>
    ))
  }
    </tbody>
</table>
  </>
  )
}

export default AllProducts