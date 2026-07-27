import './Hero.css' 
import { Link } from 'react-router-dom'

interface HeroStatistic {
    id: number;
    number: string;
    label: string;
}

interface Orbit {
    id: number;
    className: string;
    languages: string[];
}

const heroStatistics: HeroStatistic[] = [
    { id: 1, number: '120+', label: 'Languages Supported' },
    { id: 2, number: '99%', label: 'Accuracy' },
    { id: 3, number: '<150ms', label: 'Average Response Time' }
]

const orbits: Orbit[] = [
    { id: 1, className: "orbitOne", languages: ["EN", "ES"] },
    { id: 2, className: "orbitTwo", languages: ["HI", "FR"] },
    { id: 3, className: "orbitThree", languages: ["JA", "DE"] }
];

function Hero (){
    return (
        <section className="hero">
            <div className="heroContent heroLeft">
                <div className="heroBadge">
                    <span>Introducing NextGen-VChat</span>
                </div>
                <h1 className="heroTitle">Speak Your Language. Let Everyone Hear Theirs.</h1>
                <p className="heroDescription">Chat, call and collaborate with anyone in the world while AI translates every message instantly into their preferred language.</p>
                <div className="heroActions">
                    <Link to="/register">
                        <button className="heroStartFree">Start Free</button>
                    </Link>
                    <button className="heroWatchDemo">Watch demo</button>
                </div>
                <div className="heroStatistics">
                    {heroStatistics.map((statistic) => (
                        <div className="heroStatisticCard" key={statistic.id}>
                            <h3>{statistic.number}</h3>
                            <span>{statistic.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="heroVisual heroRight">
                <div className="globeScene">
                    {orbits.map((orbit) => (
                        <div key={orbit.id} className={`orbit ${orbit.className}`} >
                            {orbit.languages.map((language, index) => (
                                <div key={language} className={`languageNode node${index + 1}`} >
                                    {language}
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="globePlaceholder">
                        <div className="globeCenter">
                            <p>AI Translation Engine</p>
                            <span>120+ Languages</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero