import { useState, useEffect } from "react";
import Cliente from "../components/Cliente";



const Inicio = () => {

      const [clientes, setClientes] = useState([])

      // consultando una api cuando el componente está listo
      useEffect(() => {
        const obtenerClientesAPI = async() =>{
            try{
              const url = 'http://localhost:4000/clientes'
              // metodo get por default
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setClientes(resultado);
            }catch(error){
              console.log(error)
            }
        }
        

        obtenerClientesAPI()
      }, [])
  
      const handleEliminar = async (id) =>{
        const confirmar = confirm('¿Deseas eliminar este cliente?')

        if(confirmar){
          try {
            // metodo para eliminar
              const url = `http://localhost:4000/clientes/${id}`
              const respuesta = await fetch (url, {
                method: 'DELETE'
              })

              await respuesta.json()
              // manipulando el state, para quitar al cliente y traer las otras id
              const arrayClientes = clientes.filter(cliente => cliente.id !== id)
              setClientes(arrayClientes)
          } catch (error) {
            console.log(error);
          }

        }
      }
  return (
      <>
        <h1 className='font-black text-4xl text-red-900 '>Clientes</h1>
        <p className='mt-3 font-bold'>Administra tus Clientes</p>                            
        
        
        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className="bg-red-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contácto</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
              {clientes.map (cliente => (
                  <Cliente
                    key={clientes.id}
                    cliente={cliente}
                    handleEliminar={handleEliminar}
                  />
              )) }
          </tbody>
        </table>
      </>   
  )
}

export default Inicio
