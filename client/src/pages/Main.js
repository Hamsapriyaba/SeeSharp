import React from 'react';
import WebcamFeed from '../components/WebcamFeed';
import DetectedObjects from '../components/DetectedObjects'

const Main = () => {
    return (
        <div className="bg-black text-white h-screen">

            {/* <h1 className='font-bold text-center text-4xl text-red-200'>Object Detection for Visually Impaired</h1> */}
            <div className='flex space-x-24 '>
                <WebcamFeed />
                <div className='flex-col mt-20'>
                    <h1 className='text-center text-2xl font-bold pl-44'>Detected Objects:</h1>
                    <DetectedObjects />
                </div>
            </div>

        </div>
    )
}

export default Main