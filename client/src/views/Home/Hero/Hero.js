import { Link } from 'react-router-dom'
import styled from 'styled-components'
import hero from '../../../assets/hero.jpg'
const StyledHero = styled.div`
	height: calc(100vh - 58px);
	background-color: red;
	overflow: hidden;
	color: white;
	#image {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, .6);
		}
		img {
			max-height: calc(100vh - 56px);
			min-width: 100vw;
			object-fit: cover;
		}
	}

	button {
		padding: .5rem 2rem;
		border-radius: 99999px;
		font-weight: 600;
		font-size: 95%;
		text-transform: uppercase;
	}
	h1 {
		opacity: .85;
	}
`
const Hero = () => {
	return (
		<StyledHero>
			<div id="image">
				<img src={hero} alt="" />
				<div className="absolute top-0 w-full h-full grid place-items-center z-10">
					<div className="flex flex-col items-center gap-2 justify-center">
						<h1 className="text-3xl md:text-6xl text-white font-semibold uppercase text-center">
							Developer Connector
						</h1>
						<p className="text-lg text-center md:text-2xl text-white opacity-80">
							Create a profile and showcase your portfolio <br className="md:hidden" /> with other developers
						</p>
						<div className="flex gap-5 mt-4">
							<button className="bg-sonyBlue hover:bg-transparent border-2 border-transparent hover:border-white transition-all duration-300 hover:-translate-y-1 relative transform">
								<Link to="/register">Sign up</Link>
							</button>
							<Link to="/login">
								<button className="border-2 hover:bg-sonyBlue hover:border-transparent hover:-translate-y-1 transform relative transition-all duration-300">Log in</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
