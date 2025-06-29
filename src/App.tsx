import React from 'react'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

export default function App() {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <Hero />
            <About />
            <Projects />
            <Footer />
        </main>
    )
}