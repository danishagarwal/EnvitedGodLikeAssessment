import React from 'react'
import classes from './Create.module.css'
import image from './image.png'

const Create = () => {
    return (
        <div>
        <p className={classes.headingText}>
            <h2 >What if, the Avengers were dead?</h2>
            
            <h1>DAREDEVIL TO THE RESCUE</h1>
            
            <p className = {classes.smallText}>Let's create an event on this hot topic, shall we?</p>
            </p>
            <button className={classes.sexy}>Create my Event</button>
            <img className= {classes.imagecs}src={image} alt="" />

            
        </div>
    )
}

export default Create