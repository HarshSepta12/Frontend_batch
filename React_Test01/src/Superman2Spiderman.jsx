import React from 'react'
import { useState } from 'react'

const Superman2Spiderman = () => {
    const [name, setName] = useState("Superman")
    
    const changeName = () => {
        setName("Spiderman")
    }
    
    return (
        <>
            <h1>Name: {name}</h1>
            <button onClick={changeName}>Change Name</button>
        </>
    )
}

export default Superman2Spiderman
