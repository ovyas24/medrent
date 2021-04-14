    import Product from "./Product"
    import BreadCrumb from "./Used/BreadCrumb"

    const Products = [
        {
            name: "moter",
            price: 124
        },
        {
            name: "moter2",
            price: 125
        },
        {
            name: "moter3",
            price: 126
        },
        {
            name: "moter4",
            price: 127
        },
        {
            name: "moter",
            price: 124
        },
        {
            name: "moter2",
            price: 125
        },
        {
            name: "moter3",
            price: 126
        },
        {
            name: "moter4",
            price: 127
        }
    ]

    const Shop = () => {
        return (
            <div>
                <BreadCrumb name="Shop" />
                <div className="cv-shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cv-shop-box">
                                    <div className="cv-widget cv-search">
                                        <h2 className="cv-sidebar-title">Product Search</h2>
                                        <form>
                                            <input type="text" placeholder="Product Search" />
                                            <button className="cv-btn">search</button>
                                        </form>
                                    </div>
                                    <div className="cv-product-all wow fadeIn" data-wow-delay="0.5s">
                                        <div classNameName="container">
                                            <div classNameName="row">
                                                {Products.map(product => {
                                                    return (
                                                        <Product product={product}  />
                                                    )
                                                })}
                                            </div>
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

    export default Shop