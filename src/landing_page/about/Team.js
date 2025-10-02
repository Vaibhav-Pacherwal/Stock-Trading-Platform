import { Link } from "react-router-dom"

export default function Team() {
    return (
        <div className="container">
            <div className="row p-5 text-center">
                <h1>People</h1>
            </div>
            <div className="row p-4 mb-5">
                <div className="col text-center">
                    <img 
                      src="media/images/nithinKamath.jpg" 
                      style={{borderRadius: "100%", width: "60%"}}>
                    </img>
                    <h4 className="mt-4 mb-4">Nithin Kamath</h4>
                    <h5 className="text-muted">Founder, CEO</h5>
                </div>
                <div className="col pt-5 fs-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
                        he faced during his decade long stint as a trader. Today, Zerodha has changed 
                        the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the 
                        Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>Connect on <Link to="/">Homepage</Link> / <Link to="/tradingQnA">TradingQnA</Link> /
                       <Link to="/twitter">Twitter</Link> 
                    </p>
                </div>
            </div>
        </div>
    )
}