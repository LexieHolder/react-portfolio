import React from 'react';

function Nav() {

    return (
        <header>
            <h2>

            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href='#about'>
                            About Lexie
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;