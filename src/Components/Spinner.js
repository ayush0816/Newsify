import React from 'react'
import loading from '../loading.gif'

const Spinner =()=> {
    
        return (
            <div className='text-center my-5' >
                <img src={loading}  alt= ""/>
            </div>
        )
    
}

export default Spinner