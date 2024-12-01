import React from 'react';
import './Quotes.css';
import Quote from './Quote/Quote';
import data from './../../../media/quotes.json';
class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfQuotes: 50
        }
    }
    render() {
        console.log(data);
        let quoteArr = [];
        for (let i=0; i<this.state.numberOfQuotes; i++) {
            quoteArr[i] = <Quote quote={data[i].q} author={data[i].a} /> 
        }
        return (
            <section className="b-quotes">
                <div className="b-quotes__flex">
                    <h2 className="b-quotes__header b-quotes__left">
                        Quotes
                    </h2>
                    <div className="b-quotes__right">
                        <input className="b-quotes__input" type="text" name="numberQuotes" placeholder="How many quotes to display?"></input>
                        <div className="b-quotes__info">
                        <p>Można wpisać jedynie wartości liczbowe z zakresu od 0 do 50.</p>
                        <p>
                            Jakiekolwiek wpisanie wartości spoza zakresu spowoduje wyświetlenie
                            50 cytatów.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="b-quotes__list">
                    {quoteArr}
                </div>
            </section>
        )
    }
    componentDidMount() {
        let isClicked = false;
        let infoDiv = document.getElementsByClassName("b-quotes__info")[0];
        let numberCountInput = document.getElementsByClassName("b-quotes__input")[0];

        numberCountInput.addEventListener("change", e =>
            {if (!isNaN(Number(e.target.value)))  {
                
                if (e.target.value >= 0 && e.target.value <= 50) {
                    this.setState({numberOfQuotes: Number(e.target.value)});
                    e.target.pleholder="How many quotes to display?";
                } else {
                    this.setState({numberOfQuotes: 50});
                }
            } else {
                this.setState({numberOfQuotes: 50});
            }
            e.target.value = "";
            }
        );

        numberCountInput.addEventListener("click", function() {
            if (!isClicked) {
                infoDiv.style.display = "block";
                isClicked = true;
            } else {
                infoDiv.style.display = "none";
                isClicked = false;
            }
        })
        numberCountInput.addEventListener("mouseenter", function(e) {
            infoDiv.style.display = "block";
            isClicked = true;
        })
        numberCountInput.addEventListener("mouseout", function(e) {
            infoDiv.style.display = "none";
            isClicked = false;
        })
        numberCountInput.addEventListener("focusout", function() {
            infoDiv.style.display = "none";
            isClicked = false;
        })
    }
}
// TODO:
// - przygotować panel informacyjny v
// - Sources v
// - dać na gitHub
// - zaprojektować stronę TODO z Bootstrap
export default Quotes;