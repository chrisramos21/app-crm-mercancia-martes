import Login from '../pages/Login'
import Home from '../Home'
import RutaProtegida from '../components/RutaProtegida'
import GestionEnvios from '../pages/GestionEnvios'
import EditarEnvio from '../pages/EditarEnvio'
export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home/',
        element: <RutaProtegida componente = {<Home/>} />,
        children:[
            {
                path:"envios",
                element:<GestionEnvios/>
            },
            {
                path:"clientes",
                element:<GestionEnvios/>
            },
            {
                path:"editar/:id",
                element: <EditarEnvio/>
            }
        ]
    }
]