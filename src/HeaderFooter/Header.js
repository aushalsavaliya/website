import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useEffect , useState } from 'react'
const Header = () => {



    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const data = localStorage.getItem('email')
        setIsLogin(data)
    }, [navigate])

    const logOutHandler = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('isAdmin')
        setIsLogin(false)
        navigate('contact')
    }



    return (
        <header className="header_area">
            <div className="top_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="float-left">
                                <p>Phone: +01 256 25 235</p>
                                <p>email: info@eiser.com</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="float-right">
                                <ul className="right_side">
                                    <li>
                                        <a href="cart.html">
                                            gift card
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tracking.html">
                                            track order
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <a className="navbar-brand logo_h" href="index.html">
                            <img src="img/logo.png" alt />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
                            <div className="row w-100 mr-0">
                                <div className="col-lg-7 pr-0">
                                    <ul className="nav navbar-nav center_nav pull-right">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={"/"}>Home</Link>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/category"}>Shop Category</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/productdetails"}>Product Details</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/checkout"}>Product Checkout</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/cart"}>Shopping Cart</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/blog"}>Blog</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/blogdetails"}>Blog Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/tracking"}>Tracking</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={"/elements"}>Elements</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/contact"}>Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            {!isLogin && <Link to="/login" className="appointment-btn scrollto">
                                                <span className="nav-link d-none d-md-inline">Login/ Signup</span>
                                            </Link>}
                                            {isLogin && <button onClick={logOutHandler} className="border nav-link">
                                                <span className="border-2 nav-link">Logout</span>
                                            </button>}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 pr-0">
                                    <ul className="nav navbar-nav navbar-right right_nav pull-right">
                                        <li className="nav-item">
                                            <a href="#" className="icons">
                                                <i className="ti-search" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"data"} className="icons">
                                                <i className="ti-shopping-cart" />
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="icons">
                                                <i className="ti-user" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="icons">
                                                <i className="ti-heart" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header