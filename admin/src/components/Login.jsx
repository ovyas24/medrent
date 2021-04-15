import { useState } from "react";

const Login = () => {

    let [ email, setEmail ] = useState("")
    let [ password, setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email,password);
        localStorage.setItem("isAuth",true)
        window.location = "/"
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-6 col-xl-6">
                    <div className="card shadow-lg o-hidden border-0 my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h4 className="text-dark mb-4">Admin Login</h4>
                                        </div>
                                        <form className="user" onSubmit={handleLogin}>
                                            <div className="mb-3"><input className="form-control form-control-user" onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
                                            <div className="mb-3"><input className="form-control form-control-user" onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                            <div className="mb-3">
                                                <div className="custom-control custom-checkbox small"></div>
                                            </div><button className="btn btn-primary d-block btn-user w-100" type="submit">Login</button>
                                            <hr />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login