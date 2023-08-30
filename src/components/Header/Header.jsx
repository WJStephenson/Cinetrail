import { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { ThemeContext } from '../../contexts/ThemContext'

function Header() {

    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <header className={`header-container ${!darkMode && "header-light"}`}>
            <Link className='logo' to={"/"}>CineTrail</Link>
            <div className='search-container'>
                <input type="text" className='search-input' placeholder='Search movies...' />
            </div>
            <div className='header-buttons-container'>
                <div className="theme-buttons-container">
                    <div className="theme-buttons">
                        <MdOutlineLightMode onClick={() => {
                            setDarkMode(false);
                            localStorage.setItem("darkMode", false);
                            }} className={`theme-icon ${!darkMode && 'theme-icon-active'}`} />
                        <MdOutlineDarkMode onClick={() => {
                            setDarkMode(true);
                            localStorage.setItem("darkMode", true);
                            }} className={`theme-icon ${darkMode && 'theme-icon-active'}`} />
                    </div>
                </div>
                <button className='create-account'>Create an Account</button>
            </div>
        </header>
    )
}

export default Header