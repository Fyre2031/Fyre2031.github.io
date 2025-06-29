import React from 'react';

export const BracketButton = (props: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}) => (
    <button
        type="button"
        onClick={props.onClick}
        className={`text-base font-bold px-2 py-1 ${props.className || ''}`}
        style={props.style}
    >
        [<span className="mx-1 hover:underline transition-all duration-150">{props.children}</span>]
    </button>
);
