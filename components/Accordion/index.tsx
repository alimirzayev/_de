import React, { useState, useRef, useEffect } from 'react';
import './accordion.css';

const Accordion = ({ title, children, mvp }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState("0px");

    const contentRef = useRef(null);

    useEffect(() => {
        setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }, [isOpen]);

    return (
        <div className="accordion-section">
            <button style={{background: mvp ? '#F6F6F6' : 'white'}} className={`accordion ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <p className="accordion-title">{title}</p>
                <div className={`accordion-icon ${isOpen ? "rotate" : ""}`}></div>
            </button>
            <div ref={contentRef} style={{ maxHeight: `${contentHeight}` }} className="accordion-content">{children}</div>
        </div>
    );
}

export default Accordion;
