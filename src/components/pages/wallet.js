import React from 'react';
import Wallet from '../components/wallet';
import Footer from '../components/footer';


const wallet = () => (
  <div>

    <section className='jumbotron breadcumb no-bg' >
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12'>
              <h1 className='text-center' style={{ fontWeight: "700", fontSize: "50px" }}>Connect with your Wallet</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <Wallet />
    </section>

    <Footer />
  </div>

);
export default wallet;