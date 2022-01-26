import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import Formulario from "../components/Formulario"

const EditarCliente = () => {

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
    <>
    <h1 className='font-black text-4xl text-red-900 '>{cliente?.nombre ? 'Editar Cliente': 'No se encontraron resultados'}</h1>
    <p className='mt-3 font-bold'>{cliente?.nombre ? 'Edita los clientes con este formulario': ''}</p>                            
    
    {cliente?.nombre && (
        <Formulario
        cliente={cliente}
        cargando={cargando}
        />
    )}
    
    </>
  )
}

export default EditarCliente;
