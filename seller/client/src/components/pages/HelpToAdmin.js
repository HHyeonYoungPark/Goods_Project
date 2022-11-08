import React from 'react';
import "../css/pages/HelpToAdmin.css";
import Dropdown from '../function/Dropdown';

const Help = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <div id='app'>
            <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {
                    dropdownVisibility
                        ? 'Close'
                        : 'Open'
                }
            </button>
            <Dropdown visibility={dropdownVisibility}>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </Dropdown>
        </div>
    )
};

export default Help;
