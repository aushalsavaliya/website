import React from 'react'
import { Navigate } from 'react-router-dom'

const Admin = (props) => {

    const isAdmin = localStorage.getItem('isAdmin')
    if(!isAdmin){
        return <Navigate to="/login" />
    }

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Admin