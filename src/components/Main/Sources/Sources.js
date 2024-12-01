import React from 'react';
import './Sources.css';
class Sources extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="b-sources">
                <h2 className="b-sources__header">Sources</h2>
                <div className="b-sources__content">
                    <h3 className="b-sources__content-heading">Quotes: </h3>
                    <p>Inspirational quotes provided by <a className="b-sources__content-link" href="https://zenquotes.io/" rel="noreferrer" target="_blank">ZenQuotes API</a></p>
                    <h3 className="b-sources__content-heading">Icons: </h3>
                    <p>Icons from <a className="b-sources__content-link" href="https://fontawesome.com/" rel="noreferrer" target="_blank">fontawesome.com</a></p>
                </div>
            </section>
        )
    }
    componentDidMount() {
        let sourcesEl = document.getElementsByClassName("b-sources")[0];
        let bodyEl = document.getElementsByTagName("body")[0];
        bodyEl.addEventListener("change", (e) => {
            if(bodyEl.offsetHeight < window.innerHeight) {
                sourcesEl.style.position = "absolute";
                sourcesEl.style.bottom = 0;
                sourcesEl.style.left = 0;
            } else {
                sourcesEl.style.position = "static";
                sourcesEl.style.bottom = "none";
                sourcesEl.style.left = "none";
            }

        })
    }
}

export default Sources;