import styled from 'styled-components'
import Hero from './Hero/Hero'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router'

const StyledHome = styled.div``
const Home = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Navigate to="/dashboard" />
	}
	return (
		<StyledHome className=" bg-gray-100 relative">
			<Hero />
		</StyledHome>
	)
}

Home.propTypes = {
	auth: PropTypes.bool,
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home)
