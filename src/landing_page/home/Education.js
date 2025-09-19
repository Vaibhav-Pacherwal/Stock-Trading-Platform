export default function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width:"70%"}}/>
                </div>

                <div className="col-6 mb-5">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from basic to advance trading.
                    </p>
                    <a href="" style={{textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className="mt-5">
                        TradingQ&A, the most active investment and trading community in India 
                        for all your market related queries.
                    </p>
                    <a href="" style={{textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    )
}