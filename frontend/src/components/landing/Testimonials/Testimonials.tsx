import './Testimonials.css'

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    review: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    { id: 1, name: "Emily Carter", role: "Marketing Lead", company: "GlobalTech", review: "NextGen-VChat completely transformed how our international teams collaborate. Language barriers simply disappeared.", rating: 5 },
    { id: 2, name: "Takashi Sato", role: "Product Manager", company: "Nexa Japan", review: "Meetings now feel natural even when participants speak different languages. The AI translation is incredibly fast.", rating: 5 },
    { id: 3, name: "Rahul Sharma", role: "Founder", company: "ConnectAI", review: "Real-time translation has helped us onboard global clients much faster than before.", rating: 5 }
]

function Testimonials (){
    return (
        <section className="testimonial">
            <div className="testimonialHeader">
                <span className="testimonialBadge">
                    Customer Success Stories
                </span>
                <h2 className="testimonialTitle">
                    Trusted by teams around the world
                </h2>
                <p className="testimonialDescription">
                    Hear what professionals say after breaking language barriers with NextGen-VChat.
                </p>
            </div>
            <div className="testimonialGrid">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonialCard">
                        <div className="testimonialRating">
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <span key={index}>⭐</span>
                            ))}
                        </div>
                        <div className="testimonialAvatar">{testimonial.name.split(" ").map((word) => word[0]).join("").toUpperCase()}</div>
                        <span className="testimonialName">{testimonial.name}</span>
                        <span className="testimonialMeta">{testimonial.role} • {testimonial.company}</span>
                        <p className="testimonialReview">{testimonial.review}</p>
                    </div>
                ))}
            </div>  
        </section>
    )
}

export default Testimonials