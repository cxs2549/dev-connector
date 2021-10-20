import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const StyledLogin = styled.div`color: #333;`
const Login = () => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	})

	const { email, password } = formData

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		console.log('Success!')
	}

	return (
		<StyledLogin className=" h-screen relative px-4 py-12 flex flex-col gap-4 max-w-xl mx-auto">
			<h1 className="text-3xl font-semibold opacity-85 mb-2 pl-1">Log in</h1>
			<form className="flex flex-col gap-4" onSubmit={(e) => onSubmit(e)}>
				{/* email */}
				<div className="flex flex-col gap-1">
					<input
						type="email"
						placeholder="Email"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						className="w-full px-4 py-2 rounded shadow"
						required
					/>
				</div>
				{/* password */}
				<input
					type="password"
					placeholder="Password"
					className="w-full px-4 py-2 rounded shadow"
					name="password"
					value={password}
					onChange={(e) => onChange(e)}
					minLength="6"
				/>
				<button className="px-8 py-2 bg-sonyBlue w-4/12  text-white font-semibold mt-4" type="submit">
					Login
				</button>
				<div className="text-xs -mt-2 pl-1">
					<span className="opacity-80">Don't have an account? </span>
					<Link
						to="/register"
						className="opacity-80 text-sonyBlue font-medium hover:opacity-100 cursor-pointer"
					>
						Sign up
					</Link>
				</div>
			</form>
		</StyledLogin>
	)
}
export default Login
