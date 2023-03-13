import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.fruits.map((fruit, index) => 
                    <li>
                        <a href={`/fruits/${index}`}><strong>{fruit.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/fruits/new">Add...</a>
        </div>
    )
}

export default Index