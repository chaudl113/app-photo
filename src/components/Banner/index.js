import React from 'react'
import './Banner.scss'
const Banner = (props) => {
    const {title, backgroundUrl} = props; 
    const sectionStyle = backgroundUrl ? {
        backgroundImage:`url(${backgroundUrl})`
    }: {};

    return (
        <section className="banner" style={ sectionStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    )
}

export default Banner
