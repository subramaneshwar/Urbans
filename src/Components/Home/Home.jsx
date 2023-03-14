import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className='main'>

            <div className="left">
                <h1>Leading MEP & Facility </h1>
                <h1> management company in </h1>
                <h1>Dubai</h1>
                <p>Urban Science is always ready to accept your challenges</p>
                <p> Meeting your goals is our main objective. Professional </p>
                <p>services for facility management & MEP works.</p>
                <div className="butt">
                    <button>Company Profile</button>
                    <p>Watch video</p>
                </div>
            </div>
            <div className="right">
                <img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png" alt="" />
            </div>
        </div>
    )
}

export default Home