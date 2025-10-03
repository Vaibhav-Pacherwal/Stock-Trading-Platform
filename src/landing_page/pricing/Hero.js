export default function Hero() {
    return (
        <div className="container mt-5">
            <div className="row fs-5 p-5 mt-5 text-center">
                <h2 className="mb-4">Charges</h2>
                <h3 className="text-muted mb-4 fs-4">List of all charges and taxes</h3>
            </div>
            <div className="row fs-5 p-3">
                <div className="col-4 p-4 mt-5 text-center">
                    <img src="media/images/pricingEquity.svg" width={"75%"}></img>
                    <h2 className="mb-4">Free equity delivery</h2>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4 p-4 mt-5 text-center">
                    <img src="media/images/intradayTrades.svg" width={"75%"}></img>
                    <h2 className="mb-4">Intraday and F&O trades</h2>
                    <p className="text-muted">
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades 
                        across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media/images/pricingEquity.svg" width={"75%"}></img>
                    <h2 className="mb-4">Free direct MF</h2>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    )
}