import AuthLayout from '../../components/auth/AuthLayout/AuthLayout'
import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react' 

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    async function handleSubmit(event: React.FormEvent)
    {
        event.preventDefault();
        
        const newErrors = {
            email: "",
            password: ""
        };

        if(email.trim() === "")
        {
            newErrors.email = "Please enter your email.";
        }

        if(email.trim() !== "" && !emailRegex.test(email))
        {
            newErrors.email = "Please enter a valid email address.";
        }

        if(password.trim() === "")
        {
            newErrors.password = "Please enter your password.";
        }

        if(password.trim() !== "" && password.length < 8)
        {
            newErrors.password = "Password must be at least 8 characters.";
        }
        
        setErrors(newErrors);

        if(newErrors.email || newErrors.password) 
        {
            return;
        }

        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));

        setSuccessMessage("Login successful!");
        console.log({ email, password });

        setIsLoading(false);
    }
    
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
                <form className="loginForm" noValidate onSubmit={handleSubmit}>
                    <div className="loginEmail">
                        <label htmlFor="email">Email: </label>
                        <input id="email" name="email" type="email" placeholder="Enter your Email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email"></input>
                        {errors.email && (
                            <p className="loginError">{errors.email}</p>
                        )}
                    </div>
                    <div className="loginPassword">
                        <label htmlFor="password">Password: </label>
                        <input id="password" name="password" type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password"></input>
                        {errors.password && (
                            <p className="loginError">{errors.password}</p>
                        )}
                    </div>
                    <Link to="/forgot-password">Forgot Password</Link>
                    <button id="btnLogin" type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
                    {successMessage && (
                        <p className="successMessage">{successMessage}</p>
                    )}
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