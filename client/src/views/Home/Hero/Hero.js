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
        border-radius: 8px;
        font-weight: 600;
        font-size: 100%;
    }
`
const Hero = () => {
	return (
		<StyledHero>
			<div id="image">
				<img src={hero} alt="" />
				<div className="absolute top-0 w-full h-full grid place-items-center z-10">
					<div className="flex flex-col items-center gap-5 justify-center">
						<h1 className="text-3xl md:text-6xl text-white font-semibold uppercase text-center">
							Developer Connector
						</h1>
						<p className="text-lg text-center md:text-2xl text-white opacity-80">
							Create a profile/portfolio and colloborate with other
							developers
						</p>
                        <div className="flex gap-5">
                            <button className="bg-blue-500">Sign up</button>
                            <button className="border-2">Log in</button>
                        </div>
					</div>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
