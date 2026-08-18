import { useState } from "react";
import './header.css';
import Search from "../Search/Search";

function Header(){
    return(
        <>
            <header>
                <section id="logo">
                    Logo
                </section>
                <section>
                    <Search/>
                </section>                
                <section className="headerInfo">
                    <nav id="navigation">
                        <ul className="listNavigation">
                            <a href=""><li>categorias</li></a>
                        </ul>
                    </nav>
                    <section>
                        <button>Login</button>
                    </section>
                </section>
            </header>
        </>
    )
}

export default Header;