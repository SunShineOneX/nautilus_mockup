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
                            <p>Making sense of the genome at last</p>
                            <p></p>
                        </div>
                        </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>Women's Science & Engineering</p>
                            <img class="card-images" src={require("../assets/wise_sci_and_engineering.png")}className="card-img-top frag" alt=""></img>
                        </div>
                        </div>
                        <div class="col-lg-4">
                        <div id="card" class="card">
                            <p><strong>QUANTA</strong> ABSTRACTIONS</p>
                            <img class="card-images" src={require("../assets/abstractions.jpeg")}className="card-img-top frag" alt=""></img>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Channels
