import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className="cv-top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cv-head-contact">
                                <h3>Phone: +91-999-079-3344</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cv-head-icon">
                                medrent786@gmail.com
                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv-main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-9">
                            <div className="cv-logo">
                                <Link to="/"><img src="assets/images/logo.png" alt="image" className="img-fluid" style={{height: '70px', width: '250px'}} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-3">
                            <div className="cv-nav-bar">
                                <div className="cv-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="cv-toggle-nav">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav