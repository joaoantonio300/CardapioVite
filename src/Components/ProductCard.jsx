import React from 'react'

const ProductCard = ({id,image, name, description, price}) => {
  return (
     <div key={id} className="flex flex-col items-center p-2 rounded-2xl shadow-md  bg-white hover:shadow-lg transition-shadow">
               <img className="h-[7em] w-auto rounded-2xl object-contain" src={`${image}`} alt="" />
               <h3 className="font-poppins text-[10px]">{name}</h3>
               <p className="text-[7px]">{description}</p>
               <p className="text-[8px] mr-30">$ {price}</p>
             </div>
  )
}

export default ProductCard