import { Link } from "react-router-dom"

export default function RightSection(
    {imageURL, productName, productDescription, learnMore}
) {
    return (
        <div className="container">
            <div className="row mt-5 mb-5 fs-5">
                <div className="col p-5 mt-5">
                    <h2 className="mb-4 mt-5">{productName}</h2>
                    <p>{productDescription}</p>
                    <div className="row mb-4">
                        <div className="col-4">
                            <Link to={learnMore} style={{textDecoration: "none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src={imageURL}></img>
                </div>
            </div>
        </div>
    )
}