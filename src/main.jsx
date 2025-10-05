import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


//Routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Routes
import Root from './routes/Root.jsx';
import Home from './routes/home.jsx';
import English from './routes/english.jsx';
import Politicaprivacidad from './routes/politicaprivacidad.jsx';
import Politicaprivenglish from './routes/politicaprivenglish.jsx';
import Creditoses from './routes/creditoses.jsx';
import Creditosen from './routes/creditosen.jsx';

//Router

const router = createBrowserRouter([
{
  path: "/",
  element: <Root />,
  children: [
    {
      index: true,
      element: <Home />
    },
    { path: "home",
      element: <Home />
    },
    { path: "english",
      element: <English />
    },
    { path: "politicaprivacidad",
      element: <Politicaprivacidad />
    },
    {
      path: "politicaprivenglish",
      element: <Politicaprivenglish />
    },
    {
      path: "creditoses",
      element: <Creditoses />
    },
    {
      path: "creditosen",
      element: <Creditosen />
    }
  ]
},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router} />
    
    {/* <App /> */}
    
  </StrictMode>,
)
