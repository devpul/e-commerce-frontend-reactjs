import React from 'react'

export default function TopProduct() {
  return (
    // <!-- Top Product -->
    <div className="px-14 mt-8">
      <div>
        <p className="font-bold text-4xl">Top Products</p>
      </div>

      <div className="flex gap-12 mt-4">
        <div className="border border-[#787878] rounded-2xl p-4">
          <img src="gambar/produk1.png" className="rounded-xl" />
          <p className="text-3xl font-light mt-4">JEANS</p>
          <p className="text-2xl font-black">Rp. 150.000</p>
        </div>

        <div className="border border-[#787878] rounded-2xl p-4">
          <img className="rounded-xl" src="gambar/produk2.png" />
          <p className="text-3xl font-light mt-4">T-SHIRT BLACK</p>
          <p className="text-2xl font-black">Rp. 150.000</p>
        </div>

        <div className="border border-[#787878] rounded-2xl p-4">
          <img className="rounded-xl" src="gambar/produk3.png" />
          <p className="text-3xl font-light mt-4">SEPATU</p>
          <p className="text-2xl font-black">Rp. 150.000</p>
        </div>
      </div>
    </div>
    // <!-- Tutup Top Product  -->
  )
}
