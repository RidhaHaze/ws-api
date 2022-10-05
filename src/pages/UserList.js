import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'

function UserList() {
    const [users,setUsers]=useState([])
useEffect(()=>{
    const fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(err=>console.log(err))
    }
    fetchData()
},[])

  return (
    <Box sx={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"90%",margin:"50px auto",gap:"30px"}}>
        {
            users.map(user=><UserCard key={user.id} {...user} />)
        }
    </Box>
  )
}

export default UserList