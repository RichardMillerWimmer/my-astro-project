import React from 'react'

const ReactButton = (): JSX.Element => {

    const reactAlert = () => {
        window.alert('This is the React component.')
    }

    return (
        <button onClick={reactAlert}>React</button>
    )
}

export default ReactButton
