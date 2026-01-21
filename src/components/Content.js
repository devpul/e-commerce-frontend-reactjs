import React from 'react'

export default function Sidebar(props) {
  return (
    <div className="bg-blue-200 mb-3">
      <h1>Content</h1>
      <p>Ini hasil operan dari halaman Props : { props.username }</p> 
    </div>
  )
}