import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Shopcatalog() {
  return (
    <>
      <SEO
        title="Plant Catalog"
        description="Explore our plant catalog - Natural plants, shop gifts, garden care products and garden accessories at Meri Bagiya."
        keywords="plant catalog, natural plants, garden gifts, garden accessories"
        canonicalUrl="/catalog"
      />

      {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

        <section id="subheader" className="relative bg-light">
            <div className="container relative z-index-1000">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="crumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Catalog</li>
                        </ul>
                        <h1 className="text-uppercase">Catalog</h1>
                        <p className="col-lg-10 lead">Transform Your Garden into a Personal Paradise!</p>
                    </div>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt="Meri Bagiya watermark"/>
        </section>

        <section>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6 col-12">
                        <div className="p-4 h-100 hover" data-bgcolor="#DCE0D9">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6 col-12 text-center">
                                    <img src="/assets/images/shop/misc/5.webp" className="w-100 hover-scale-1-1" alt="Natural Plants" style={{maxWidth: '200px'}}/>
                                </div>
                                <div className="col-md-6 col-12 text-center text-md-start">
                                    <span>Up to 50% Off</span>
                                    <h3>Natural Plants</h3>
                                    <Link to="/catalog" className="btn-main bg-color-2">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="p-4 h-100 hover" data-bgcolor="#E9E8E1">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6 col-12 text-center">
                                    <img src="/assets/images/shop/misc/6.webp" className="w-100 hover-scale-1-1" alt="Shop Gifts" style={{maxWidth: '200px'}}/>
                                </div>
                                <div className="col-md-6 col-12 text-center text-md-start">
                                    <span>Up to 50% Off</span>
                                    <h3>Shop Gifts</h3>
                                    <Link to="/catalog" className="btn-main bg-color-2">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="p-4 h-100 hover" data-bgcolor="#dce0ce">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6 col-12 text-center">
                                    <img src="/assets/images/shop/misc/8.webp" className="w-100 hover-scale-1-1" alt="Garden Care" style={{maxWidth: '200px'}}/>
                                </div>
                                <div className="col-md-6 col-12 text-center text-md-start">
                                    <span>Up to 50% Off</span>
                                    <h3>Garden Care</h3>
                                    <Link to="/catalog" className="btn-main bg-color-2">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="p-4 h-100 hover" data-bgcolor="#f3edde">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6 col-12 text-center">
                                    <img src="/assets/images/shop/misc/9.webp" className="w-100 hover-scale-1-1" alt="Garden Accesories" style={{maxWidth: '200px'}}/>
                                </div>
                                <div className="col-md-6 col-12 text-center text-md-start">
                                    <span>Up to 50% Off</span>
                                    <h3>Garden Accesories</h3>
                                    <Link to="/catalog" className="btn-main bg-color-2">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        

        <section className="jarallax">
            <img src="/assets/images/shop/slider/bg.webp" className="jarallax-img" alt="Plants slider background"/>
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between">

                    <div className="col-lg-5 col-12 text-center text-lg-start">
                        <div className="sw-text-wrapper">
                            <div className="subtitle">Best Quality Plants</div>
                            <h2 className="mb-2 text-uppercase" style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'}}>Discover Amazing <span className="id-color-2">variety of plants</span></h2>
                            <p>From vibrant flowering plants to lush tropical greens, we offer an incredible variety to turn your space into a living paradise.</p>

                            <Link to="/catalog" className="btn-main mb10 mb-3">Shop Now</Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="relative">
                            <img src="/assets/images/shop/misc/7.webp" className="w-100" alt="Variety of plants"/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>

    </div>
    {/* <!-- content end --> */}

    </>
  )
};

export default Shopcatalog;
