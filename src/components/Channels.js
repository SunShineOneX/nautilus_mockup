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
                </div>
            </div>
    )
}

export default Channels
