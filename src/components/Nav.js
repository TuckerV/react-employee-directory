import React from 'react';
import "../style/Nav.css"; 
import SearchName from './SearchName';

export default function Nav() {
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    Search
                    </button>
                    <div className="collapse navbar-collapse row" id="navbarNav">

                        <div className="search-area col-4">
                            <SearchName />
                        </div>
                    </div>
                </nav>
            </div>
    )
}
