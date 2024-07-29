 
import './App.css'
// import Cap from './Root'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PetList from './pages/PetList'
import RootLayout from './pages/Root'
import SearchForm from './pages/Search'
import PetDetails from './pages/PetDetails'
import ErrorPage from './pages/ErrorPage'

const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/petlist",element:<PetList/>},
      {path:"/searchForm",element:<SearchForm/>},
      {path:"/petlist/:id",element:<PetDetails/>}
    ],
    errorElement:<ErrorPage/>

  }
])


function App() {
  

  return <RouterProvider router={router}/>
}

export default App
