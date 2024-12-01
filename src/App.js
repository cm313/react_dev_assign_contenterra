import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Error from "./utils/Error";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      errorElement:<Error/>
    },
    {
      path: '/about',
      element: <About/>,
      errorElement:<Error/>
    },
    {
      path:'/contactus',
      element: <ContactUs/>,
      errorElement:<Error/>
    }
  
   ])

  return (
    <div className="App">
        <RouterProvider router={appRouter}/>
    </div>
  );
}



export default App;
