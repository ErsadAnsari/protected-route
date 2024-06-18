import React from 'react'
import { Link } from 'react-router-dom'
import useAuth  from "../hooks/useAuth"

const Dashboard = () => {
     const { setAuth} = useAuth();
  return (
    <>
    <div>Welcome to Dashboard</div>
    <Link to="/home">Home</Link>
    <Link to="/" onClick={()=>setAuth({})}>Logout</Link>

    </>

  )
}

export default Dashboard