import React from "react";
import video from "./Video/pexels-theresa-nguyen-5121901-1280x720-60fps.mp4";

function Home() {

    return (
        <div>
            <video src={video} autoPlay loop muted style={{ position: "absolute", width: "100%", objectFit: "cover", margin: "0", padding: "20", border: "0", zIndex: "-1" }} />
            <div className="home">
                <h1>Home Page</h1>
                <p>The purpose of this application is to provide the size of the market based on the actual flight hour data collected from Aviation Edge.</p>
                <p>There are 3 pages to this application. This is the home page which provides a brief explanation of the application. The Data page alllows the user to list all the flights within the selection criteria made by the user and the Analytics page performs calculation to provide the market size of the group of products selected.</p>
            </div>
        </div>

    );
}

export default Home