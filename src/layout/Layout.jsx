import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

    const location = useLocation()

    const urlActual = location.pathname


    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-red-900 px-5 py-10">
                <h2 className="text-5xl font-black text-center text-white"> CRM - CLIENTES</h2>
                
                <nav className="mt-10">
                    <Link           
                                // sintaxis para dejar fijado un color dependiendo de en que sección estemos
                        className={`${urlActual === '/clientes' ? 'text-red-300' : 'text-white'} text-2xl block mt-2 hover:text-red-300`}
                        to="/clientes"
                    >Clientes</Link>
                    <Link 
                        className={`${urlActual === '/clientes/nuevo' ? 'text-red-300' : 'text-white'} text-2xl block mt-2 hover:text-red-300`}
                        to="/clientes/nuevo"
                    >Nuevo Cliente</Link>
                </nav>
            </div>
            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </div>

            
        </div>
    )
};

export default Layout;
