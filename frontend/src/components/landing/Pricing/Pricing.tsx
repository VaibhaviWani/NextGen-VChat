import './Pricing.css'

interface PricingPlan {
    id: number;
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular: boolean;
}

const pricingPlans: PricingPlan[] = [
    { id: 1, title: "Starter", price: "Free", description: "Perfect for individuals exploring multilingual communication.", 
        features: [
                "Up to 5 conversations/day",
                "Real-time AI Translation",
                "120+ Languages",
                "Community Support"
        ], isPopular: false 
    },
    { id: 2, title: "Pro", price: "$19/mo", description: "Ideal for professionals and growing teams.", 
        features: [
                "Unlimited Conversations",
                "AI Video Meetings",
                "Meeting Summaries",
                "Priority Support",
                "Team Collaboration"
      ], isPopular: true 
    },
    { id: 3, title: "Enterprise", price: "Custom", description: "Advanced security and scalability for large organizations.", 
        features: [
                "Everything in Pro",
                "Enterprise Security",
                "Dedicated Account Manager",
                "Custom AI Models",
                "24×7 Premium Support"
        ], isPopular: false 
    }
]

function Pricing() {
    return (
        <section className="pricing">
            <div className="pricingHeader">
                <span className="pricingBadge">
                    Pricing
                </span>
                <h2 className="pricingTitle">
                    Different plans for different needs
                </h2>
                <p className="pricingDescription">
                    Choose the perfect plan for your communication needs. Upgrade anytime as your team grows.
                </p>
            </div>
            <div className="pricingGrid">
                {pricingPlans.map((pricingPlan) => (
                    <div key={pricingPlan.id} className={pricingPlan.isPopular ? "pricingPremiumCard" : "pricingCard"}>
                        {pricingPlan.isPopular && ( 
                            <span className="pricingPopularBadge">
                                ⭐ Most Popular
                            </span>
                        )}  
                        <h2 className="pricingPlanName">
                            {pricingPlan.title} 
                        </h2>
                        <span className="pricingPlanPrice">
                            {pricingPlan.price}
                        </span>
                        <p className="pricingPlanDescription">
                            {pricingPlan.description}
                        </p>
                        <ul className="pricingPlanFeatures">
                            {pricingPlan.features.map((feature, index) => (
                                <li key={index}> {feature} </li>
                            ))}
                        </ul>
                        <button className="pricingPlanButton">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
} 

export default Pricing