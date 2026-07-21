import './Clients.css'

interface Client {
    id: number;
    name: string;
}

const clients: Client[] = [
    { id: 1, name: "Microsoft" },
    { id: 2, name: "Google" },
    { id: 3, name: "Amazon" },
    { id: 4, name: "Adobe" },
    { id: 5, name: "Netflix" },
    { id: 6, name: "Spotify" }
]
function Clients () {
    return (
        <section className="client">
            <div className="clientHeader">
                <span className="clientBadge">
                    Trusted Worldwide
                </span>
                <h2 className="clientTitle">
                    Built for modern teams across industries
                </h2>
                <p className="clientDescription">
                    Organizations around the world rely on NextGen-VChat to break language barriers and enable seamless collaboration.
                </p>
            </div>
            <div className="clientMarquee">
                <div className="clientTrack">
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="clientCard">
                            <span className='clientName'>
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="clientTrackReverse"> 
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="clientCard">
                            <span className="clientName">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients