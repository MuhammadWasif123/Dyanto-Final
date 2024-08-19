
import React from 'react'
import Image from 'next/image'
import Product1 from '../../../../public/product1.svg'
import Product2 from '../../../../public/product2.svg'
import Product3 from '../../../../public/product3.svg'
import Product4 from '../../../../public/product4.svg'
import Product5 from '../../../../public/product5.png'
import Product6 from '../../../../public/product666.svg'
import Product7 from '../../../../public/777.svg'
import Product8 from '../../../../public/product88.png'
import Product9 from '../../../../public/Product9.svg'
import Product10 from '../../../../public/Product10.svg'
import Product11 from '../../../../public/Product11.svg'
import Product12 from '../../../../public/product4.svg'
import Product13 from '../../../../public/product4.svg'
import Product14 from '../../../../public/product3.svg'
import Product15 from '../../../../public/product666.svg'
import Product16 from '../../../../public/777.svg'

const products = [
  Product1, Product2, Product3, Product4,
  Product5, Product6, Product7, Product8,
  Product9, Product10, Product11, Product12,
  Product13, Product14, Product15, Product16
]

const ProductSection = () => {
  return (
    <div className="container mx-auto px-2 py-8">
      <div className='flex flex-col'>
      <h1 className='heading text-[#000] text-center font-bold text-3xl sm:text-4xl  md:text-5xl lg:text-4xl mb-6'>
        Our Products
      </h1>
      <h2 className='heading-2 text-2xl  mx-[14px] sm:mx-[7px] sm:text-xl md:text-3xl font-bold text-center leading-tight sm:leading-[50px] md:leading-[71px] mb-6 sm:mb-[27px]'>
        Innovate with Our Technology <span className='text-[#209ff1]'>Partners</span>
      </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className=" bg-white flex justify-center items-center p-1 border rounded-lg shadow-md">
            <Image src={product} alt={`Product ${index + 1}`} className="md:w-[89%] md:h-[42%] w-[80%] h-[35%]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSection

