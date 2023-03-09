import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.fruit.name}</strong> {props.fruit.readyToEat ? 'is ready to eat' : 'is NOT ready to eat'}</p>
            <p>It's color is {props.fruit.color}</p>
            <a href="/fruits">Back</a>
        </div>
    )
}

export default Show;