// import { message } from 'antd'
import { useState } from 'react'
import api from '../api'

export const useProducts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    
    const getAll = async (page, limit) => {
        try {
            setIsLoading(true)
            const result = await api.getAll(page, limit)
            setData(result.data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    
    return [isLoading, data, getAll]
}

export const useProductDetail = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    
    const getDetail = async id => {
        try {
            setIsLoading(true)
            const result = await api.getById(id)
            setData(result.data)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    return [isLoading, data, getDetail]
}