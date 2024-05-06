import React from 'react'

function Card({item}) {

  return (
   <>
   <div className=" card w-96 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.category}</div> 
      <div className="badge badge-outline">{item.price}</div>
    </div>
  </div>
</div>
   </>
  )
}

export default Card
