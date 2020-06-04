import React, { useEffect } from "react";
import Navbar from "./Navbar"

export default function Profile(props) {
    useEffect(() => {
        console.log(props.user)
    }, ([props.user]))

    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            <Navbar />
            <section></section>
        </div>
    )
}