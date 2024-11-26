"use client";

import React, { useEffect, useState } from "react";

const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random()*100}%`,
    left: `${Math.random()*100}%`,
    animationDuration: `${Math.random()*5 + 5}s`
});

const FireFliesBackground = () => {
    const [fireflies, setFireflies] = useState([]); 

    useEffect(() => {
        const addFireflyPeriodically = () => {
            const newFirefly = createFirefly();
            setFireflies(prev => [...prev, newFirefly]); 
        };

        for(let i = 0; i < 20; i++) {
            addFireflyPeriodically();
        }

        const interval = setInterval(addFireflyPeriodically, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {fireflies.map((firefly) => (
                <div 
                    key={firefly.id}
                    className="absolute rounded-full bg-accent w-[2px] h-[2px]"
                    style={{
                        top: firefly.top,
                        left: firefly.left,
                        animation: `move ${firefly.animationDuration} infinite alternate`
                    }}
                />
            ))}
        </div>
    );
};

export default FireFliesBackground;