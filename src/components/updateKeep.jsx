import React, { useState } from "react";
import axios from "axios";

export function UpdateKeep({_id, handleClose, handleUpdate}){
    const [data, setData] = useState({title: "", description: ""});

    function handleChange(event){
        const {name, value} = event.target;
        setData((data) => ({...data, [name]: value}));
    }
    function handleSubmit(event){
        event.preventDefault();
        axios
            .put(`${process.env.REACT_APP_BACKEND_URL}/api/keep/${_id}`, data)
            .then((res) => {
                setData({title: "", description: ""});
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("error could not update");
                console.log(err.message);
            })
    }
    
    return (
        <form
            className="form-container"
            onSubmit={(e) => {
                handleSubmit(e);
                handleUpdate();
                handleClose();
            }}
        >
            <label htmlFor="title" className="label">
                Title
            </label>
            <input
                type="text"
                name="title"
                className="input"
                onChange={handleChange}
            />
            <label htmlFor="description" className="label">
                Description
            </label>
            <input
                type="text"
                name="description"
                className="input"
                onChange={handleChange}
            />
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    );
}