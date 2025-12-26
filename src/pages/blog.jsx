import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Blog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Meri Bagiya Blog",
    "description": "Read our latest articles on gardening tips, plant care guides, landscaping ideas and garden trends from Meri Bagiya experts.",
    "url": "https://meribagiya.com/blog"
  };

  return (
    <>
      <SEO
        title="Garden Blog"
        description="Read our latest articles on gardening tips, plant care guides, landscaping ideas and garden trends from Meri Bagiya experts."
        keywords="garden blog, plant care tips, gardening guides, landscaping ideas"
        canonicalUrl="/blog"
        jsonLd={jsonLd}
      />

      {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="subheader" className="relative jarallax text-light">
                <img src="/assets/images/background/8.webp" className="jarallax-img" alt=""/>
                <div className="container relative z-index-1000">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="crumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Blog</li>
                            </ul>
                            <h1 className="text-uppercase">Blog</h1>
                            <p className="col-lg-10 lead">Transform Your Garden into a Personal Paradise!</p>
                        </div>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt=""/>
                <div className="de-gradient-edge-top dark"></div>
                <div className="de-overlay"></div>
            </section>

            <section>
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-6 col-12">
                            <div className="rounded-1 bg-light overflow-hidden">
                                <div className="row g-2">
                                    <div className="col-md-6 col-12">
                                        <div className="auto-height relative" data-bgimage="url(/assets/images/blog/latest-blog-img-1.webp)" style={{minHeight: '200px'}}>
                                            <div className="abs start-0 top-0 bg-color-2 text-white p-3 pb-2 m-3 text-center fw-600 rounded-5px">
                                                <div className="fs-36 mb-0">20</div>
                                                <span>Jun</span>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6 col-12 relative">
                                        <div className="p-30 pb-60">
                                            <h4><Link className="text-dark" to="/blog">Creative Garden Layouts for Every Space</Link></h4>
                                            <p className="mb-0">This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>

                                            <div className="abs bottom-0 pb-20">
                                                <div className="d-inline fs-14 fw-600 me-3"><i className="icofont-chat id-color-2 me-2"></i>10 Comments</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="rounded-1 bg-light overflow-hidden">
                                <div className="row g-2">
                                    <div className="col-md-6 col-12">
                                        <div className="auto-height relative" data-bgimage="url(/assets/images/blog/latest-blog-img-2.webp)" style={{minHeight: '200px'}}>
                                            <div className="abs start-0 top-0 bg-color-2 text-white p-3 pb-2 m-3 text-center fw-600 rounded-5px">
                                                <div className="fs-36 mb-0">20</div>
                                                <span>Jun</span>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6 col-12 relative">
                                        <div className="p-30 pb-60">
                                            <h4><Link className="text-dark" to="/blog">Top Trends in Modern Garden Landscaping</Link></h4>
                                            <p className="mb-0">This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>
                                        
                                            <div className="abs bottom-0 pb-20">
                                                <div className="d-inline fs-14 fw-600 me-3"><i className="icofont-chat id-color-2 me-2"></i>10 Comments</div>
                                            </div>
                                        </div>
                                    </div>                             
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="rounded-1 bg-light overflow-hidden">
                                <div className="row g-2">
                                    <div className="col-md-6 col-12">
                                        <div className="auto-height relative" data-bgimage="url(/assets/images/blog/3.webp)">
                                            <div className="abs start-0 top-0 bg-color-2 text-white p-3 pb-2 m-3 text-center fw-600 rounded-5px">
                                                <div className="fs-36 mb-0">20</div>
                                                <span>Jun</span>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6 col-12 relative">
                                        <div className="p-30 pb-60">
                                            <h4><Link className="text-dark" to="/blog">DIY Tips for a Stunning Garden Makeover</Link></h4>
                                            <p className="mb-0">This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>
                                        
                                            <div className="abs bottom-0 pb-20">
                                                <div className="d-inline fs-14 fw-600 me-3"><i className="icofont-chat id-color-2 me-2"></i>10 Comments</div>
                                            </div>
                                        </div>
                                    </div>                             
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-6 col-12">
                            <div className="rounded-1 bg-light overflow-hidden">
                                <div className="row g-2">
                                    <div className="col-md-6 col-12">
                                        <div className="auto-height relative" data-bgimage="url(/assets/images/blog/4.webp)">
                                            <div className="abs start-0 top-0 bg-color-2 text-white p-3 pb-2 m-3 text-center fw-600 rounded-5px">
                                                <div className="fs-36 mb-0">20</div>
                                                <span>Jun</span>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6 col-12 relative">
                                        <div className="p-30 pb-60">
                                            <h4><Link className="text-dark" to="/blog">Low-Maintenance Garden Landscaping Ideas</Link></h4>
                                            <p className="mb-0">This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>
                                        
                                            <div className="abs bottom-0 pb-20">
                                                <div className="d-inline fs-14 fw-600 me-3"><i className="icofont-chat id-color-2 me-2"></i>10 Comments</div>
                                            </div>
                                        </div>
                                    </div>                             
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="rounded-1 bg-light overflow-hidden">
                                <div className="row g-2">
                                    <div className="col-md-6 col-12">
                                        <div className="auto-height relative" data-bgimage="url(/assets/images/blog/5.webp)">
                                            <div className="abs start-0 top-0 bg-color-2 text-white p-3 pb-2 m-3 text-center fw-600 rounded-5px">
                                                <div className="fs-36 mb-0">20</div>
                                                <span>Jun</span>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6 col-12 relative">
                                        <div className="p-30 pb-60">
                                            <h4><Link className="text-dark" to="/blog">Seasonal Plants for a Year-Round Garden</Link></h4>
                                            <p className="mb-0">This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>
                                        
                                            <div className="abs bottom-0 pb-20">
                                                <div className="d-inline fs-14 fw-600 me-3"><i className="icofont-chat id-color-2 me-2"></i>10 Comments</div>
                                            </div>
                                        </div>
                                    </div>                             
                                </div>
                            </div>
                        </div>                        
                        
                        <div className="col-lg-6 col-12">
                            <div className="rounded-1 bg-light overflow-hidden">
                                <div className="row g-2">
                                    <div className="col-md-6 col-12">
                                        <div className="auto-height relative" data-bgimage="url(/assets/images/blog/6.webp)">
                                            <div className="abs start-0 top-0 bg-color-2 text-white p-3 pb-2 m-3 text-center fw-600 rounded-5px">
                                                <div className="fs-36 mb-0">20</div>
                                                <span>Jun</span>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-md-6 col-12 relative">
                                        <div className="p-30 pb-60">
                                            <h4><Link className="text-dark" to="/blog">Elegant Pathways to Enhance Your Garden</Link></h4>
                                            <p className="mb-0">This month has been bustling with exciting developments in the world of plants. From groundbreaking new devices to innovative...</p>
                                        
                                            <div className="abs bottom-0 pb-20">
                                                <div className="d-inline fs-14 fw-600 me-3"><i className="icofont-chat id-color-2 me-2"></i>10 Comments</div>
                                            </div>
                                        </div>
                                    </div>                             
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- pagination begin --> */}
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
                        {/* <!-- pagination end --> */}
                    </div>
                </div>
            </section>
            
        </div>
        {/* <!-- content end --> */}


    </>
  )
}

export default Blog;
