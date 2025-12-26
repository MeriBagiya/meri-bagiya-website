import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

function Shopproductsingle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/Plantslist.json')
      .then(response => response.json())
      .then(data => {
        const product = data.find(p => p.Plantid === parseInt(id));
        setProduct(product);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.Plantname,
    "image": `https://meribagiya.com${product.Plantimageurl}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Meri Bagiya"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://meribagiya.com/single-product/${product.id}`,
      "priceCurrency": "INR",
      "price": product.Plantprice.replace('₹', ''),
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Meri Bagiya"
      }
    }
  };

  return (
    <>
      <SEO
        title={product.Plantname}
        description={product.description}
        keywords={product.keywords}
        canonicalUrl={`/single-product/${product.id}`}
        ogImage={`https://meribagiya.com${product.Plantimageurl}`}
        ogType="product"
        jsonLd={jsonLd}
      />

      {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section className="bg-light pt-20 pb-20 mt75 sm-mt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="crumb m-0">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop-all">Shop</Link></li>
                                <li className="active">{product.Plantname}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-100 pb-100">
                <div className="container">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-6 col-12">
                            <div className="product-image-main mb-3">
                                <img src={product.Plantimageurl} className="w-100 rounded-1" alt={product.Plantname}/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="de-rating-ext mb-3">
                                <span className="d-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </span> {product.Plantrating}
                            </div>
                            <h2 className="fs-40 fs-48">{product.Plantname}</h2> 
                            <p className="col-lg-10">{product.description}</p>
                            <div className="d-flex mb-4 align-items-center">
                                <div>
                                    <h3 className="fs-32 mb-0 me-2">{product.Plantprice}</h3>
                                </div>
                                {product.Discount &&
                                  <div>
                                      <span className="fs-18 fw-600 px-3 rounded-20px bg-color-2 text-white">{product.Discount}</span>
                                  </div>
                                }
                            </div>                            

                            <div className="group radio__button mb-4">
                                <h5 className="mb-3">Select Plant Size</h5>
                                 <input type="radio" name="size" id="size_1" value="small" checked />
                                 <label for="size_1">Small</label>
                                  
                                 <input type="radio" name="size" id="size_2" value="small" />
                                 <label for="size_2">Medium</label>
                                  
                                   <input type="radio" name="size" id="size_3" value="small" />
                                 <label for="size_3">Large</label>
                            </div>

                            <div className="group radio__button mb-4">
                                <h5 className="mb-3">Select Planter</h5>
                                 <input type="radio" name="planter" id="planter_1" value="small" checked />
                                 <label for="planter_1">Terracotta</label>
                                  
                                 <input type="radio" name="planter" id="planter_2" value="small" />
                                 <label for="planter_2">Ceramic</label>
                                  
                                 <input type="radio" name="planter" id="planter_3" value="small" />
                                 <label for="planter_3">Plastic</label>

                                 <input type="radio" name="planter" id="planter_4" value="small" />
                                 <label for="planter_4">Concrete</label>
                            </div>

                            <div className="group radio__button mb-4">
                                <h5 className="mb-3">Quantity</h5>
                                <div className="de-number">
                                    <span className="d-minus">-</span>
                                    <input type="text" className="no-border no-bg" value="1"/>
                                    <span className="d-plus">+</span>
                                </div>
                            </div>
                            
                            <a className="btn-main mt-4" href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
        {/* <!-- content end --> */}

    </>
  )
}

export default Shopproductsingle;
