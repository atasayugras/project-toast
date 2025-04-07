import React from 'react';

// This hook lets components respond to keyboard presses
function useKeyDown(keyCode, callback) {
    React.useEffect(() => {

        const handleKeyPress = (event) => {
            if (event.code === keyCode) {
                // Run the function that was passed in
                callback(event);
            }
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [keyCode, callback]);
}

export default useKeyDown;