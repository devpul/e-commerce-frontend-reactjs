import CardProduct from '@/components/CardProduct'
import Layout from '@/components/Layout'
import { products } from '@/data/products'
import { API_KEY, URL_API } from '@/utils/index'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function katalog() {

    const [dataProducts, setDataProducts] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // sekali doang
    useEffect(() => {
            const ambilDataProduct = async () => {

                setLoading(true)

                try {
                    const response = await axios.get(URL_API + "/products", {

                        // di header
                        headers : {
                            'apikey': API_KEY, 
                            'Authorization': 'Bearer ' + API_KEY
                        }
                    })

                    console.log("Hasil Get API: " , response.data)
                    setLoading(false)
                    setDataProducts(response.data)

                }catch (error){
                    setLoading(false)
                    setError(error?.response?.data?.message)
                    console.log("Maaf Server Masih Error 🙏🏻", error.response.data?.message)
                }
            }
    
            ambilDataProduct()
    }, [])
  
    
    return (
        <Layout>
            <div className='px-14'>
                <p className='text-2xl font-bold text-center'>Katalog Produk</p>

                {/* <button 
                className="px-5 py-2 bg-green-500 text-whit"
                onClick={() => setLampu("nyala")}>Lampu Nyala</button>
                
                <button 
                className="px-5 py-2 bg-red-500 text-white"
                onClick={() => setLampu("mati")}>Lampu Mati</button> */}

                <div className='grid md:grid-cols-3 gap-5'>
                    {dataProducts && dataProducts.map((product, index) => {
                        return (
                            <CardProduct key={index} product={product} />
                        )
                    })}
                </div>

                {loading && (
                    <p className='text-center text-8xl min-h-screen'>Loading...</p>
                )}

                {error && (
                    <p className='text-center text-5xl min-h-screen text-red-500'>{error}</p>
                )}
            </div>
        </Layout>
    )
}
