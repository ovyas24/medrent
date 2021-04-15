const ProfileSettings = () => {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="row">
                <div className="col col-12">
                    <div className="card shadow mb-3">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">User Settings</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3"><label className="form-label"
                                            for="username"><strong>Name</strong><br /></label><input
                                                className="form-control" type="text" id="username"
                                                placeholder="user.name" name="username" /></div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3"><label className="form-label"
                                            for="email"><strong>Email Address</strong></label><input
                                                className="form-control" type="email" id="email"
                                                placeholder="user@example.com" name="email" /></div>
                                    </div>
                                </div>
                                <div className="mb-3"><button className="btn btn-primary btn-sm"
                                    type="submit">Save Settings</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings