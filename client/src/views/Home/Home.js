import styled from 'styled-components'
import Hero from './Hero/Hero'
const StyledHome = styled.div`
 
`
const Home = () => {
	return (
		<StyledHome className=" bg-gray-100">
			<Hero />
		</StyledHome>
	)
}
export default Home
