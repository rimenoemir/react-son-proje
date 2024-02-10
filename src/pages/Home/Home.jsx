import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import BizimMeram from '../../components/Gürsu/Gürsumuz';
import Gezilecek from '../../utils/images/ericek-golu-bungalov-ev-ucretleri-bursa.jpg';
import Kaya from '../../utils/images/view.jpg';
import GÜRSU from '../../components/Gürsu/Gürsumuz';


function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h1 className='text-center fw-semibold'>HER ŞEY GÜRSU İÇİN </h1>
                <p>BERABER ÇIKTIK BU YOLA ARTIK BIRAKMAK YAKIŞMAZ</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/projeler">
                        <button type='button' className='btn btn-success btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Sosyal Medya</button>
                    </Link>
                    <Link to="/iletişim">
                        <button type='button' className='btn btn-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>İletişim</button>
                    </Link>
                </div>
            </div>
        </header>
        <div className="py-5">     
             <GÜRSU/>
        </div>
      
        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>Gidilmesi Gereken Yerler</h2>
                        <p>Ericek Gölü 
                        <img src={Gezilecek} className='img-fluid' alt="" />
                          <br></br>Yamaç Paraşütü
                          <img src={Kaya} className='img-fluid' alt="" />
                          <br></br>
                        
                        </p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Daha Fazla</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
    
                    </div>
                </div>
            </div>
        </div>











    </div>
    
  )
}

export default Home;