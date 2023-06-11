import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function Book(){
    return(
        <>
            <body class="book">
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


                        {/* HEADING */}

                        <div class ="heading">
                            <h3><strong>Schedule workout</strong></h3>
                        </div>


                        <div>
                        <form>
                            <div class = "first">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Workout</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select workout</option>
                                        <option value="1">Pilates</option>
                                        <option value="2">Yoga</option>
                                        <option value="3">Zumba</option>
                                    </select>
                                </div>
                                <div class='mb-3'>
                                    <label for="exampleInputEmail1" class="form-label">Date</label>
                                    <input type="date" id="bookdate" name="bookdate" class="form-control"></input>
                                </div>


                                

                                
                            </div>
                            <div class="second">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Phone number</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Trainer</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select trainer</option>
                                        <option value="1">Jamie Lynn</option>
                                        <option value="2">Megan Thompson</option>
                                        <option value="3">Noush Richard</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Trainer</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Available times</option>
                                        <option value="1">10:00 AM</option>
                                        <option value="2">1:00 PM</option>
                                        <option value="3">3:30 PM </option>
                                    </select>
                                    <div id="emailHelp" class="form-text">All times are EST (Eastern Standard Time)</div>
                                </div>
                            </div>
                        </form>
                        </div>

                        <div>
                            <div class="mb-3 signup">
                                <Link to="/paymentinfo" class="btn btn-primary">Confirm</Link>
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
export default Book;