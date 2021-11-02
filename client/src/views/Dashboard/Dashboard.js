import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import { useEffect } from 'react'
import Spinner from '../../components/layout/Spinner'
import { Link } from 'react-router-dom'

const StyledDashboard = styled.div``

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
	useEffect(() => getCurrentProfile(), [])
	return loading && profile === null ? (
		<Spinner />
	) : (
		<StyledDashboard className="py-8 px-4">
			<h1 className="text-4xl font-bold mb-4">Dashboard</h1>
			<p className="font-medium">Welcome, {user && user.name}!</p>
			{profile !== null ? (
				<div>has</div>
			) : (
				<div className="py-8 gap-4 flex flex-col">
					<p>You have not created a profile yet.</p>
					<Link to="/create-profile" className="bg-blue-500 w-40 flex items-center justify-center text-white py-2 rounded">Create Profile</Link>
				</div>
			)}
		</StyledDashboard>
	)
}

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
