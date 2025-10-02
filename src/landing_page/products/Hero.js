import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="container mt-5 border-bottom">
            <div className="row fs-5 p-5 mt-5 mb-5 text-center">
                <h2 className="mb-4">Zerodha Products</h2>
                <h3 className="text-muted mb-4 fs-4">Sleek, modern, and intuitive trading platforms</h3>
                <p>
                    Check out our <Link to="#" style={{textDecoration: "none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></Link>
                </p>
            </div>
        </div>
    )
}