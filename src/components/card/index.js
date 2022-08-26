import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../assets';
import { useProducts } from '../../hooks/useProducts';

const Index = () => {
    const [isLoading, data, getAll] = useProducts()

    useEffect(()=>{
        if (data.length < 1) {
            getAll(1, 4);
        }
    }, [])

    return isLoading ? (
        <div style={{ height: '100vh', textAlign: 'center' }}>
            <img src={images['loading.gif']} alt='' />
            Loading Product...
        </div>
    ) : (
        <>
                {data.map(result => (
            <div className="card" key={result.id}>
                <Link to={`/products/${result.id}`}>
                    <div id='img-container' style={{height: '240px'}}>
                    <img
                        loading='lazy'
                        src={images[result.thumbnail]}
                        alt=""
                        />
                    </div>
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