import { useEffect, useContext } from "react"
import { useFetchData } from "../hooks/services"
import { contextGlobal } from "../context/Context"

export default function ShowUser({ id }: { id: number }) {
    const { isLoading, data, fetchDataGetInfouser } = useFetchData()
    const contextShowUser = useContext(contextGlobal)
    useEffect(() => {
        fetchDataGetInfouser(id)
    }, [id, fetchDataGetInfouser])

    return (
        <>
            {contextShowUser?.modalGetUser && 
                <div className="flex items-center py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-sky-100" id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        {isLoading ? <div className="flex justify-center items-center h-64">
                               <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                           </div> :
                            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                <div className="flex flex-col space-y-4">
                                    <img src={data?.picture || 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
                                    <h2 className="uppercase text-xl font-bold text-center">{data?.firstName} {data?.lastName}</h2>
                                    <div className="space-y-2">
                                        <p><span className="font-semibold">Correo: :</span> {data?.email || "No hay información"}</p>
                                        <p><span className="font-semibold">Numero Celular:</span> {data?.phone || "No hay información"}</p>
                                        <p><span className="font-semibold">Genero:</span> {data?.gender || "No hay información"}</p>
                                        <p><span className="font-semibold">Apodo:</span> {data?.title || "No hay información"}</p>
                                    </div>
                                </div>
                                <button type="button" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
                                onClick={(()=>contextShowUser.setModalGetUser(false))}
                                >Cerrar</button>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}