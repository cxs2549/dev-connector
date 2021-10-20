import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const StyledRegister = styled.div`color: #333;`
const Register = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	})

	const { name, email, password, password2 } = formData

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if(password !== password2) {
            console.log('No match!')
        } else {
            console.log(formData)
        }
    }

	return (
		<StyledRegister className="bg-gray-100 h-screen relative px-4 py-12 flex flex-col gap-4">
			<h1 className="text-4xl font-medium">Sign Up</h1>
			<div className="flex items-center gap-2">
				<div>
					<i className="fa fa-user" aria-hidden="true" />
				</div>
				<p>Create Your Account</p>
			</div>
			<form className="flex flex-col gap-4" onSubmit={e => onSubmit(e)}>
				{/* name */}
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={name}
					onChange={(e) => onChange(e)}
					className="w-full px-4 py-2 rounded shadow"
				/>
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
					<h5 className="text-xs opacity-80 pl-1">
						This site uses Gravatar so if you want a profile image, use a
						Gravatar-linked email address.
					</h5>
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
				{/* password2 */}
				<input
					type="password"
					placeholder="Confirm Password"
					className="w-full px-4 py-2 rounded shadow"
					name="password2"
					value={password2}
					onChange={(e) => onChange(e)}
                    minLength="6"

				/>
				<button className="px-8 py-2 bg-sonyBlue w-4/12 rounded text-white font-semibold mt-4">
					Register
				</button>
				<div className="text-xs -mt-2 pl-1">
					<span className="opacity-80">Already have an account? </span>
					<Link
						to="/login"
						className="opacity-80 text-sonyBlue font-medium hover:opacity-100 cursor-pointer"
					>
						Sign in
					</Link>
				</div>
			</form>
		</StyledRegister>
	)
}
export default Register
