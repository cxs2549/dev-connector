import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'
import auth from '../../reducers/auth'

// const PrivateRoute = ({ element, auth: { isAuthenticated, loading }, ...rest }) => (
// 	<Route
// 		{...rest}
// 		element={(props) => (!isAuthenticated && !loading ? <Navigate to="/" /> : element)}
// 	/>
// )

const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
	return !isAuthenticated && !loading ? <Navigate to="/login" /> : children
}

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
