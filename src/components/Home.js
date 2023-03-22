import React from "react";
import '../index.css';

function Home() {
    
    const pgp_logo = "https://www.party-guru.com/wp-content/uploads/2021/08/PGP_Logo_Website2019-300x97-1.png"

    const party_sloth = "https://trello.com/1/cards/641146a800f511db588dc9c6/attachments/641146b4685d9fccd3cb0c21/previews/641146b6685d9fccd3cb0e1c/download/version%3D1%26uuid%3DFB13454A-6FB1-4936-8532-D1549D68F473%26mode%3Dcompatible%26noloc%3D0.png"

    return (
        <div id="pgp_logo" >
            <img src={pgp_logo} alt="pgp logo" />
            <h3 id="white-text">Partying is the business, and business is good!</h3>
            <br/>
            <img src={party_sloth} alt="party sloth" id="party_sloth" />
        </div>
    )
}

export default Home