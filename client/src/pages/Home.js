import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div className="min-h-screen flex justify-center items-center bg-cover" style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/assets/man.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
            <div className='min-h-screen flex flex-col justify-center items-center' >
                <h1 className="text-5xl text-center text-orange-400 font-bold py-8">Object Detection for Visually Impaired People</h1>
                <p className="text-xl font-bold text-white text-center w-3/4">Empowering independence through cutting-edge object detection technology. Click the button below to begin your journey with us!</p>
                <Link to="/main" ><button className="start-button bg-orange-300 text-white font-bold py-2 px-4 rounded mt-4">Start</button></Link>
            </div>
        </div>
    )
}

export default Home

