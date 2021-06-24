import React from 'react'
import Banner from 'components/Banner'
import Images from 'constants/images';
import { Container } from 'reactstrap';
import {   Link  } from 'react-router-dom';
const Main = () => {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG}/>
            <Container className="text-center pt-5" >
            <Link to="/photos/add" className="text-white text-decoration-none text-uppercase btn btn-primary"> Add new photo</Link>
            </Container>
        </div>
    )
}

export default Main
