import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {SidebarItems} from './SidebarItems';
import {IconContext} from 'react-icons'
import './Navbar.css'
function Navbar(){
    const [sidebar, setSidebar] = useState(false)
    const [search, setSearch] = useState([])
    const showSidebar = () => setSidebar(!sidebar)
    let navigate = useNavigate()
    
    const HandleSearch = e => {
        e.preventDefault();
        navigate(`/search/${encodeURIComponent(search)}`);
    }
    return(
    <>

    <IconContext.Provider value={{color:'red'}}>
        <div className='navbar'>
            <h1 className='Title'>
                Bandit's Secret
            </h1>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <div className='search'>
        <form className='searchInputs' onSubmit={HandleSearch}>
            <input 
            type="text" 
            placeholder="Enter Manga Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <div className='searchIcon'></div>
        </form>
    </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarItems.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
        </IconContext.Provider>
                
    </>
    );
}

export default Navbar