import NewArrival from "./NewArrival"

const Home = () => {
    return (
        <div>
            <div className="cv-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cv-banner-text">
                                <p className="cv-banner-cat">Motorized Wheel Chairs</p>
                                <h1>MR155</h1>
                                <p>Powder coated Steel Folding frame, Detachable armrest and Footrest, Drop back handle 200 x 50" PU Castor, 20" PU drive wheel Speed: 1 to 6 Km/h Running distance (Fully charged) : 20Km</p>
                                <button className="cv-btn">Shop now</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cv-banner-img">
                                <img src="assets/images/mobilityChair.jpeg" alt="images" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <NewArrival />
        </div>
    )
}

export default Home