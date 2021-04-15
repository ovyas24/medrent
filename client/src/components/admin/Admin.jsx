import HeaderNav from "./Helpers/HeaderNav"
import Nav from "./Nav"
import Products from "./Products"

const Admin = () => {
    console.log("routed to admin");
    return (
        <div id="wrapper">
            <Nav active="dash" />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <HeaderNav />
                    <div className="container-fluid">
                        <div className="d-sm-flex justify-content-between align-items-center mb-4">
                            <h3 className="text-dark mb-0">Dashboard</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card shadow border-start-primary py-2">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col me-2">
                                                <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>Earnings (monthly)</span></div>
                                                <div className="text-dark fw-bold h5 mb-0"><span>$40,000</span></div>
                                            </div>
                                            <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card shadow border-start-success py-2">
                                    <div className="card-body">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col me-2">
                                                <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Earnings (annual)</span></div>
                                                <div className="text-dark fw-bold h5 mb-0"><span>$215,000</span></div>
                                            </div>
                                            <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Products />
                </div>
            </div>
        </div>
    )
}


export default Admin