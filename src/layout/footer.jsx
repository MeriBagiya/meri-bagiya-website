import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    {/* <!-- footer begin --> */}
<footer className="section-dark" style={{position: 'relative', overflow: 'hidden'}}>
 <div className="container relative z-2">
     <div className="row gx-5 gy-4">
         <div className="col-lg-4 col-md-6 col-12 text-center text-md-start">
             <img src="/assets/images/MERI-BAGIYA-LOGO-UPDATED.png" className="w-150px" alt="Meri Bagiya - Plant Nursery & Garden Services" style={{maxWidth: '120px'}}/>
             <div className="spacer-20"></div>
             <p>Greater Noida's leading wholesale plant nursery and garden services provider. We supply retail nurseries, landscapers, and garden centers with quality plants. From garden design to maintenance, we bring your dream garden to life—professional, reliable, and passionate about nature.</p>

             <div className="social-icons mb-sm-30" style={{justifyContent: 'center'}}>
                 <a href="https://www.facebook.com/share/1GT8gTXRsH/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                 <a href="https://www.instagram.com/meribagiya_" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                 <a href="https://www.youtube.com/@Meri_Bagiya_Nersery" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                 <a href="https://wa.me/919220404309" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 col-12 order-lg-1 order-md-2">
             <div className="row">
                 <div className="col-6">
                     <div className="widget">
                         <h5>Company</h5>
                         <ul>
                             <li><Link to='/'>Home</Link></li>
                             <li><Link to='/services'>Our Services</Link></li>

                             <li><Link to='/about'>About Us</Link></li>

                             <li><Link to='/contact'>Contact</Link></li>
                         </ul>
                     </div>
                 </div>
                 <div className="col-6">
                     <div className="widget">
                         <h5>Our Services</h5>
                         <ul>
                             <li><Link to='/services/garden-design'>Garden Design</Link></li>
                             <li><Link to='/services/garden-maintenance'>Garden Maintenance</Link></li>
                             <li><Link to='/services/planting-services'>Planting Services</Link></li>
                             <li><Link to='/services/tree-care'>Tree Care</Link></li>
                             <li><Link to='/services/irrigation-services'>Irrigation Services</Link></li>
                             <li><Link to='/services/specialty-services'>Specialty Services</Link></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
         <div className="col-lg-4 col-md-6 col-12 order-lg-2 order-md-1">
             <div className="widget">
                 <div className="fw-bold text-white"><i className="icofont-clock-time me-2 id-color-2"></i>We're Open</div>
                 Monday - Friday 08.00 - 18.00

                 <div className="spacer-20"></div>

                 <div className="fw-bold text-white"><i className="icofont-location-pin me-2 id-color-2"></i>Office Location</div>
                 Near Ace Aspire, Amrapali Leisure Valley, Greater Noida, Uttar Pradesh-201318

                 <div className="spacer-20"></div>

                 <div className="fw-bold text-white"><i className="icofont-envelope me-2 id-color-2"></i>Send a Message</div>
                 Contact@meribagiya.com

                 <div className="spacer-20"></div>

                 <div className="fw-bold text-white"><i className="icofont-phone me-2 id-color-2"></i>Call Us Directly</div>
                 +919220404309
             </div>
         </div>
     </div>
 </div>
 <div className="subfooter">
     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <div className="de-flex" style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', textAlign: 'center'}}>
                     <div className="de-flex-col" style={{width: '100%', marginBottom: '10px'}}>
                         Copyright 2024 - Meri Bagiya By AGreenForest
                     </div>
                     <ul className="menu-simple" style={{justifyContent: 'center', flexWrap: 'wrap'}}>
                         <li><a href="#">Terms &amp; Conditions</a></li>
                         <li><a href="#">Privacy Policy</a></li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <img src="/assets/images/misc/silhuette-1-black.webp" alt="" style={{position: 'absolute', bottom: 0, left: 0, width: '100%', opacity: 0.3, pointerEvents: 'none'}}/>
</footer>
{/* <!-- footer end -->  */}
 </>
  )
}

export default Footer;
