import Layout from '@/components/Layout'
import { products } from '@/data/products'
import React from 'react'

export default function katalog() {
  return (
    <Layout>
        <div className='px-14'>
            <p className='text-2xl font-bold'>katalog</p>
            {products.map(product => {
              return (
                <div key={product.id}>
                    <p>{product.nama}</p>
                </div>
              )
            })}
        </div>
    </Layout>
  )
}
