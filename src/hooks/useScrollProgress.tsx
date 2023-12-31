import React, { useState, useEffect } from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress: any = window.scrollY;
            const scrollHeight: any = document.body.scrollHeight - window.innerHeight

            if (scrollHeight) {
                // Calculate the completion as a numeric value first and then convert to a fixed decimal string
                const completionValue = Number((currentProgress / scrollHeight).toFixed(2));
                
                // Multiply the numeric completion value by 100
                const completionPercentage = completionValue * 100;
            
                // Set the completion percentage in state
                setCompletion(completionPercentage);
            }
        };
        window.addEventListener('scroll', updateScrollCompletion);

        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return completion;
};

export default useScrollProgress;