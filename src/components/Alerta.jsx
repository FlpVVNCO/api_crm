import { ErrorMessage } from 'formik';
import React from 'react';

const Alerta = ({children}) => {
    return ( 
        <div className='text-center my-4 bg-yellow-500 text-white font-bold p-2 uppercase '>
                        {children}
        </div>
    )
}


export default Alerta;
