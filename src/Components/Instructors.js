import '../App.css';
import { Outlet, Link } from "react-router-dom";


export function Instructors(){
    return(
        <>
            <body class="instructors">
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

                        
                        
                        <div class ="heading">
                            <h3><strong>Meet our Instructors</strong></h3>
                        </div>

                            

                        <div class="trainer">
                            <img src="https://www.chadwicksfitness.com/wp-content/uploads/2020/10/ChadwicksHeadshotsAug2020-CKMPhotography-132-e1604071012664.jpg" width="166" height="200" alt="me"></img>
                            <br></br>
                            <br></br>
                            <h3 class = "position">Jamie Lynn - Pilates</h3>
                            <p>Hi, my name is Jamie. I started doing pilates 10 years ago and am a certified pilates instructor. 
                                My goal is to <br></br>ensure every participant has a positive and fun experience with pilates at Motive Fitness
                            </p>
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>

                        <div class="trainer">
                            <img src="https://www.43fitness.com/wp-content/uploads/cassye-delphy-standing-bar-1.jpg" width="166" height="200" alt="me"></img>
                            <br></br>
                            <br></br>
                            <h3 class = "position">Megan Thompson - Yoga</h3>
                            <p>Hi, I'm Megan and I am the yoga instructor. I began doing yoga after my first child and have done it ever since! <br></br>
                                I am very passionate about helping people wiht their yoga journey no matter the experience level!
                            </p>
                        </div>

                        <br></br>
                        <hr></hr>
                        <br></br>

                        <div class = "trainer">
                            <img src="https://i.pinimg.com/236x/a4/3d/f2/a43df21e7d3614fbbc947b94a1129b76.jpg" width="166" height="200" alt="me"></img>
                            <br></br>
                            <br></br>
                            <h3 class = "position">Noush Richard - Zumba</h3>
                            <p>Hey, I'm Noush! I have a bachelors degree from the University of Toronto in sports education and am a true fitness<br></br>
                                guru! My goal is to help you achieve your goals! Looking forward to seeing you out there!
                                
                            </p>
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

export default Instructors;