import React from "react";
import '../index.css';

function Footer() {

    const pgp_logo = "https://www.party-guru.com/wp-content/uploads/2021/08/PGP_Logo_Website2019-300x97-1.png"

    return (
        <div id="footer">
            <div className="row">
                <div className="column">
                    <img src={pgp_logo} alt="PGP Logo" id="footer-logo" />
                </div>
                <div className="column">
                    <ul id="footer-list">
                        <li><a id="white-text" href="https://www.party-guru.com/contact/">Contact Us</a></li>
                        <li><a id="white-text" href="https://g.page/r/CcqtRvR7NktXEB0/review">Leave a Review</a></li>
                        <li><a id="white-text" href="https://forms.gle/p2tP8bERDmqDy5TH6">Request a Proposal</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Footer