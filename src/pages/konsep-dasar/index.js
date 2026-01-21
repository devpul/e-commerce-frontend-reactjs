import React, { useState } from 'react'

export default function Home() {
  let namaSaya = 'ibnu bachdar'

  // ================================== arrow function ==================================
  const ubahNama = () => {
    alert("Tombol udah dipencet!");
  }

  return (
    <div>
      <h1 className='text-red-500'>
        Halaman React Pertama Saya {namaSaya}
      </h1>

      <button onClick={ubahNama} className="bg-black text-white px-4 py-2 rounded">
        Ubah Nama Saya
      </button>
    </div>
  )
}
