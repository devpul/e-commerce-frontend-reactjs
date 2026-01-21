import React, { useState } from 'react'

export default function State() {
    const [isTampil, setTampil] = useState(true);

    const ubahTampil = () => { 
        setTampil(!isTampil)
    }

    return (
        <div>
            { isTampil ? <p className="text-black">Text ini akan hilang ketika di klik</p> : null }
            
            <button onClick={ubahTampil} className="bg-black text-white py-2 px-4 cursor-pointer">
                { isTampil ? "Hilang" : "Tampilkan"}
            </button>
        </div>
    )
}