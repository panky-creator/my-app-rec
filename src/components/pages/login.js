import React, { useState } from 'react';

export default function Login() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<main className="login-page">
			<section className="login-card" aria-labelledby="login-title">
				<p className="login-eyebrow">Welcome back</p>
				<h1 id="login-title">Sign in to TextUtils</h1>
				<p className="login-description">Use your account to continue.</p>

				<form className="login-form" onSubmit={handleSubmit}>
					<label htmlFor="email">Email address</label>
					<input id="email" name="email" type="email" autoComplete="email" required />

					<label htmlFor="password">Password</label>
					<input id="password" name="password" type="password" autoComplete="current-password" required />

					<div className="login-options">
						<label className="remember-option" htmlFor="remember">
							<input id="remember" name="remember" type="checkbox" />
							Remember me
						</label>
						<a href="#forgot-password">Forgot password?</a>
					</div>

					<button type="submit">Sign in</button>
					{submitted && <p className="login-success" role="status">Thanks, you are signed in.</p>}
				</form>

				<p className="login-signup">New to TextUtils? <a href="#create-account">Create an account</a></p>
			</section>
		</main>
	);
}
