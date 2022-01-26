import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente, handleEliminar}) => {
    
    const navigate = useNavigate()

    const {nombre, empresa, email, telefono, notas, id} = cliente

    return (
        <tr className="border-b-2 hover:bg-gray-50">
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold" >Email: </span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">TEl: </span>{telefono}</p>
            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-3">
                <button className="bg-yellow-500 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs rounded-lg drop-shadow" onClick={() => navigate(`/clientes/${id}`)} type="button">
                    ver
                </button>
                <button className="bg-[#0086E0] hover:bg-[#1f4679] block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-lg drop-shadow" onClick={() => navigate(`/clientes/editar/${id}`)} type="button">
                    Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-lg drop-shadow" onClick={() => handleEliminar(id)} type="button">
                    Eliminar
                </button>
            </td>
            

        </tr>
    )
}

export default Cliente
