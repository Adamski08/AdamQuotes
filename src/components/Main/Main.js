import React from 'react';
import About from './About/About.js';
import Quotes from './Quotes/Quotes.js';
import Sources from './Sources/Sources.js';
import Technologies from './Technologies/Technologies.js';
class Main extends React.Component {
    render() {
        return (
            <main className="b-main">
                <About />
                <Technologies />
                <Quotes />
                <Sources />
            </main>
        )
    }
}

export default Main;