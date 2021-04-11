const BreadCrumb = ({ name }) => {
    return (
        <div class="cv-breadcrumb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="cv-breadcrumb-box">
                            <h1>{name}</h1>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>{name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb