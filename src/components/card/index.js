import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';

const Index = () => {
    const [isLoading, data, getAll] = useProducts()

    useEffect(()=>{
        if (data.length < 1) {
            getAll();
        }
    }, [data.length, getAll])

    return isLoading ? (
        <div style={{ height: '100vh', textAlign: 'center' }}>
            Loading Product...
        </div>
    ) : (
        <>
                {data.map(result => (
            <div className="card" key={result.id}>
                <Link to={`/products/${result.id}`}>
                    <img
                        loading='lazy'
                        src={result.thumbnail}
                        alt="" />
                    <div className="description">
                        <h4>{result.name}</h4>
                        <p>${result.price}</p>
                    </div>
                </Link>
            </div>
                ))}
        </>
    )
}

export default Index