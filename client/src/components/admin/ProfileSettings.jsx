import ChangePassword from "./Helpers/ChangePassword"
import HeaderNav from "./Helpers/HeaderNav"
import ProfileSettings from "./Helpers/ProfileSettings"
import Nav from "./Nav"

const Profile = () => {
    return (
        <div id="wrapper">
            <Nav active="profile" />
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <HeaderNav />
                    <div className="container-fluid">
                        <h3 className="text-dark mb-4">Profile</h3>
                        <div className="row mb-3">
                            <ProfileSettings />
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile