
import React from 'react';

const Hero = () => {
    // For accessibility, provide a visually hidden alt text for the background image
    return (
        <section
            id="hero"
            aria-label="Hero section"
            style={{
                backgroundImage: "url('/heroImage.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="w-full h-screen flex flex-col items-center justify-center"
        >
            <span className="sr-only">Background image: digital marketing illustration</span>
            <div className="px-2 sm:px-0 w-full sm:w-1/3 h-screen flex flex-col items-center justify-center sm:gap-8 gap-4">
                <h1 className="text-center text-4xl sm:text-6xl">AlgoMedia Agency</h1>
                <p className="px-4 sm:px-10 text-tertiary text-md text-center">
                    Let’s bring your vision to life. <br className="sm:hidden" />We specialize in web development, social media marketing, and content creation.
                </p>
                <a
                    href="#contact"
                    className="mt-2 bg-background cursor-pointer hover:opacity-80 transition-all duration-300 w-fit text-primary px-8 py-3 rounded-xs"
                    aria-label="Contact Us section"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default Hero;
