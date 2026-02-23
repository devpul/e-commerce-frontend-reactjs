import Layout from '@/components/Layout'
import React, { useState } from 'react'

export default function Register() {

    // bikin state
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Layout>
            <div className='flex flex-col items-center mt-10'>   
                <p className='font-bold text-xl'>Register</p>

                <div className="border p-8 mt-3 rounded space-y-5">
                    <div>
                        <p>Nama: {nama}</p>
                        <input type="text" value={nama} onChange={(event) => setNama(event.target.value)}
                        className='outline w-100'/>
                    </div>
                    <div>
                        <p>Email: {email}</p>
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}
                        className='outline w-100'/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
