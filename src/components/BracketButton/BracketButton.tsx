import React from 'react';

export const BracketButton = (props: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}) => (
    <button
        type="button"
        onClick={props.onClick}
        className={`
            font-mono
            text-lg
            hover:underline
            ${props.className || ''}
        `}
    >
        [ {props.children} ]
    </button>
);
