import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import Shophomepage from './pages/shop-homepage';
import Contact from './pages/shop-contact';
import Servicesingle from './pages/service-single';
import About from './pages/about';
import Services from './pages/services';
import GardenDesign from './pages/services/garden-design';
import GardenMaintenance from './pages/services/garden-maintenance';
import PlantingServices from './pages/services/planting-services';
import TreeCare from './pages/services/tree-care';
import IrrigationServices from './pages/services/irrigation-services';
import SpecialtyServices from './pages/services/specialty-services';
import PlantRentInOffice from './pages/plant-rent-in-office';
import LandscapeDesign from './pages/services/landscape-design';
import VerticalGarden from './pages/services/vertical-garden';
import BalconyGarden from './pages/services/balcony-garden';
import TerraceGarden from './pages/services/terrace-garden';
import IndoorPlants from './pages/services/indoor-plants';
import ArtificialGrass from './pages/services/artificial-grass';
import WaterFountain from './pages/services/water-fountain';
import PlantRental from './pages/services/plant-rental';
import PlantRentalHome from './pages/services/plant-rental-home';
import CorporateGifting from './pages/corporate-gifting';
import InstagramLanding from './pages/instagram-landing';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import ReturnPolicy from './pages/return-policy';
import Shipping from './pages/shipping';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App/>}>
         <Route path="" element={<Shophomepage/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="service-single" element={<Servicesingle/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="services" element={<Services/>}/>
         <Route path="services/garden-design" element={<GardenDesign/>}/>
         <Route path="services/garden-maintenance" element={<GardenMaintenance/>}/>
         <Route path="services/planting-services" element={<PlantingServices/>}/>
         <Route path="services/tree-care" element={<TreeCare/>}/>
         <Route path="services/irrigation-services" element={<IrrigationServices/>}/>
         <Route path="services/specialty-services" element={<SpecialtyServices/>}/>
         <Route path="services/landscape-design" element={<LandscapeDesign/>}/>
         <Route path="services/vertical-garden" element={<VerticalGarden/>}/>
         <Route path="services/balcony-garden" element={<BalconyGarden/>}/>
         <Route path="services/terrace-garden" element={<TerraceGarden/>}/>
         <Route path="services/indoor-plants" element={<IndoorPlants/>}/>
         <Route path="services/artificial-grass" element={<ArtificialGrass/>}/>
         <Route path="services/water-fountain" element={<WaterFountain/>}/>
         <Route path="services/plant-rental" element={<PlantRental/>}/>
         <Route path="services/plant-rental-home" element={<PlantRentalHome/>}/>
         <Route path="plant-rent-in-office" element={<PlantRentInOffice/>}/>
         <Route path="corporate-gifting" element={<CorporateGifting/>}/>
         <Route path="instagram" element={<InstagramLanding/>}/>
         <Route path="terms" element={<Terms/>}/>
         <Route path="privacy" element={<Privacy/>}/>
         <Route path="return-policy" element={<ReturnPolicy/>}/>
         <Route path="shipping" element={<Shipping/>}/>

      </Route>
   )

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  </React.StrictMode>
);
