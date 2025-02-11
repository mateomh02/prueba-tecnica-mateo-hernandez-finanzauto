import { useFetchData } from "../../hooks/services";
import { useEffect, useState, useContext } from "react";
import ShowUser from "../../components/showUser";
import { contextGlobal } from "../../context/Context";
import CreateUser from "../../components/createUseer";
import ConfirmDelete from "../../components/confirmDelete";
import EditUser from "../../components/editUser";

export default function Home() {
    const { fetchDataGet, isLoading, data } = useFetchData()
    const [idUser, setIdUser] = useState<number>(0)
    const [idUserUpdate, setIdUserUpdate] = useState<number>(0)
    const [searchTerm, setSearchTerm] = useState('');
    const [idUserDelete, setIdUserDelete] = useState<number>(0)
    const contextHome = useContext(contextGlobal)

    useEffect(() => {
        fetchDataGet()
    }, [fetchDataGet, contextHome?.modalDeletetUser, contextHome?.modalCreatetUser, contextHome?.modalUpdatetUser])


    const filteredUsers = data?.data.filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            {isLoading ? <div className="flex justify-center items-center h-64 loading-delete">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div> :
                <>
                    <h1 className="flex items-center text-5xl font-extrabold dark:text-white justify-center mb-5">Dashborad Usuarios</h1>
                    <div className="flex justify-between mb-5 container-head">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>

                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="Buscar por nombre..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search"
                            />
                        </div>
                        <button
                            className="create-user focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={() => contextHome?.setCreateGetUser(true)}
                        >
                            Crear Usuario
                        </button>
                    </div>
                    <div className="overflow-auto">

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Id</th>
                                    <th scope="col" className="px-6 py-3">Nombres y apellidos</th>
                                    <th scope="col" className="px-6 py-3">Foto</th>
                                    <th scope="col" className="px-6 py-3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers?.map((item, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">{item.id}</td>
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{item.firstName} {item.lastName}</div>
                                                <div className="font-normal text-gray-500">{item.title}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src={item.picture || 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'}
                                                alt="User profile"
                                            />
                                        </td>
                                        <td className="px-6 py-4 actions">
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                                onClick={() => {
                                                    setIdUserDelete(item.id)
                                                    contextHome?.setDeleteGetUser(true)
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    width="12"
                                                    height="12"
                                                    fill="currentColor"
                                                >
                                                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                                </svg>
                                            </button>
                                            <button
                                                className="bg-sky-950 hover:bg-sky-950 text-white font-bold py-2 px-4 rounded-full"
                                                onClick={() => {
                                                    contextHome?.setUpdateGetUser(true)
                                                    setIdUserUpdate(item.id)
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    width="12"
                                                    height="12"
                                                    fill="white"
                                                >
                                                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                                                </svg>
                                            </button>
                                            <button
                                                id="show"
                                                className="bg-orange-300 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-full"
                                                onClick={() => {
                                                    contextHome?.setModalGetUser(true)
                                                    setIdUser(item.id)
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="text-white"
                                                    width="12"
                                                    height="12"
                                                    fill="currentColor"
                                                >
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            }
            {contextHome?.modalGetUser && <ShowUser id={idUser} />}
            {contextHome?.modalCreatetUser && <CreateUser />}
            {contextHome?.modalDeletetUser && <ConfirmDelete id={idUserDelete} />}
            {contextHome?.modalUpdatetUser && <EditUser id={idUserUpdate} />}
        </div>
    )
}