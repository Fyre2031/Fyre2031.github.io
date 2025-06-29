import React from 'react';
import { BracketButton } from '../../components/BracketButton/BracketButton';

const heroButtonClass = "text-base font-bold";

export default function Hero() {
    return (
        <section className="hero flex flex-col items-center justify-center min-h-[40vh] py-12">
            <h1 className="text-5xl font-bold mb-6 text-center leading-tight">Ben Elliott</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://github.com/Fyre2031" target="_blank" rel="noopener noreferrer">
                    <BracketButton className={heroButtonClass} style={{ color: "#a084e8" }}>GitHub</BracketButton>
                </a>
                <a href="https://www.instagram.com/benelliott____/" target="_blank" rel="noopener noreferrer">
                    <BracketButton className={heroButtonClass} style={{ color: "#ff3fa1" }}>Instagram</BracketButton>
                </a>
                <BracketButton className={heroButtonClass} style={{ color: "#ff1111" }}>YouTube</BracketButton>
                <BracketButton className={heroButtonClass} style={{ color: "#5ab8ff" }}>Email</BracketButton>
            </div>
        </section>
    );
}
