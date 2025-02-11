import { useEffect, useState, useContext } from "react"
import { useFetchData } from "../hooks/services"
import { UsersForm } from "../global/interface"
import { contextGlobal } from "../context/Context";

export default function EditUser({ id }: { id: number }) {
    const { isLoading, fetchDataUpdate, fetchDataGetInfouser, data } = useFetchData()
    const contextEdit = useContext(contextGlobal)
    const [formData, setFormData] = useState<UsersForm>({
        id: "",
        title: "",
        firstName: "",
        lastName: "",
        picture: "",
        gender: "",
        email: "",
        phone: 0,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await fetchDataUpdate(id, formData)
        contextEdit?.setUpdateGetUser(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        
        const processedValue = type === 'number' && name !== 'id' 
            ? Number(value) 
            : value;
                
        setFormData(prev => ({
            ...prev,
            [name]: processedValue
        }));
    };

    useEffect(() => {
        const loadUserData = async () => {
            await fetchDataGetInfouser(id)
        }
        loadUserData()
    }, [id])

    // Actualizamos formData cuando data cambia
    useEffect(() => {
        if (data) {
            setFormData({
                ...formData,
                id: data.id || "",
                title: data.title || "",
                firstName: data.firstName || "",
                lastName: data.lastName || "",
                picture: data.picture || "",
                gender: data.gender || "",
                email: data.email || "",
                phone: Number(data.phone) || 0,
            });
        }
    }, [data])

    return (
        <div className="flex items-center py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 bg-sky-100" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : (
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="flex flex-col space-y-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label htmlFor="id" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id</label>
                                    <input 
                                        type="text" 
                                        id="id"
                                        name="id"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="123456" 
                                        value={data?.id || ""} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="firstName" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                                    <input 
                                        type="text" 
                                        id="firstName"
                                        name="firstName" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Marlon Mateo" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="lastName" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                                    <input 
                                        type="text" 
                                        id="lastName"
                                        name="lastName" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Hernandez Patiñó" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="picture" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
                                    <input 
                                        type="text" 
                                        id="picture"
                                        name="picture" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="https://url-img" 
                                        value={formData.picture} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="gender" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
                                    <input 
                                        type="text" 
                                        id="gender"
                                        name="gender" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="masculino" 
                                        value={formData.gender} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="phone" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                                    <input 
                                        type="number" 
                                        id="phone"
                                        name="phone" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="30458963365" 
                                        value={formData.phone || ""} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="title" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apodo</label>
                                    <input 
                                        type="text" 
                                        id="title"
                                        name="title" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="30458963365" 
                                        value={formData.title} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Actualizar
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}