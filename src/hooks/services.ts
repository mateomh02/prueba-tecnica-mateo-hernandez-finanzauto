
import { useCallback, useState } from "react"
import { propsGet } from '../global/interface'

export const useFetchData = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<propsGet | null>(null)
    const [stateDelete, setStateDelete] = useState<boolean>(false)

    const fetchDataGet = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://dummyapi.io/data/v1/user', {
                method: 'GET',
                headers: {
                    'app-id': '63473330c1927d386ca6a3a5',
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log('Ocurrio un error', error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const fetchDataGetInfouser = useCallback(async (id: number) => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
                method: 'GET',
                headers: {
                    'app-id': '63473330c1927d386ca6a3a5',
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log('Ocurrio un error', error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const fetchDataCreateUser = useCallback(async (userData: { id: string; firstName: string; lastName: string; picture: string; gener: string; phone: number;}) => {
        setIsLoading(true)
        try {
            const response = await fetch('https://dummyapi.io/data/v1/user/create', {
                method: 'POST',
                headers: {
                    'app-id': '63473330c1927d386ca6a3a5',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            })
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log('Ocurrio un error en el POST', error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const fetchDataDelete = useCallback(async (id: number) => {
        setIsLoading(true)
        try {
            await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'app-id': '63473330c1927d386ca6a3a5',
                    "Content-Type": "application/json",
                }
            })
            setStateDelete(true)
            return true
        } catch (error) {
            console.log('Ocurrio un error', error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const fetchDataUpdate = useCallback(async (id: number, userData: { id: string; firstName: string; lastName: string; picture: string; title: string; gender: string; phone: number;}) => {
        setIsLoading(true)
        try {
            await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
                method: 'PUT',
                headers: {
                    'app-id': '63473330c1927d386ca6a3a5',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData)
            })
            
            return true

        } catch (error) {
            console.log('Ocurrio un error', error)
        } finally {
            setIsLoading(false)
        }
    }, [])


    return { fetchDataGet, isLoading, data, stateDelete, fetchDataGetInfouser, fetchDataCreateUser, fetchDataDelete, fetchDataUpdate }
}