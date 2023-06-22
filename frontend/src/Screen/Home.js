import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Caraousal from '../Components/Caraousal'

function Home() {
    return (
        <div>
            <Navbar />
            <Caraousal />
            <div className='m-3'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}

export default Home