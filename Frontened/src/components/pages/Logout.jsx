import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let authuser = localStorage.getItem("Users")
    const handlelogout = () => {
   
        dispatch(logoutUser(authuser))
        setTimeout(() => {
            toast.success("Logout Successfully")
            navigate("/")
        }, 500);
    }
    return (
        <div>
            <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 cursor-pointer "
                onClick={handlelogout}>               
                Log Out
            </button>
        </div>
    )
}

export default Logout
