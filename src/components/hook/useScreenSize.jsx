"use client";

const { useState, useEffect } = require("react")

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        function getScreenSize(){
            return window.innerWidth;
        }

        function handleResize() {
            setScreenSize(getScreenSize());
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return screenSize;
};

export default useScreenSize;