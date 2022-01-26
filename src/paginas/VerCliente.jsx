import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import Spinner from '../components/Spinner';

const VerCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        // se le agrega el valor contrario a lo que se presenta en cargando
        setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try{
                const url =`http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado);

            }catch(error){
                console.log(error);
            }
            setCargando(false)
        }
        obtenerClienteAPI()
    }, []);
    
    
    return (

        cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? <p>No hay resultado</p> : (
    <div>
        <>
            <h1 className='font-black text-4xl text-red-900 '> Ver Cliente: {cliente.nombre}</h1>
            <p className='mt-3 font-bold'> Información del cliente</p>                            
            <p className='text-xl text-gray-600 mt-10'> 
                <span className='text-gray-800 uppercase font-bold'> Cliente: </span>
                {cliente.nombre}
            </p>
            <p className='text-xl text-gray-700 mt-2'> 
                <span className='text-gray-800 uppercase font-bold'> Empresa: </span>
                {cliente.empresa}
            </p>
            <p className='text-xl text-gray-700 mt-2'> 
                <span className='text-gray-800 uppercase font-bold'> Email: </span>
                {cliente.email}
            </p>
            {cliente.telefono && (
                <p className='text-xl text-gray-700 mt-2'> 
                    <span className='text-gray-800 uppercase font-bold'> Telefono: </span>
                    {cliente.telefono}
                </p>
            )}
            
            {cliente.notas && (
                <p className='text-xl text-gray-700 mt-2'> 
                    <span className='text-gray-800 uppercase font-bold'> Notas: </span>
                    {cliente.notas}
                </p>
            )}
            </>
    </div>
        )
    )
};

export default VerCliente;
