export default function Brokerage() {
    return (
        <div className="container mt-5">
            <div className="row fs-5 pt-5 mt-5 mb-5">
                <div className="col-8 mt-5">
                    <h4 style={{color: "#0B5ED7"}} className="text-center mb-5">Brokerage Calculator</h4>
                    <ul className="text-muted mb-5">
                        <li className="mb-3">
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li className="mb-3">
                            Digital contract notes will be sent via e-mail.
                        </li>
                        <li className="mb-3">
                            Physical copies of contract notes, if required, shall be 20 per contract note.
                            Courier charges apply.
                        </li>
                        <li className="mb-3">
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (which is lower).
                        </li>
                        <li className="mb-3">
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity (which is lower).
                        </li>
                        <li className="mb-3">
                            If the account is in debit balance, every order will be charged ₹40 per executed order
                            instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className="col-4 mt-5 mb-5">
                    <h4 style={{color: "#0B5ED7"}} className="text-center">List of charges</h4>
                </div>
            </div>
        </div>
    )
}