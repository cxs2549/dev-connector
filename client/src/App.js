import { Route, Routes, useLocation } from 'react-router-dom'
import Header from "./components/layout/Header/Header"
import Home from "./views/Home/Home"
import Developers from './views/Developers/Developers'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

const StyledMain = styled.main`
position: relative;
z-index: 0;
  .page-appear {
    opacity: 0;
  }
  .page-appear-active {
    opacity: 1;
    transition: all 800ms;
  }
  .page-enter {
    opacity: 0;

  }
  .page-enter-active {
    opacity: 1;
    transition: all 800ms;
  }
  .page-exit {
    opacity: 1;
  }
  .page-exit-active {
    opacity: 0;
    transition: all 800ms;
  }

`


const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <StyledMain>
      <TransitionGroup>
      <CSSTransition appear key={location.key} classNames="page" timeout={800} unmountOnExit>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/developers" element={<Developers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
      </StyledMain>
    </>
  )
}

export default App
