import React from 'react'

const ReactButton = () => {

    const reactAlert = () => {
        window.alert('This the React component.')
    }

    return (
        <button onClick={reactAlert}>React</button>
    )
}

export default ReactButton
