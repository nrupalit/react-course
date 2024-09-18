import { useState } from "react";
import { EXAMPLES } from "../constants/data";
import PropTypes from 'prop-types';


export default function Examples() {
    const [activeTab, setTab] = useState()
    const handleClick = (tab) => {
        setTab(tab)
    }
    let tabContent = <p>Please select topic</p>
    if (activeTab) {
        tabContent = <Tabs tab={activeTab} />
    }
    const tabs = Object.keys(EXAMPLES);
    return(
        <>
        <h1>Examples:</h1>
        {tabs.map((tab) => <TabButton className={activeTab === tab ? 'active-tab': undefined} key={tab} onClick={() => handleClick(tab)}>{tab}</TabButton>)}
        {tabContent}
        <p className="read-the-docs">
            Time to get started...!
        </p>
        </>
    )
}

Tabs.propTypes = {
    tab: PropTypes.any.isRequired
}

function Tabs({tab}) {
    return(
        <>
            <div>
                <h1>{EXAMPLES[tab].title}</h1>
                <p>{EXAMPLES[tab].description}</p>
                <code>{EXAMPLES[tab].code}</code>
            </div>
        </>
    )
}

TabButton.propTypes = {
    children: PropTypes.any,
    onSelect: PropTypes.any,
    className: PropTypes.string
}

function TabButton({children, ...props}) {
    return(
        <button {...props}>{children}</button>
    )
}