import React from 'react'
import "../css/hero.css"



const Hero = () => {

const navigatetoLogin = () => {
    window.location.href = "/login";
}



return (
    <div className='hero' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div
            style={{
                backgroundImage: 'url("../assets/book.jpg")',
                backgroundRepeat: 'no-repeat',
                width: "100vw",
                height: "100vh",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: 0,
                padding: 0,
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        >
        </div>

        <div className='card'>
            <p>hshdbbaskdiabsdbajksbdjbasfbiabsdfionbasifblianbskajksfbiabsfiobaIOFBIOABSIOBASOFBIOASFBIOBASFIOBAISOFBF</p>
            <button onClick={navigatetoLogin}>Login</button>
        </div>
    </div>
)
}



export default Hero