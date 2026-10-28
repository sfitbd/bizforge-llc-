import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Admin from './pages/Admin';
import { Privacy, Terms, Refund } from './pages/Policy';

const router=createBrowserRouter([{
  path:'/', element:<Layout/>, children:[
    {index:true,element:<Home/>},
    {path:'services',element:<Services/>},
    {path:'services/:slug',element:<ServiceDetail/>},
    {path:'pricing',element:<Pricing/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'order',element:<Order/>},
    {path:'privacy',element:<Privacy/>},
    {path:'terms',element:<Terms/>},
    {path:'refund',element:<Refund/>},
    {path:'admin',element:<Admin/>}
  ]
}]);
export default function App(){return <RouterProvider router={router}/>}
