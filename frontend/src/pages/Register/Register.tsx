import AuthLayout from '../../components/auth/AuthLayout/AuthLayout'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    return(
        <AuthLayout>
            <section className="register">
                <div className="registerHeader">
                    <h1 className="registerTitle">
                        Create your NextGen-VChat account
                    </h1>
                    <h2 className="registerSubTitle">
                        Start collaborating with anyone, anywhere using AI-powered communication.
                    </h2>
                </div>
                <form className="registerForm">
                    <div className="registerName">
                        <label htmlFor="fullname">Full Name: </label>
                        <input id="fullname" name="fullname" type="text" placeholder="Enter your full name" autoComplete="name" required></input>
                    </div>
                    <div className="registerEmail">
                        <label htmlFor="email">Email: </label>
                        <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required></input>
                    </div>
                    <div className="registerPassword">
                        <label htmlFor="password">Password: </label>
                        <input id="password" name="password" type="password" placeholder="Enter your password" autoComplete="new-password" required></input>
                    </div>
                    <div className="registerConfirmPassword">
                        <label htmlFor="confirmPassword">Confirm Password: </label>
                        <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" autoComplete="new-password" required></input>
                    </div>
                    <button id="btnRegister" type="submit">Sign Up</button>
                </form>
                <div className="registerDivider">
                    <span className="registerOptions"> or continue with </span>
                </div>
                <button>Google</button>
                <footer className="registerFooter">
                    <span className="login">
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                </footer>
            </section>
        </AuthLayout>
    )
}

export default Register