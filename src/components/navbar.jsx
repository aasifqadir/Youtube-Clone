import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import userIcon from '../images/usericon.png'
import notificationIcon from '../images/notifications.svg'
import searchIcon from '../images/search.svg'
import videoIcon from '../images/videoicon.svg'
import micIcon from '../images/mic.svg'
import menu from '../images/menu.svg'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={menu} alt="logo" width={30} />
                <Link to="/"> <img src={logo} alt="logo" width={100} /></Link>
            </div>
            <div className='searchBox'>
                <div className="searchBar">
                    <input type="search" name="" id="" placeholder='Search' />
                    <button type='search'><img src={searchIcon} alt="" /></button>
                </div>
                <div className='micIcon'>
                    <img src={micIcon} alt="" width={25} />
                </div>
            </div>

            <div className="profile">
                <Link to="/addVideo"><img src={videoIcon} alt="" width={24} /></Link>
                <img src={notificationIcon} alt="" width={24} />
                <img src={userIcon} alt="userIcon" width={32} height={32} />
            </div>
        </div>
    );
}

export default Navbar;

