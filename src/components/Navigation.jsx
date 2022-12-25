import { Link } from 'react-router-dom';
import { useContextAll } from '../context/Context';
import '../style/Navigation.css';

export default function Navigation() {
    const { navLinks, setNavLinks } = useContextAll();
    const activedLinks = (id) => {
        [...navLinks].forEach(link => link.isActive = false)
        const indexActiveLink = navLinks.findIndex(link => link.id === id);
        const newNavLinks = [...navLinks];
        newNavLinks[indexActiveLink].isActive = true;
        setNavLinks(newNavLinks);
    }
    
  return (
    <nav className='nav'>
        <span className='links'>
            {navLinks.map((navLink) =>
                <Link onClick={() => activedLinks(navLink.id)} className={navLink.isActive ? 'link active' : 'link'} to={navLink.path} key={navLink.id}>{navLink.name}</Link>
            )}
        </span>
        <div className='logo'>
            Чернозем WB
        </div>
    </nav>
  )
}