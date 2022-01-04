import React, { useEffect, useState } from 'react'

console.log('Pre-render')

const Lifecycle = () => {
    console.log('Logic render')

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)


    //Sin dependencias se ejecuta cada vez que el estado cambia
    useEffect(() => {
        console.log('useEffect no dependency')
        return () => {
            console.log('useEffect no dependency cleanup')
        }
    })

    //Con dependencias vacias se ejecuta solo una vez
    useEffect(() => {
        console.log('useEffect dependency void')
        return () => {
            console.log('useEffect dependency void cleanup')
        }
    }, [])

    //Con dependencias se ejecuta cada vez que alguna de las dependencias cambia
    useEffect(() => {
        console.log('useEffect dependency counter2')
        return () => {
            console.log('useEffect dependency counter2 cleanup')
        }
    }, [counter2])





    return (
        <div>
            {console.log('return render')}
            <h1>Clicks c1: {counter1}</h1>
            <h2>Clicks c2: {counter2}</h2>
            <button onClick={() => setCounter1(counter1 + 1)}>
                Click c1
            </button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Click c2
            </button>

            
        </div>
    )
}

export default Lifecycle
