import CardProduct from '@/components/CardProduct'
import Layout from '@/components/Layout'
import { products } from '@/data/products'
import React from 'react'

export default function katalog() {
  return (
    <Layout>
        <div className='px-14'>
            <p className='text-2xl font-bold'>katalog</p>

            <div className='grid md:grid-cols-3 gap-5'>
                {products.map((product, index) => {
                return (
                  <CardProduct key={index} product={product}/>
                )
              })}
            </div>
        </div>
    </Layout>
  )
}
