import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Shopshopall() {
   
  const [data, setData] = useState([])
   
  const getData = () => {
    fetch('Plantslist.json',{headers : {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
    }}).then((response)=>{
        return response.json()
    }).then((myjson) =>{
        setData(myjson)
    })
  }
  
  useEffect(() => {
    getData()
  },[])
  
  
  
    return (
    <>
      <SEO
        title="Shop All Plants"
        description="Browse our complete collection of indoor plants, outdoor plants, flowering plants and gardening accessories. Buy plants online from Meri Bagiya."
        keywords="buy plants online, indoor plants, outdoor plants, flowering plants, plant shop"
        canonicalUrl="/shop-all"
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
                            <li className="active">Shop All</li>
                        </ul>
                        <h1 className="text-uppercase">Shop All</h1>
                        <p className="col-lg-10 lead">Transform Your Garden into a Personal Paradise!</p>
                    </div>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt=""/>
        </section>

        <section>
            <div className="container">
                <div className="row g-4">

                    <div className="col-lg-12">
                        <div className="row g-4">
   { 
                         data && data.length > 0 && data.map((val) => {
                          return(
                        <>
                            
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="de__pcard text-center">
                                    <div className="atr__images">
                                        <div className="atr__promo">
                                            {val.Discount}
                                        </div>
                                        <Link to={`/single-product/${val.Plantid}`}>
                                            <img className="atr__image-main" src={val.Plantimageurl} alt=""/>
                                            <img className="atr__image-hover" src="/assets/images/shop/plants/peace-lily-m.webp" alt=""/>
                                        </Link>
                                        <div className="atr__extra-menu">
                                            <Link to={`/single-product/${val.Plantid}`} className="atr__quick-view"><i className="icon_zoom-in_alt"></i></Link>
                                        </div>
                                    </div>

                                    <h3>{val.Plantname}</h3>

                                    <div className="atr__main-price">
                                        {val.Plantprice}
                                    </div>

                                    <div className="de-rating-ext">
                                        <span className="d-stars">{val.Plantrating}  
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <button className="btn-main bg-color-2">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    })
                  }

                            <div className="col-lg-12 pt-4 text-center">
                                <div className="d-inline-block">
                                    <nav aria-label="Page navigation example">
                                      <ul className="pagination">
                                        <li className="page-item">
                                          <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="fa fa-chevron-left"></i></span>
                                          </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                          <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="fa fa-chevron-right"></i></span>
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
            

    </div>
    {/* <!-- content end --> */}
    </>
  )
}

export default Shopshopall;
