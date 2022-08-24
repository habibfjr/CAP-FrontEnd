import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <footer>
            <div className='content-col' style={{display: 'flex', flexDirection: 'row', color: 'white', justifyContent: 'space-around', marginTop: '20px'}}>
                <div className='information' style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft:'20px'}}>
                    <h4 style={{color: 'white', fontWeight: 'bold'}}>Cele Shop</h4>
                    <Link to='#' style={{color: 'white'}}> About </Link>
                    <Link to='#' style={{color: 'white'}}> Blog </Link>
                    <Link to='#' style={{color: 'white'}}> Help Center </Link>
                </div>

                <div className='contact' style={{textAlign: 'center'}}>
                        <h4 style={{color: 'white', fontWeight: 'bold'}}>Contact</h4>
                        <p>cs@celeshop.com</p>
                        <p>Jl. T.B. Simatupang No. 666 <br/>
                            Pasar Minggu, Jakarta Selatan, 12560
                        </p>
                </div>

                <div className='socials' style={{marginRight:'20px'}}>
                        <h4 style={{color: 'white', fontWeight: 'bold'}}>Follow us</h4>
                    <div className='soc-logo' style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                        <InstagramOutlined style={{scale: '1.5'}}/>
                        <FacebookOutlined style={{scale: '1.5'}}/>
                        <TwitterOutlined style={{scale: '1.5'}}/>
                    </div>
                </div>

                
            </div>
            <hr style={{margin: '20px 80px'}}/>
            &copy; Front-End Web Dev - CAP - Yusuf Habib Fajr
        </footer>
    )
}

export default Index