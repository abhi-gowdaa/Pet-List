 
import './App.css'
// import Cap from './Root'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PetList from './pages/PetList'
import RootLayout from './pages/Root'
import SearchForm from './pages/Search'

const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/petlist",element:<PetList/>},
      {path:"/searchForm",element:<SearchForm/>}
    ]

  }
])


function App() {
  

  return <RouterProvider router={router}/>
}

export default App
