import AuthLayout from '../../components/auth/AuthLayout/AuthLayout'
import { Link } from 'react-router-dom'
import './ForgotPassword.css'

function ForgotPassword() {
    return (
        <AuthLayout>
            <section className="forgotpassword">
                <div className="forgotPasswordHeader">
                    <h1 className="forgotPasswordTitle">
                        Locked yourself out? We can help!
                    </h1>
                    <h2>
                        Enter your email address and we'll send you a secure password reset link.
                    </h2>
                </div>
                <form className="forgotPasswordForm">
                    <div className="forgotPasswordEmail">
                        <label htmlFor="email">Email: </label>
                        <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required></input>
                    </div>
                    <button id="btnResetPassword" type="submit">Send Reset Link</button>
                </form>
                <span className="backToLogin">
                    <Link to="/login">Back to Login</Link>
                </span>
            </section>
        </AuthLayout>
    )
}

export default ForgotPassword