import '../App.css';
import { Outlet, Link } from "react-router-dom";

const  Homepage = () => {
    return (
        <>

            {/* BACKGROUND IMAGE */}
            <body>
                <div class="mainDiv">
                    {/* NAVBAR */}
                    <nav class="navbar navbar-expand-lg navbar-custom content">
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

                    {/* ALERT */}
                    <div class="smaller-container content mt-5">
                        <div class="alert alert-primary text-center" role="alert">
                            <h4 class="text-center"><strong> Bring a friend and recieve 30% OFF your monthly workout</strong></h4>
                        </div>
                    </div>
                    


                    {/* CARDS */}
                    <div class="container content">
                        <div class="row">
                            <div class="col-lg-3 mb-2 mx-auto">
                                <div class="card">
                                    <div class="card-header text-center"><h3>Pilates</h3> </div>
                                    <div class="card-body d-flex flex-column justify-content-between mt-2">
                                        <ul>
                                            <li>1 session per week</li>
                                            <li>1 hour each</li>
                                            <li>Group sessions</li>
                                        </ul>
                                        <h4 class="text-center mt-auto"><strong>$30/ Month</strong></h4>
                                        <div class="smaller-button mt-auto">
                                            <Link to="/book" class="btn btn-primary d-flex justify-content-center smaller-button">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-3 mb-2 mx-auto content">
                                <div class="card">
                                    <div class="card-header text-center">
                                        <h3>Yoga</h3>
                                    </div>
                                    <div class="card-body d-flex flex-column justify-content-between mt-2">
                                        <ul>
                                            <li>1 session per week</li>
                                            <li>1 hour each</li>
                                            <li>Group sessions</li>
                                        </ul>
                                        <h4 class="text-center mt-auto"><strong>$30/ Month</strong></h4>
                                        <div class="smaller-button mt-auto">
                                            <Link to="/book" class="btn btn-primary d-flex justify-content-center smaller-button">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            <div class="col-lg-3 mb-2 mx-auto content">
                                <div class="card">
                                    <div class="card-header text-center"><h3>Zumba</h3> </div>
                                    <div class="card-body d-flex flex-column justify-content-between mt-2">
                                        <ul>
                                            <li>1 session per week</li>
                                            <li>45 minutes</li>
                                            <li>Group sessions</li>
                                        </ul>
                                        <h4 class="text-center mt-auto"><strong>$35/ Month</strong></h4>
                                        <div class="smaller-button mt-auto">
                                            <Link to="/book" class="btn btn-primary d-flex justify-content-center smaller-button">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

                
                
            </body>
        </>

    )
}

export default Homepage;