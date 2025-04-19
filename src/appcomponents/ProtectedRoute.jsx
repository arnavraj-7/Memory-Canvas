import React from 'react'
import { useActiveUser } from '@/contexts/ActiveUser'
import {useNavigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {  
    const navigate=useNavigate();  
    const {active} =useActiveUser();
  return active?children:navigate("/Login") 
}

export default ProtectedRoute