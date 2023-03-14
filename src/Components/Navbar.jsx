import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <div className="top">
                <a href='#'>
                    <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" />
                    0509418224
                </a>
                <a href='#'>
                    <img src="https://cdn-icons-png.flaticon.com/128/893/893257.png" alt="" />
                    enquiry@urbansciencemep.com
                </a>
            </div>
            <div className="bottom">

                <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
                <ol>
                    <li>
                        <Link to='/'>
                        Home
                        </Link>
                    </li>
                    <li>
                       <Link to="/about">
                       
                        About
                       </Link>
                        
                    </li>
                    <li>
                    <Link to="/project">
                       
                       Project
                      </Link>
                    </li>
                    <li>
                        <Link to="/services">
                       
                       Services
                      </Link></li>
                    <li>
                        <Link to='/blogs'>
                        Blogs
                        </Link>
                        </li>
                    <li>
                    <Link to="/contact">
                       
                       Contact
                      </Link>
                    </li>
                </ol>
                <button>Enquire Now</button>

            </div>
        </div>

    )
}
export default Nav