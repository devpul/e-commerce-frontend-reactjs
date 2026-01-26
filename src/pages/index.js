import React from 'react'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import TopProduct from '@/components/TopProduct'

export default function Home() {
  return (
    <Layout>
        <Banner />
        <TopProduct />
    </Layout>
  )
}
