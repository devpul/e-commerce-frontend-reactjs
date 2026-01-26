import React from 'react'

export default function Banner() {
  return (
    // <!-- Banner -->
    <div className="bg-[#E4BBA1] flex items-center justify-between px-14">
      {/* <!-- Judul & Tombol Banner  --> */}
      <div>
        <p className="text-3xl font-light text-black">Diskon 30% Hari ini</p>
        <p className="text-6xl font-black text-[#003E29]">
          Promo 2025 <br />
          Jacket Collection
        </p>
        <button
          className="text-xl font-bold text-black bg-white py-4 px-6 mt-8 rounded-xl"
        >
          Beli Sekarang
        </button>
      </div>
      {/* <!-- Tutup Judul & Tombol Banner --> */}

      {/* <!-- Gambar Banner  --> */}
      <div>
        <img src="gambar/hero.png" className="h-[544px]" />
      </div>
      {/* <!-- Tutup Gambar Banner  --> */}
    </div>
    // <!-- Tutup Banner  -->
  )
}
