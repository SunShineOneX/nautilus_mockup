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
                        </div>
                        </div>
                    <div class="col-lg-4">
                        <div id="card" class="card">
                            <p>Women's Science & Engineering</p>
                        </div>
                        </div>
                        <div class="col-lg-4">
                        <div id="card" class="card">
                            Science
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Channels
