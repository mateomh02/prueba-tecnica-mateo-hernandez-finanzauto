import { useState, useContext } from "react";
import { CreateUsersForm } from "../global/interface";
import { useFetchData } from "../hooks/services";
import { contextGlobal } from "../context/Context";
export default function CreateUser() {
    const { fetchDataCreateUser, isLoading } = useFetchData()
    const contextCreate = useContext(contextGlobal)
    const [formData, setFormData] = useState<CreateUsersForm>({
        id: "",
        firstName: "",
        lastName: "",
        picture: "",
        gener: "",
        email: "",
        phone: 0,
    });


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        await fetchDataCreateUser(formData)
        contextCreate?.setCreateGetUser(false) 
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="flex items-center py-12 bg-sky-100 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <form onSubmit={handleSubmit} className="p-8 form-create">
                    <h1 className="flex items-center text-5xl font-extrabold dark:text-white justify-center mb-5">Crear un Usuario</h1>
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
                        <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electronico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="qwer@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="gener" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
                        <input
                            type="text"
                            id="gener"
                            name="gener"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="masculino"
                            value={formData.gener}
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
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400 register"

                        >
                            Registrar
                        </button>
                        <button onClick={() => { contextCreate?.setCreateGetUser(false) }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                                fill="#243444"
                                aria-hidden="true"
                                width='12'
                                height='12'
                            >
                                <path
                                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                                />
                            </svg>
                        </button>

                    </div>
                    {isLoading ? <div className="flex justify-center items-center h-64 loading-delete">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                    </div> : null}
                </form>
            </div></div>
    )
}