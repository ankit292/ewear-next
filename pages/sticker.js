import React from 'react'
import styles from '../styles/Product.module.css'
import Link from 'next/link';

const Stickers = () => {
  return (
    <section className= {`text-gray-600 body-font ${styles.product}`}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">₹160.00</p>
            </div>
          </div>
          </Link>
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">₹210.15</p>
            </div>
          </div>
          </Link>
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <p className="mt-1">₹120.00</p>
            </div>
          </div>
          </Link>
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p className="mt-1">₹180.40</p>
            </div>
          </div>
          </Link>
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">₹160.00</p>
            </div>
          </div>
          </Link>
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <p className="mt-1">₹210.15</p>
            </div>
          </div>
          </Link>
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <p className="mt-1">₹120.00</p>
            </div>
          </div>
          </Link>
          <Link href='/product/wera-the-code' className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <div >
            <div className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71aK+Gjo0uL.jpg" />
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p className="mt-1">₹180.40</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Stickers