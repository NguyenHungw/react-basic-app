import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    //anchor
    return(
        <>
        <ul>
        <li><Link class="active" to="/">Home</Link></li>
        <li><Link to="/users">users</Link></li>
        <li><Link to="/products" className='active'>About</Link></li>
        </ul>

        </>
    )
}

export default Header