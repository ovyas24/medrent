const ChangePassword = () => {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="row">
                <div className="col col-12">
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">Change Password</p>
                        </div>

                        <div className="card-body">
                            <form>
                                <div className="mb-3"><label className="form-label"
                                    for="address"><strong>Old Password</strong></label><input
                                        className="form-control" type="password" id="opassword"
                                        placeholder="password" name="opassword" /></div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3"><label className="form-label"
                                            for="city"><strong>New Password</strong></label><input
                                                className="form-control" type="password" id="npassword"
                                                placeholder="Password" name="npassword" /></div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3"><label className="form-label"
                                            for="country"><strong>Confirm Password</strong></label><input
                                                className="form-control" type="password" id="npassword2"
                                                placeholder="Confirm Password" name="npassword2" /></div>
                                    </div>
                                </div>
                                <div className="mb-3"><button className="btn btn-primary btn-sm"
                                    type="submit">Change&nbsp;Password</button></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChangePassword