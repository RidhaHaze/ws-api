import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const [user,setUser]=useState(null)
    const {id}=useParams()

    useEffect(()=>{
const fetchData=async()=>{
try {
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(res.data)
} catch (error) {
    console.log(error)
}
}
fetchData()
    },[id])
  return (
    <div>
        <h3> {user?.name}</h3>
        <p>Address: {user?.address?.street}</p>
    </div>
  )
}

export default UserDetails