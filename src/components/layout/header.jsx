import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    //anchor
    return(
        <>
        <ul>
        <li><NavLink  to="/">Home</NavLink></li>
        <li><NavLink to="/users">users</NavLink></li>
        <li><NavLink to="/book">book</NavLink></li>
        </ul>

        </>
    )
}

export default Header