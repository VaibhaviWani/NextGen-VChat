import './AuthLayout.css'

interface Feature {
    id: number;
    name: string;
}

interface AuthLayoutProps {
    children: React.ReactNode;
}

const features: Feature[] = [
    { id: 1, name: "🌍 Real-time AI Translation" },
    { id: 2, name: "🎥 HD Video Meetings" },
    { id: 3, name: "🔒 Enterprise-grade Security" }
]

function AuthLayout({children} : AuthLayoutProps) {
    return (
        <section className="authLayout">
            <div className="authLeft">
                <h1 className="authLogo">
                    NextGen-VChat
                </h1>
                <h2 className="authHeading">
                    Welcome back to NextGen-VChat
                </h2>
                <p className="authDescription"> 
                    Continue your conversations, meetings, and collaborations with seamless AI-powered communication across 120+ languages.
                </p>
                <ul className="authFeatures">
                    {features.map((authFeature) => (
                        <li key={authFeature.id} className="authFeature">
                            {authFeature.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="authRight">
                {children}
            </div>
        </section>
    )
}

export default AuthLayout