import styled from 'styled-components'
import { BsCodeSquare } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'

const StyledHeader = styled.header`
	a {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: -1.4rem;
			left: 0;
			width: 10%;
			height: 4px;
			opacity: 0;
			border-top-right-radius: 99999px;
			border-top-left-radius: 99999px;
			background-color: #333;
			transition: all 300ms ease-in-out;
		}

		&.active::after {
			opacity: 1;
			bottom: -1.2rem;
			width: 100%;
		}
		&.active {
			opacity: 1;
		}
		
	}
`
const Header = () => {
	const links = [ { name: 'developers' }, { name: 'register' }, { name: 'login' } ]
	return (
		<StyledHeader className="border-b">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4 xl:px-0 h-14 text-gray-900">

                {/* logo */}
				<Link to="/" className="flex items-center gap-2">
					<BsCodeSquare size="25" className="opacity-80" />
					<h1 className="font-semibold opacity-90 ">DevConnector</h1>
				</Link>

                {/* links */}
				<nav className="flex gap-8 capitalize text-sm font-medium">
					{links.map((link, i) => (
						<NavLink to={link.name} className="opacity-75 hover:opacity-100 transition-opacity duration-300">
							{link.name}
						</NavLink>
					))}
				</nav>

			</div>
		</StyledHeader>
	)
}
export default Header
