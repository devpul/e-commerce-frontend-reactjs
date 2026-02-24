import Layout from '@/components/Layout'
import React, { useState } from 'react'
import { URL_API, API_KEY } from '@/utils/index'
import axios from 'axios'

export default function Register() {

    // bikin state
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleForm = async () => {
        const dataRegister = {
            nama,
            email,
            password
        }

        console.log("Data Register: ", dataRegister)

        // selanjutnya API
        setLoading(true)

        try {
            const response = await axios.post(
                
                // 1. url
                URL_API + "/users", 
                
                // 2. data
                dataRegister,
                
                // 3. header / config
                {
                    headers : {
                        'apikey': API_KEY,
                        'Authorization' : 'Bearer ' + API_KEY
                    }
                }
            );
            setLoading(false)
            console.log('Berhasil : ', response)
        } catch (error) {
            setLoading(false)
            setError(error.response.data.message)
            console.log("Terjadi kesalahan", error.response.data.message)
        }
    }

    return (
        <Layout>
            <div className='flex flex-col items-center mt-10'>   
                <p className='font-bold text-xl'>Register</p>

                <div className="border p-8 mt-3 rounded space-y-5 flex flex-col">
                    <div>
                        <p>Nama: {nama}</p>
                        <input type="text" value={nama} onChange={(event) => setNama(event.target.value)}
                        className='outline w-full px-2'/>
                    </div>
                    
                    <div>
                        <p>Email: {email}</p>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                        className='outline w-full px-2'/>
                    </div>
                    
                    <div>
                        <p>Password: {password}</p>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}
                        className='outline w-full px-2'/>
                    </div>
                    
                    {loading ? (
                        <button 
                            className="border-2 border-gray-500 bg-gray-500 px-8 py-2 font-bold text-white rounded-xl "
                        >
                            Loading . . .
                        </button>
                    ) : (
                        <button 
                            onClick={handleForm}
                            className="border-2 border-[#003E29] bg-[#003E29] px-8 py-2 font-bold text-white rounded-xl "
                        >
                            Submit
                        </button>
                    )}
                </div>

    
                {error && (
                    <p className='text-red-500'>{error}</p>
                )}
            </div>
        </Layout>
    )
}
