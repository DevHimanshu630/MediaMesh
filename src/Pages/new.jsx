import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <>
            <div className='  relative  h-[100vh]'>
                <Link to={"https://app.lapentor.com/sphere/office-temp?scene=659bd600a23a0a887c069f73"}>
                    <button className='absolute '>
                        click me
                    </button>
                </Link>
                <iframe src="https://app.lapentor.com/sphere/office-temp" frameborder="0" width="100%" height="100%" scrolling="no" allow="vr,gyroscope,accelerometer" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true">

                </iframe>
            </div>
        </>
    )
}

export default New
