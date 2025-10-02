export default function Universe() {
    return (
        <div className="container mt-5">
            <div className="row fs-5 mt-5 mb-5 text-center">
                <h1 className="mb-4 mt-5">The Zerodha Universe</h1>
                <p className="text-muted mb-5">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 fs-6 mb-5">
                    <img src="media/images/smallcaseLogo.png" className="mb-2" width={"70%"}></img>
                    <p className="text-muted text-small">
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 p-3 fs-6">
                    <img src="media/images/streakLogo.png" width={"50%"} className="mb-2"></img>
                    <p className="text-muted text-small">
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-4 p-3 fs-6">
                    <img src="media/images/dittoLogo.png" width={"50%"} className="mb-2"></img>
                    <p className="text-muted text-small">
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
                <div className="col-4 p-3 fs-6 mb-5">
                    <img src="media/images/sensibullLogo.svg" className="mb-2" width={"70%"} ></img>
                    <p className="text-muted text-small">
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-3 fs-6 mb-5">
                    <img src="media/images/zerodhaFundhouse.png" width={"70%"} className="mb-2"></img>
                    <p className="text-muted text-small">
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4 p-3 fs-6 mb-5">
                    <img src="media/images/goldenpiLogo.png" width={"70%"} className="mb-2"></img>
                    <p className="text-muted text-small">
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    )
}