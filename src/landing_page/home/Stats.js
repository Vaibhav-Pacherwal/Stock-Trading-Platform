export default function Stats() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h3 className="fs-4">Customer-first always</h3>
                    <p className="text-muted">
                        That's why 1.3+ crore customers trust zerodha with
                        3.5+ lakh crores worth of equity investments.
                    </p>
                    <h3 className="fs-4">No spam or gimmicks</h3>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification" and annoying push
                        notifications. High quality apps that you use at your pace,
                        the way you like.
                    </p>
                    <h3 className="fs-4">The Zerodha universe</h3>
                    <p className="text-muted">
                        Not just ans app, but a whole ecosysytem. Our investments in 30+ 
                        fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h3 className="fs-4">Do better with money</h3>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just facilitates 
                        transactions, but actively help you do better with your money.
                    </p>
                </div>
                <div className="col-6 text-center p-5">
                    <img src="media/images/ecosystem.png" style={{width:"91%"}}/>
                    <div>
                        <a href="" style={{textDecoration: "none"}} className="mx-5">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}