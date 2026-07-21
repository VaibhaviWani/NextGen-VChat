import './Footer.css'

interface FooterSection {
    id: number;
    title: string;
    links: string[];
}

const footerSections: FooterSection[] = [
    { id: 1, title: "Product", 
        links: [
            "Features",
            "Pricing",
            "Security",
            "Roadmap"
        ]
    },
    { id: 2, title: "Company",
        links: [
            "About",
            "Careers",
            "Blog",
            "Contact"
        ]
    },
    { id: 3, title: "Resources",
        links: [
            "Documentation",
            "Help Center",
            "Privacy",
            "Terms"
        ]
    }
]

function Footer () {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="brandSection">
                    <span className="brandLogo">
                        NextGen-VChat
                    </span>
                    <p className="brandDescription">
                        Breaking language barriers with AI-powered communication.
                    </p>
                    <ul className="socialIcons">
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>X</li>
                    </ul>
                </div>
                <div className="footerLinks">
                    {footerSections.map((footerSection) => (
                        <div key={footerSection.id} className="footerLinksInfo">
                            <h3 className="footerLinkTitle">
                                {footerSection.title}
                            </h3>
                            <ul className="footerLinksList">
                                {footerSection.links.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottomBar">
                <span className="brandCopyRight">
                    © 2026 NextGen-VChat
                </span>
                <p className="brandBuiltWith">
                    Built with ❤️ using React & TypeScript
                </p>
            </div>
        </footer>
    )
}

export default Footer