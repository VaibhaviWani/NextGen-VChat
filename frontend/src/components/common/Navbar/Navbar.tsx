import './Navbar.css';

interface NavbarLink {
    id: number;
    name: string;
    href: string;
    isPremium: boolean;
}

interface NavbarAction {
    id: number;
    name: string;
    href: string;
    variant: 'secondary' | 'primary';
}

const navbarLinks: NavbarLink[] = [
    { id: 1, name: 'Features', href: '#features', isPremium: false },
    { id: 2, name: 'Pricing', href: '#pricing', isPremium: false },
    { id: 3, name: 'About', href: '#about', isPremium: false },
    { id: 4, name: 'Contact', href: '#contact', isPremium: false }
];

const navbarActions: NavbarAction[] = [
    { id: 1, name: 'Login', href: '#login', variant: 'secondary' },
    { id: 2, name: 'Start free', href: '#start-free', variant: 'primary' }
]

function Navbar (){
    return (
        <nav className="navbar navbarEntrance"> 
            <div className="navbarContainer">
                <div className="navbarLogo">
                    <h2>NextGen-VChat</h2>
                </div>
                <ul className="navbarLinks">
                    {navbarLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.href}>{link.name} {link.isPremium && '⭐'}</a>
                        </li>
                    ))}
                </ul>   
                <div className="navbarActions">
                    {navbarActions.map((action) => (
                        <a key={action.id} href={action.href} className={`navbarAction ${action.variant}`}>
                            {action.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar