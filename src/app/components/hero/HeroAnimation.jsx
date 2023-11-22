'use client'
import React from "react";
import Lottie from "lottie-react";
import heroAnim from "../../style/heroAnimation.json"


const HeroAnimation = () => {
    if (!heroAnim) {
        return <p>Error loading animation.</p>;
    }
    return (
        <Lottie animationData={heroAnim} />
    )
}

export default HeroAnimation