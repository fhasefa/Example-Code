import React from 'react'

function DefaultLayout(props) {
    return(
        <div>
            <h1>DEFAULT LAYOUT!</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout