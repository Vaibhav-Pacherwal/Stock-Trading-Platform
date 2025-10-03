import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="container-fluid p-5" id="support-box" style={{backgroundColor:"#0B5ED7", color:"white"}}>
            <div className="row fs-5 ps-5">
                <div className="col-9 ps-5">
                    <p className="mb-5">Support Portal</p>
                </div>
                <div className="col-3 ps-5">
                    <Link to="#" style={{color:"white"}}>Track Tickets</Link>
                </div>
            </div>
            <div className="row fs-5 p-5 ps-5">
                <div className="col-7 ps-5">
                    <p style={{lineHeight:"2rem"}} className="fs-4">Search for an answer or browse helps topic <br />to create a ticket</p>
                    <input 
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                    className="fs-6 mb-4 mt-3"
                    style={{padding:"1.2rem", borderRadius:"7px", border:"none", width:"60%"}}></input>
                    <div className="row">
                        <p>
                            <Link to="#" style={{color:"white"}}>Track account opening</Link>&nbsp;&nbsp;&nbsp;
                            <Link to="#" style={{color:"white"}}>Track segment activation</Link>&nbsp;&nbsp;&nbsp;
                            <Link to="#" style={{color:"white"}}>Intraday</Link><br />
                            <Link to="#" style={{color:"white"}}>margins</Link>&nbsp;&nbsp;&nbsp;
                            <Link to="#" style={{color:"white"}}>kite user manual</Link>
                        </p>
                    </div>
                </div>
                <div className="col-5 ps-5">
                    <p style={{lineHeight:"2rem"}} className="fs-4">Featured</p>
                    <p style={{lineHeight:"3rem"}}>
                        1. <Link to="#" style={{color:"white"}}>Current Takeovers and Delistings - January 2024</Link><br />
                        2. <Link to="#" style={{color:"white"}}>Latest Intraday Leverages - MIS & CO</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

{/* <div className="col-6">
                    <p className="mb-5">Support Portal</p>
                    <p>Search for an answer or browse helps topic <br />to create a ticket</p>
                    <input 
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                    className="fs-6 mb-3"
                    style={{padding:"1.2rem", borderRadius:"7px", border:"none", width:"60%"}}></input>
                    <div className="row fs-6">
                        <p>
                            <Link to="#" style={{color:"white"}}>Track account opening</Link> <Link to="#" style={{color:"white"}}>Track segment activation</Link> <Link to="#" style={{color:"white"}}>Intraday</Link><br />
                            <Link to="#" style={{color:"white"}}>margins</Link> <Link to="#" style={{color:"white"}}>kite user manual</Link>
                        </p>
                    </div>
                </div>
                <div className="col-6"></div> */}