import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Privetroute = (props) => {

    const {Cmp} = props;
    const navigate = useNavigate();    
    useEffect(() => {
        let login = localStorage.getItem('email')
        if(!login){
            navigate('/login')
        }
    });

    return (
        <div> 
            <Cmp />
        </div>
    )
}

export default Privetroute;