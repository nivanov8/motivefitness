import '../App.css';
import { Outlet, Link } from "react-router-dom";

export function Classes(){
    return(
        <>
            <body class="classes">
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
                            <h3><strong>Classes we offer</strong></h3>
                        </div>

                        

                        <div class="trainer">
                            <img src="https://media.istockphoto.com/id/1163093003/photo/woman-doing-short-spine-pilates-exercise.jpg?s=612x612&w=0&k=20&c=BgS7eHkm7yp0T1rLOEjezNiei4NOmxSub2tt8vtdp2g=" width="166" height="200" alt="me"></img>
                            <br></br>
                            <br></br>
                            <h3 class = "position">Pilates</h3>
                            <p>Pilates is a holistic exercise method that combines strength, flexibility, and controlled movements to improve posture, core stability <br></br>
                                and overall body awareness.
                            </p>
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>

                        <div class="trainer">
                            <img src="https://media1.popsugar-assets.com/files/thumbor/AJjNS-_If8tnxDyg9c3tp4qWfgc/1185x0:4589x3404/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/02/10/830/n/1922729/baefc1325e41a7342a4859.51904783_/i/how-i-push-through-hot-yoga-classes.jpg" width="166" height="200" alt="me"></img>
                            <br></br>
                            <br></br>
                            <h3 class = "position">Yoga</h3>
                            <p>Yoga is an ancient practice that harmonizes the body, mind, and spirit through a combination of physical postures, breathing techniques and<br></br>
                                meditation, promoting physical strength, mental clarity, and inner peace.
                            </p>
                        </div>

                        <br></br>
                        <hr></hr>
                        <br></br>

                        <div class = "trainer">
                            <img src="https://st3.depositphotos.com/1004713/12667/i/600/depositphotos_126676204-stock-photo-group-of-people-at-urban.jpg" width="166" height="200" alt="me"></img>
                            <br></br>
                            <br></br>
                            <h3 class = "position">Zumba</h3>
                            <p>Zumba is a high-energy dance fitness program that fuses Latin rhythms with aerobic exercises, creating a fun and dynamic workout experience.
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

export default Classes;