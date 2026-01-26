import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    // <!-- Navbar -->
    <div className="flex justify-between px-14 py-4 items-center">
      <div>
        <img src="gambar/logo.svg" />
      </div>

      <div className="flex gap-10 font-bold cursor-pointer">
        
        <Link href="/">
          <p>Home</p>
        </Link>

        <Link href="/katalog">
          <p>Katalog</p>
        </Link>
        
        <p>Promo</p>
      </div>

      <div className="flex gap-2">
        <button
          className="border-2 border-[#003E29] bg-white px-8 py-2 font-bold text-[#003E29] rounded-xl"
        >
          Login
        </button>
        {/* <!-- di register ket : warna di bg ditukar dengan yang di text  --> */}
        <button
          className="border-2 border-[#003E29] bg-[#003E29] px-8 py-2 font-bold text-white rounded-xl"
        >
          Register
        </button>
      </div>
    </div>
    // <!-- Tutup Navbar  -->
  )
}
