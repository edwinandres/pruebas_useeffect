import React, {useState, useEffect} from 'react'

const ResizeApp = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const isMobile = windowWidth < 768;


    useEffect(() => {
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        // add event listener
        window.addEventListener('resize', handleResize);

        //En el desmontaje del componente, se elimina el evento
        return () => {
            window.removeEventListener('resize', handleResize);            
        }

    }, [])

    
    

    return (
        <div>
            <h1>Resize App</h1>
            <p>Window width is {windowWidth}</p>
            <p>Is mobile? {isMobile ? 'Yes' : 'No'}</p>
            <button onClick={() => setWindowWidth(windowWidth + 100)}>
                Increase window width
            </button>
            <button onClick={() => setWindowWidth(windowWidth - 100)}>
                Decrease window width
            </button>

        </div>
    )
}

export default ResizeApp
