import Product from "./Product"

const Products = [
    {
        name:"moter",
        price:124
    },
    {
        name:"moter2",
        price:125
    },
    {
        name:"moter3",
        price:126
    },
    {
        name:"moter4",
        price:127
    },
    {
        name:"moter4",
        price:127
    },
    {
        name:"moter4",
        price:127
    },
    {
        name:"moter4",
        price:127
    },
    {
        name:"moter4",
        price:127
    }
]

const NewArrival = () => {
    return (
        <div className="cv-arrival spacer-top-less">
            <div className="container">
                <div className="cv-heading">
                    <h1>New arrivals</h1>
                </div>
                <div className="row">
                    {Products.map(product => {
                        return (
                            <Product product={product} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewArrival