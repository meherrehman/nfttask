import React from 'react'
import Footer from '../components/footer';
import Wallet from '../components/wallet';

const blogs = () => {
    return (
        <div>
            <section className='jumbotron breadcumb no-bg' >
                <div className='mainbreadcumb'>
                    <div className='container'>
                        <div className='row m-10-hor'>
                            <div className='col-12'>
                                <h1 className='text-center' style={{ fontWeight: "700", fontSize: "50px" }}>Blogs</h1>
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
    )
}

export default blogs;