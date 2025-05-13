import React from 'react';
import './About.css';
class About extends React.Component {
    render() {
        return (
            <article className="b-main__about">
                <h2 className="b-main__about-header">About page</h2>
                <div className="b-main__about-content">
                The main purpose of the page is to display quotes in the amount specified by the user.

                </div>

            </article>
        )
    }
}

export default About;