import './WhyChooseUs.css'

interface WhyChooseUsItem {
    id: number;
    number: string;
    title: string; 
    description: string;
}

const whyChooseUsItems: WhyChooseUsItem[] = [
    { id: 1, number: '01', title: 'AI-First Communication', description: 'AI isn\'t an add-on. Every conversation is enhanced by intelligent translation, transcription and assistance from the moment you connect.' },
    { id: 2, number: '02', title: 'Built for Global Teams', description: 'Communicate naturally across countries, cultures and languages without switching apps.' },
    { id: 3, number: '03', title: 'Lightning Fast Experience', description: 'Industry-leading response times keep conversations flowing naturally without noticeable delay.' },
    { id: 4, number: '04', title: 'Enterprise Ready', description: 'Secure infrastructure, encrypted communication, and scalable architecture built for businesses.' }
]

function WhyChooseUs () {
    return (
        <section className="whyChooseUs">
            <div className="whyChooseUsHeader">
                <span className="whyChooseUsBadge">
                    Why Choose Us
                </span>

                <h2 className="whyChooseUsHeading">
                    Built For The Future Of Global Communication
                </h2>

                <p className="whyChooseUsText">
                    We aren't just translating conversations, we're redefining how people communicate across languages with AI at the core.
                </p>
            </div>
            <div className="whyChooseUsGrid">
                {whyChooseUsItems.map((whyChooseUs) => (
                    <div key={whyChooseUs.id} className="whyChooseUsCard">
                        <div className="whyChooseUsNumber">
                            {whyChooseUs.number}
                        </div>
                        <div className="whyChooseUsContent">
                            <h3 className="whyChooseUsTitle">
                                {whyChooseUs.title}
                            </h3>

                            <p className="whyChooseUsDescription">
                                {whyChooseUs.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseUs