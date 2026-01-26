import React from 'react'

export default function Footer() {
  return (
    // <!-- Footer  -->
    <div className="bg-[#003E29] flex flex-col items-center py-10 gap-4 mt-8">
      <div>
        <img src="gambar/logo-white.svg" />
      </div>

      <div>
        <p className="text-white text-center font-light text-xl">
          Jalan Sumpah Pemuda No. 18 <br />
          Krapyak Semarang (Gedua A Lantai 2)
        </p>
      </div>

      <div className="flex">
        <img src="gambar/ig.svg" />
        <img src="gambar/fb.svg" />
        <img src="gambar/tiktok.svg" />
      </div>
    </div>
    // <!-- Tutup Footer  -->
  )
}
