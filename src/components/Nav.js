import React from 'react';
import "../style/Nav.css"; 
import SearchName from './SearchName';

export default function Nav() {
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse row" id="navbarNav">

                        <div className="search-area">
                            <SearchName />
                        </div>
                    </div>
                </nav>
            </div>
    )
}
