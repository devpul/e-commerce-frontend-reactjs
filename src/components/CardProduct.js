import React from 'react';

export default function CardProduct({ product }) {
  return (
    <div key={product.id} className="border border-[#787878] rounded-2xl p-4">
        <img src={product.gambar} className="rounded-xl" />
        <p className="text-3xl font-light mt-4">{product.nama}</p>
        <p className="text-2xl font-black">{product.harga}</p>
    </div>
  )
}
