import React from 'react'
import Header from '../components/Header';
import Subheader from '../components/Subheader';

function Hello() {
    return (
        <header className="m-2">
            <Header headerText="Hello, world!" />
            <Subheader subtext="This is my first Gatsby project! I am really excited to know what lies ahead of me in this journey" />
        </header>
    )
}

export default Hello;

export const Head  = () => (
    <title>Hello</title>
)
