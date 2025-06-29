import React from 'react'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

export default function App() {
    return (
        <main className="container mx-auto max-w-5xl px-8 lg:px-16">
            <Hero />
            <hr className="border-t border-[#333] my-8" />
            <About />
            <hr className="border-t border-[#333] my-8" />
            <Projects />
            <hr className="border-t border-[#333] my-8" />
            <Footer />
        </main>
    )
}