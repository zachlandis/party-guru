import React from "react";

function About() {


    return (
        <div className="About">
            <h1 id="white-text">About Party Guru Productions</h1>
            <div id="social-link-div">
                <p><a href="https://www.facebook.com/partyguruproductions"><img 
                    className="social-icons" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    alt="FB logo" /></a></p>

                <p><a href="https://www.instagram.com/partyguruproductions/"><img 
                    className="social-icons" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" 
                    alt="IG logo" /></a></p>

                <p><a href="https://twitter.com/partyguruus"><img 
                    className="social-icons" 
                    src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                    alt="Twitter logo" /></a></p>
            </div>
            <h2 id="white-text"> Who We Are</h2>
            <p id="white-text" >
                We here at Party Guru Productions think celebration is a basic human necessity. We don’t reserve it for special occasions—this is what we do every day. No matter your scene or favorite genre of music, it is our privilege to bring you the party.
                Whether you’re totally new to promoting events or simply want to approach your next show from different angles, Party Guru can help. Between infrastructure, staffing, booking, hospitality, marketing and vendor acquisition, we’ll ensure you cover all your bases.
            </p>
            
            <h2 id="white-text"> Our Services</h2>
            <div class="row">
                <div class="column">
                    <h2>General Marketing</h2>
                    <br/>
                    <h2>Press & Media</h2>
                    <br/>
                    <h2>Event Planning</h2>
                </div>
                <br/>
                <div class="column">
                    
                        <img 
                            id="concert-pic"
                            src="https://www.party-guru.com/wp-content/uploads/2023/03/NAV_Summit_03_09_232-3-scaled.jpg" 
                            alt="concert pic" />
                    
                </div>
            </div>
            <br/>
            <iframe id="spotify" src="https://open.spotify.com/embed/playlist/5Ms8VrWAtbeauTBeFJK65W?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default About