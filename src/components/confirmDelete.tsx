import { useFetchData } from "../hooks/services";
import { contextGlobal } from "../context/Context";
import { useContext } from "react";

export default function ConfirmDelete({ id }: { id: number }) {
    const { fetchDataDelete, fetchDataGet, isLoading } = useFetchData()
    const contextDelete = useContext(contextGlobal)

    const handleDelete = async () => {
        const success = await fetchDataDelete(id);
        if (success) {
            await fetchDataGet()
            contextDelete?.setDeleteGetUser(false);
        }
    };
    return (
        <div id="default-modal" className="bg-sky-100 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex" aria-modal="true">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Deseas eliminar este usuario?
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Si eliminas este usuario, no podrás volver a verlo ni editar su información. Esta acción es irreversible, por lo que una vez eliminado, todos sus datos desaparecerán permanentemente de la lista y no habrá forma de recuperarlos. Asegúrate de que realmente deseas eliminarlo antes de continuar
                        </p>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleDelete}>
                            Aceptar
                        </button>
                        <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={
                            () => {
                                contextDelete?.setDeleteGetUser(false)
                            }
                        }>Volver</button>

                    </div>
                    {isLoading ? (
                        <>
                            <div className="flex justify-center items-center h-64 loading-delete">
                                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                            </div>
                        </>
                    ) : (
                        null
                    )}
                </div>
            </div>
        </div>
    )
}