import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Home from './views/Home/Home'
import Dashboard from './views/Dashboard/Dashboard'
import Developers from './views/Developers/Developers'
import Register from './views/Register/Register'
import CreateProfile from './views/CreateProfile/CreateProfile'
import Login from './views/Login/Login'
import Alert from './components/layout/Alert/Alert'
import PrivateRoute from './components/routing/PrivateRoute'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { Fragment, useEffect } from 'react'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'

const StyledMain = styled.main`
	position: relative;
	z-index: 0;
`

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])
	return (
		<Provider store={store}>
			<Fragment>
				<Header />
				<StyledMain>
						<Alert />
							<Routes>
								<Route path="/" element={<Home />} exact />
								<Route
									path="/dashboard"
									element={
										<PrivateRoute>
											<Dashboard />
										</PrivateRoute>
									}
								/>
								<Route
									path="/create-profile"
									element={
										<PrivateRoute>
											<CreateProfile />
										</PrivateRoute>
									}
								/>
								<Route path="/developers" element={<Developers />} />
								<Route path="/register" element={<Register />} />
								<Route path="/login" element={<Login />} />
							</Routes>
				</StyledMain>
			</Fragment>
		</Provider>
	)
}

export default App
