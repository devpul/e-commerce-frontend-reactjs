import { setUser } from '@/redux/userSlice'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
  const [tampil, setTampil] = useState(false)
  const namaUser = useSelector((state) => state.users.namaUser)
  console.log("Nama User: ", namaUser)

	const dispatch = useDispatch()

  	useEffect(() => {
		const ambilDataDariLocalStorage = localStorage.getItem('namaUser');
		console.log('Data yang diambil: ', ambilDataDariLocalStorage);

		if (ambilDataDariLocalStorage) {
			dispatch(setUser(ambilDataDariLocalStorage))
		}

 	}, [])


  return (
	<div className='flex flex-col'>
		{/* Navbar */}
		<div className="flex justify-between px-14 py-4 items-center">
			{/* logo */}
			<div>
				<img src="gambar/logo.svg" />
			</div>
			
			{/* nav links */}
			<div className="md:flex gap-10 font-bold cursor-pointer hidden">
				<Link href="/">
					<p>Home</p>
				</Link>
				<Link href="/katalog">
					<p>Katalog</p>
				</Link>
				<p>Promo</p>
			</div>
			
			{/* nama user */}
			<div className='hidden md:flex'>
				{namaUser ? (
					<div className="flex gap-2">
					<button
						className="px-8 py-2 font-bold text-[#003E29] rounded-xl"
					>
						{namaUser}
					</button>
					{/* <!-- di register ket : warna di bg ditukar dengan yang di text  --> */}
					<button
						className="border-2 border-red-500 bg-red-500 px-8 py-2 font-bold text-white rounded-xl"
					>
						Logout
					</button>
					</div>
				) : (  
					<div className="flex gap-2">
					<Link href="/login">
						<button
						className="border-2 border-[#003E29] bg-white px-8 py-2 font-bold text-[#003E29] rounded-xl"
						>
						Login
						</button>
					</Link>
					
					{/* <!-- di register ket : warna di bg ditukar dengan yang di text  --> */}
					<Link href="/register">
						<button
						className="border-2 border-[#003E29] bg-[#003E29] px-8 py-2 font-bold text-white rounded-xl"
						>
						Register
						</button>
					</Link>
					
					</div>
				)}
			</div>
			
			{/* dropdown */}
			<div className='md:hidden'>
				<img src={tampil ?  '/gambar/close.svg' : '/gambar/menu.svg'} 
					className='w-[35px] cursor-pointer' 
					onClick={() => setTampil(!tampil)}/>
			</div>
		</div>
		{/* tutup navbar */}

		{/* mobile: dropdown */}
		{tampil && (
			<div className=' md:hidden flex flex-col gap-y-5 my-5 items-center'>
				<Link href="/">
					<p>Home</p>
				</Link>
				<Link href="/katalog">
					<p>Katalog</p>
				</Link>
				<p>Promo</p>

				<div className='space-x-5'>
					<Link href="/login">
						<button
						className="border-2 border-[#003E29] bg-white px-8 py-2 font-bold text-[#003E29] rounded-xl"
						>
						Login
						</button>
					</Link>

					<Link href="/register">
						<button
						className="border-2 border-[#003E29] bg-[#003E29] px-8 py-2 font-bold text-white rounded-xl"
						>
						Register
						</button>
					</Link>
				</div>
			</div>
		)}
		{/* mobile: tutup dropdown */}
	</div>
  )
}
