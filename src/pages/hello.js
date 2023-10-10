import React from 'react'
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Hero from '../components/Hero';

function Hello() {
    return (
        <article>
            <header className="relative">
                <Navbar />
            </header>
            <Content />
            <Hero />
        </article>
    )
}

export default Hello;

export const Head = () => (
    <title>Hello</title>
)
