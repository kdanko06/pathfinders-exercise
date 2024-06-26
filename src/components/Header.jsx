import React from "react";

function Header(onSetPage) {
    return (
        <div>
            <nav className="flex">
                <div className="flex-row">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                        <div>
                            <a className="taskboard" onClick={() => onSetPage('taskBoard')}>
                                Task Board
                            </a>
                        </div>
                        <div>
                            <a className="addtask" onClick={() => onSetPage("addTask")}>
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
                <div className="flex-row-reverse">
                        <a href="https://www.google.com"> Just google </a>
                </div>
            </nav>
        </div>
    );
}

export default Header;