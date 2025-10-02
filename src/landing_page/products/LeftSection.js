import { Link } from "react-router-dom"

export default function LeftSection(
    {imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}
) {
    return (
        <div className="container">
            <div className="row mt-5 mb-5 fs-5">
                <div className="col mt-5">
                    <img src={imageURL}></img>
                </div>
                <div className="col p-5 mt-5">
                    <h2 className="mb-4">{productName}</h2>
                    <p>{productDescription}</p>
                    <div className="row mb-4">
                        <div className="col-4">
                            <Link to={tryDemo} style={{textDecoration: "none"}}>Try demo <i class="fa-solid fa-arrow-right-long"></i></Link>
                        </div>
                        <div className="col-4">
                            <Link to={learnMore} style={{textDecoration: "none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Link to={googlePlay}><img src="media/images/googlePlayBadge.svg" width={"97%"}></img></Link>
                        </div>
                        <div className="col-4">
                            <Link to={appStore}><img src="media/images/appstoreBadge.svg" width={"87%"}></img></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}