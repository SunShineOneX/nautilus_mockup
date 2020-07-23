import React from "react";
import "../App.css";


function Channels() {
    return (
        <div class= "container">
            <div class="head-container">
            <h5 className="main-header">Channels</h5>
            <p className="sub-header">TUNE IN TO NAUTILUS DEEP DIVE PORTALS</p>
            </div>
            <div class="card-deck" id="card-deck">

                {/* First Row */}
                
                <div class="row">
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>BIOLOGY+BEYOND</p>
                            <img class="card-images" src={require("../assets/bio_and_beyond.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Making Sense of the Genome at Last</p>
                            <p class="author">by Adam Piere</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>Women's Science & Engineering</p>
                            <img class="card-images" src={require("../assets/wise_sci_and_engineering.png")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Your Brain Is On the Brink of Chaos</p>
                            <p class="author">by Kelly Clancy</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong>QUANTA</strong> ABSTRACTIONS</p>
                            <img class="card-images" src={require("../assets/abstractions.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Mathematicians Calculate How Randomness Creeps In</p>
                            <p class="author">by Marcus Woo</p>
                        </div>
                    </div>
                </div>
                
                {/* Second Row */}
                
                <div class="row">
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>EARTH</p>
                            <img class="card-images" src={require("../assets/earth.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">The Deep Time of Walden Pond</p>
                            <p class="author">by Cart Stager</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>THINK LIKE A SCIENTIST</p>
                            <img class="card-images" src={require("../assets/tlas.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">The Best Burger Place Is a Lab</p>
                            <p class="author">by Thomas King</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong><i>cosmos</i></strong></p>
                            <img class="card-images" src={require("../assets/cosmos.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">How Much Should Expectation Drive Science?</p>
                            <p class="author">by Claudia Geib</p>
                        </div>
                    </div>
                </div>
                
                {/* Third Row */}
                
                <div class="row">
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>POETRY IN SCIENCE</p>
                            <img class="card-images" src={require("../assets/poetry.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">On Observation and Imagination</p>
                            <p class="author">by Gillian Osborne</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>Aging</p>
                            <img class="card-images" src={require("../assets/aging.png")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Yes, Life in the Fast Lane Kills You</p>
                            <p class="author">by Phillip Ball</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>SCIENCE PHILANTHROPY ALLIANCE</p>
                            <img class="card-images" src={require("../assets/alliance.png")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Taking to the Stars</p>
                            <p class="author">by Science Philanthropy Alliance</p>
                        </div>
                    </div>
                </div>

                {/* Fourth Row */}
                
                <div class="row">
                    <div class="col-lg-4" id="last-container">
                        <div id="card" class="card">
                            <p>MP<strong>Neuro</strong></p>
                            <img class="card-images" src={require("../assets/maxplanck.jpeg")}className="card-img-top frag" alt=""></img>
                            <p class="sub-title">Understanding the Brain with the Help of Artificial Intelligence</p>
                            <p class="author">by Max Planck Institute of Neurobiology</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Channels
