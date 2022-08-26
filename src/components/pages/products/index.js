import React, { useEffect } from 'react';
import Header from '../../header'
import Footer from '../../footer'
import { useProducts } from '../../../hooks/useProducts';
import { Button } from 'antd';
import { images } from '../../../assets';
import { Link } from 'react-router-dom';

const Index = () => {
    const [isLoading, data, getAll] = useProducts()

    useEffect(()=>{
        if (data.length < 1) {
            getAll(1, 4);
        }
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <br /><h1>All Products</h1><br /><br />
            </div>
            {isLoading ? (
            <div style={{ height: '100vh', textAlign: 'center' }}>
            <img src={images['loading.gif']} alt='' /><br/>
            Loading Product...
            </div>) 
        : (
        <div className="container-card">
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
                
            </div>)}
            

            <div style={{ marginTop: '100px'}}>
            <Button
            onClick={()=> getAll(1, 4)}
            >1</Button>

            <Button
            onClick={()=> getAll(2, 4)}
            >2</Button>

            <Button
            onClick={()=> getAll(3, 4)}
            >3</Button>
            </div>

            <div style={{height: '100px'}} />
            <Footer />
        </>
    )
}

export default Index