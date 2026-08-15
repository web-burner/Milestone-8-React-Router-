import { useEffect, useState } from "react"
import axios from 'axios';

const useProducts = ()=>{
    const [products , setProducts] = useState([])
    const [error , setError] = useState('')
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        axios('../FurnitureData.json')
        .then(d => setProducts(d.data))
        .catch(err => setError(err))
        .finally(()=>setLoading(false))
    },[])
    return {products, error , loading}
}

export {
    useProducts
}