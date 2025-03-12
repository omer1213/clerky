"use client"

import React from 'react'
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";

function Contact() {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }
    
    return (
        <div>Contact</div>
    )
}

export default Contact