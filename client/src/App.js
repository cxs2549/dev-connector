import {useRoutes} from 'react-router-dom'
import Header from "./components/layout/Header/Header"
import Home from "./views/Home/Home"
import Developers from './views/Developers/Developers'
import Register from './views/Register/Register'
import Login from './views/Login/Login'

const routes = [
  {path: '/', element: <Home />},
  {path: '/developers', element: <Developers />},
  {path: '/register', element: <Register />},
  {path: '/login', element: <Login />},
]

const App = () => {
  const element = useRoutes(routes)
  return (
    <>
      <Header />
      <main>
        {element}
      </main>
    </>
  )
}

export default App
