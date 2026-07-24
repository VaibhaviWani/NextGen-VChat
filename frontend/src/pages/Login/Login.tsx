import AuthLayout from '../../components/auth/AuthLayout/AuthLayout'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return(
        <AuthLayout>
            <section className="login">
                <div className="loginHeader"> 
                    <h1 className="loginTitle">
                        Welcome back to NextGen-VChat
                    </h1>
                    <h2 className="loginSubTitle">
                        Sign in to continue collaborating across languages.
                    </h2>
                </div>
                <form className="loginForm">
                    <div className="loginEmail">
                        <label htmlFor="email">Email: </label>
                        <input id="email" name="email" type="email" placeholder="Enter your Email" autoComplete="email" required></input>
                    </div>
                    <div className="loginPassword">
                        <label htmlFor="password">Password: </label>
                        <input id="password" name="password" type="password" placeholder="Enter your password" autoComplete="password" required></input>
                    </div>
                    <Link to="/forgot-password">Forgot Password</Link>
                    <button id="btnLogin" type="submit">Login</button>
                </form>
                <div className="loginDivider">
                    <span className="loginOptions"> or continue with </span>
                </div>
                <button>Google</button>
                <footer className="loginFooter">
                    <span className="signUp">
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </span>
                </footer>
            </section>
        </AuthLayout>
    )
}

export default Login