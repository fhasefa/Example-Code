import React from 'react'

function Edit(props) {
    return ( 
        <div>
            <h1>Edit Fruit</h1>
            <form action={`/fruits/${props.fruit._id}?_method=PUT`} method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" value={props.fruit.name} /><br /><br />

                <label htmlFor="clr">Color:</label><br />
                <input type="text" id="clr" name="color" value={props.fruit.color} /><br /><br />

                <label htmlFor="rdy">Ready To Eat:</label>
                <input type="checkbox" id="rdy" name="readyToEat" defaultChecked={props.fruit.readyToEat} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Edit;