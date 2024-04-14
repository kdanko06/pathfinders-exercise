import React from "react";

function Header() {
    return (
        <div>
            <nav className="nav">
                <div className="nav-left">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <div>
                            <a className="taskboard" href="/#">
                                Task Board
                            </a>
                        </div>
                        <div>
                            <a className="addtast" href="https://clickup.com">
                                Add task
                            </a>
                        </div>
                        <div>
                            <a className="Google" href="https://www.google.com">
                                Google
                            </a>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="nav-right">
                        <a href="https://www.google.com"> Just google </a>
                </div>
            </nav>
        </div>
    );
}

export default Header;