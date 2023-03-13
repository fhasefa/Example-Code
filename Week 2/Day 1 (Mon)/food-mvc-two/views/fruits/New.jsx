import React from 'react'

function New() {
    return ( 
        <div>
            <h1>New Fruit</h1>
            <form action="/fruits" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="clr">Color:</label><br />
                <input type="text" id="clr" name="color" /><br /><br />

                <label htmlFor="rdy">Ready To Eat:</label>
                <input type="checkbox" id="rdy" name="readyToEat" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;