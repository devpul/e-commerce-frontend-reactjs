import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';
import React, {useState} from 'react'

export default function Props() {
  
    const [username, ubah] = useState("@ibnu");

    const ubahNama = () => {
        ubah(username === "@ibnu" ? "@bachdar" : "@ibnu")
    }
    
    return (
        <div>
            <h1 className="underline mb-2 text-3xl">Materi Props</h1>
            <h1 className="text-black mb-1">Username: {username}</h1>
            
            {/* PROPS adalah STATE yang dioper ke anaknya (components) */}
            <Sidebar username={username}/>
            <Content username={username}/>

            <button onClick={ubahNama} 
            className="text-white bg-black px-4 py-2 rounded cursor-pointer">
                Ubah Username
            </button>
        </div>
    )
}
