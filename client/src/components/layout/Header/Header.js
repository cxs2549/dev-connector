import styled from 'styled-components'
import { BsCodeSquare } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'
import { Fragment } from 'react'

const StyledHeader = styled.header`
	position: relative;
	z-index: 11;
	a {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: -1.2rem;
			left: 0;
			width: 10%;
			height: 4px;
			opacity: 0;
			background-color: #2249df;
			transition: all 300ms ease-in-out;
			@media (min-width: 768px) {
				bottom: -.9rem;
			}
		}

		&.active::after {
			opacity: 1;
			width: 100%;
		}
		&.active {
			opacity: 1;
		}
	}
`
const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
	const links = [ { name: 'developers' }, { name: 'register' }, { name: 'login' } ]
	const alinks = [ { name: 'logout' } ]
	const authLinks = (
		<nav className="flex gap-8 capitalize text-sm font-medium">
			<NavLink
					to="/dashboard"
					className="opacity-75 hover:opacity-100 transition-opacity duration-300 md:text-lg"
				>
					Dashboard
				</NavLink>
			{alinks.map((link, i) => (
				<Link
					key={i}
					onClick={logout}
					to="/login"
					className="opacity-75 hover:opacity-100 transition-opacity duration-300 md:text-lg"
				>
					{link.name}
				</Link>
			))}
		</nav>
	)
	const guestLinks = (
		<nav className="flex gap-8 capitalize text-sm font-medium">
			{links.map((link, i) => (
				<NavLink
					key={i}
					to={link.name}
					className="opacity-75 hover:opacity-100 transition-opacity duration-300 md:text-lg"
				>
					{link.name}
				</NavLink>
			))}
		</nav>
	)
	return (
		<StyledHeader className="border-b">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4 xl:px-0 h-14 text-gray-900">
				{/* logo */}
				<Link to="/" className="flex items-center gap-2">
					<BsCodeSquare size="25" className="opacity-80" />
					<h1 className="font-semibold md:text-lg opacity-90 xl:text-xl">DevConnector</h1>
				</Link>

				{/* links */}
				{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
			</div>
		</StyledHeader>
	)
}

Header.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header)
