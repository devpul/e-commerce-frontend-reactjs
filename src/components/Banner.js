import React from 'react'

export default function Banner() {
  return (
    // <!-- Banner -->
    <div className="bg-[#E4BBA1] flex md:flex-row flex-col-reverse items-center justify-between px-14 py-3">
      {/* <!-- Judul & Tombol Banner  --> */}
      <div className='text-center'>
        <p className="text-3xl font-light text-black mb-3">Diskon 30% Hari ini</p>
        <p className="md:text-6xl font-black text-[#003E29] text-3xl">
          Promo 2025 <br />
          Jacket Collection
        </p>
        <button
          className="text-xl font-bold text-black bg-white py-4 px-6 mt-3 rounded-xl"
        >
          Beli Sekarang
        </button>
      </div>
      {/* <!-- Tutup Judul & Tombol Banner --> */}

      {/* <!-- Gambar Banner  --> */}
      <div className=''>
        <img src="gambar/hero.png" className="md:h-[544px] h-[244px] mb-10" />
      </div>
      {/* <!-- Tutup Gambar Banner  --> */}
    </div>
    // <!-- Tutup Banner  -->
  )
}
