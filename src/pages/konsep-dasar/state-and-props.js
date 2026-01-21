import React, { useState } from 'react'

export default function Home() {
  
  // ================================== STATE ==================================
    const [namaSaya, setNamaSaya] = useState("Ibnubachdar");
    const [warnaNama, setWarna] = useState("")

  // ================================== arrow function ==================================
  const ubahNama = () => {
    alert("Tombol udah dipencet!");
    setNamaSaya("Raditya Dhika")
    setWarna("text-blue-500")
  }

  return (
    <div>
      <h1 className={warnaNama || "text-red-500"}>
        Halaman React Pertama Saya {namaSaya}
      </h1>

      <button onClick={ubahNama} className="bg-black text-white px-4 py-2 rounded">
        Ubah Nama Saya
      </button>
    </div>
  )
}
