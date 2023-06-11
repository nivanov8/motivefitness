import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function Confirmation(){
    return (
        <>
            <body class="confirmation">
                <div class="whiteSpace">

                    <div class="mainDiv">
                        {/* NAVBAR */}
                        <nav class="navbar navbar-expand-lg navbar-custom">
                            <div class="container-fluid">
                                <Link class="navbar-brand" to="/">
                                    <div class="motive-fitness">
                                        <span class="motive-text">Motive</span>
                                        <span class="fitness-text">Fitness</span>
                                    </div>
                                </Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <div class="navbar-nav">
                                        <Link class="nav-link nav-bigger" to="/classes">Classes</Link>
                                        <Link class="nav-link nav-bigger" to="/instructors">Instructors</Link>
                                        <Link class="nav-link nav-bigger" to="/login">
                                            My Account
                                            <i class="bi bi-person-circle icon-bigger ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div class ="heading text-center">
                            <h3><strong>Workout Confirmation</strong></h3>
                        </div>
                        <br></br>
                        <div class = "text-center mt-5">
                            <h4>A confirmation email was sent to you! Thank you for choosing Motive Fitness</h4>
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            <div class="signup text-center mt-5">
                                <Link to="/" class="btn btn-primary">Home</Link>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER */}
                    <footer class="text-center text-lg-start border border-white mt-xl-5 pt-3 pb-2">
                        <div class="container p-2">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                                    <h5 class="text-uppercase mb-3 fs-6">Hours of Operation</h5>
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-clock fs-4 me-2"></i>
                                        <div>
                                            <p class="mb-1 fs-7">Mon - Fri</p>
                                            <p class="mb-0 fs-7">9 AM - 11 PM</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                                    <h5 class="text-uppercase mb-3 fs-6">Location</h5>
                                    <div class="d-flex align-items-center">
                                        <i class="bi bi-geo-alt fs-4 me-2"></i>
                                        <div>
                                            <p class="mb-1 fs-7">1195 Yonge St</p>
                                            <p class="mb-0 fs-7">L4C 7J4, Unit 3</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                                    <h5 class="text-uppercase mb-3 fs-6">Contact Us</h5>
                                    <div class="d-flex align-items-start">
                                        <i class="bi bi-telephone me-2"></i>
                                        <div>
                                            <p class="mb-1 fs-7">613-214-9078</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start">
                                        <i class="bi bi-envelope-at me-2"></i>
                                        <div>
                                            <p class="mb-0 fs-7">motivefitness@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-3 col-md-6 mb-3 mb-lg-0">
                                    <h5 class="text-uppercase mb-3 fs-6">Follow Us</h5>
                                    <div class="d-flex align-items-start">
                                        <i class="bi bi-twitter fs-4 me-2"></i>
                                        <i class="bi bi-instagram fs-4"></i>
                                    </div>
                                    <p class="mt-2 mb-0 fs-7">@motivefitness</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        
        </>


    )

}
export default Confirmation;