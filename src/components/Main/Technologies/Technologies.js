import React from 'react';
import './Technologies.css';

class Technologies extends React.Component {
    render() {
        return (
            <section className="b-technology">
                <h2 className="b-technology__header">Technologies we use</h2>
                <div className="b-technology__list">
                    <div className="b-technology__list-item">
                        <h3 className="b-technology__item-header">React</h3>
                        <i className="b-technology__item-icon fa-brands fa-react fa-2x"></i>
                        </div>
                    <div className="b-technology__list-item">
                        <h3 className="b-technology__item-header">Sass</h3>
                        <i className="b-technology__item-icon fa-brands fa-sass fa-2x"></i>
                        </div>
                    <div className="b-technology__list-item">
                        <h3 className="b-technology__item-header">Bootstrap</h3>
                        <i className="b-technology__item-icon fa-brands fa-bootstrap fa-2x"></i>
                    </div>
                </div>
            </section>
        )
    }

}

export default Technologies;