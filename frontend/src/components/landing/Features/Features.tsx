import './Features.css'

interface Feature {
    id: number;
    title: string;
    description: string; 
    icon: string;
}

const features: Feature[] = [
    { id: 1, icon: "🌍", title: "Real-Time Translation", description: "Break language barriers with instant AI-powered translation during chats and calls." },
    { id: 2, icon: "⚡", title: "Ultra Fast Response", description: "Experience lightning-fast translations with an average response time below 150 milliseconds." },
    { id: 3, icon: "🎥", title: "AI Video Meetings", description: "Conduct multilingual meetings where every participant hears conversations in their own language." },
    { id: 4, icon: "🤖", title: "Smart AI Assistant", description: "Summarize meetings, answer questions, and assist conversations in real time." },
    { id: 5, icon: "📄", title: "Live Transcription", description: "Generate accurate live transcripts and meeting notes automatically." },
    { id: 6, icon: "🔒", title: "Enterprise Security", description: "Protect conversations with modern encryption and enterprise-grade security." }
];

function Features() {
    return (
        <section className="features">
            <div className="featuresHeader">
                <span className="featuresBadge">
                    ✨ AI-Powered Features
                </span>
                <h2 className="featuresTitle">
                    Everything You Need To Communicate Globally
                </h2>
                <p className="featuresDescription">
                    Powerful AI features designed to help teams communicate effortlessly across languages and borders.
                </p>
            </div>
            <div className="featuresGrid">
                {features.map((feature, index) => (
                    <div key={feature.id} className="featureCard" style = {{animationDelay: `${index * 0.12}s`}}>
                        <div className="featureIcon">
                            {feature.icon}
                        </div>
                        <h3 className="featureTitle">
                            {feature.title}
                        </h3>
                        <p className="featureDescription">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features