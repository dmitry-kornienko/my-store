import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navigation.css';



export default function Navigation() {
    const [navLinks, setNavLinks] = useState([
        {id: 1, name: 'Остатки', path: '/', isActive: true},
        {id: 2, name: 'Закупка', path: '/buy', isActive: false},
        {id: 3, name: 'Упаковано', path: '/packed', isActive: false},
        {id: 4, name: 'Отправлено', path: '/sent', isActive: false},
        {id: 5, name: 'Финансы', path: '/finance', isActive: false},
    ])
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