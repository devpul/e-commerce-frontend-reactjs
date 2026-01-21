import React from 'react'

export default function Sidebar(username) {
  return (
    <div className="bg-yellow-200">
      <h1>Sidebar</h1>
      <p>Ini hasil operan dari halaman Props : { username.username }</p> 
    </div>
  )
}