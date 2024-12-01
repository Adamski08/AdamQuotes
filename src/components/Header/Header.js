import React from 'react';
import './Header.css';
class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        let divEl = document.getElementsByClassName("b-indicator")[0];

        if (!divEl) {
            let body = document.getElementsByTagName("body")[0];
            let divEl = document.createElement("div");
            divEl.classList = "b-indicator";
            divEl.innerHTML = `<i class="fa-solid fa-arrow-up fa-2x"></i>`;
            let nodeListLength = body.childNodes.length;
            let hasDivEl = false;
            for (let i = 0; i < nodeListLength; i++) {
                if (body.childNodes[i] === divEl) {
                    hasDivEl = true;
                }
            }
            if (!hasDivEl) {
                body.appendChild(divEl);
            }
            
            divEl.addEventListener("click", () => {
                window.scrollTo(0,0);
            });
            window.addEventListener("scroll", (e) => {
                if (divEl) {
                    if (window.scrollY > window.innerHeight) {
                        divEl.style.display = "block";
                    } else {
                        divEl.style.display = "none";
                    }
                }
    
                });
        }
        



        return (
        <header className="b-header">
            <div className="b-header__left">
                <img className="b-header__left-logo" alt="" src="./favicon.ico"></img>
            </div>
            <div className="b-header__right">
                <h1 className="b-header__right-header">AdamQuotes</h1>
            </div>
        </header>  
    )
    }
    componentDidMount() {


    } 
}
export default Header;