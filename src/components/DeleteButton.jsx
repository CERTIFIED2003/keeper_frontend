import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function DeleteButton(props){
    return (
        <div>
            <IconButton
                onClick={() =>{
                    props.onClick(props.id)
                }}
            ><DeleteIcon /></IconButton>
        </div>
    );
};
export default DeleteButton;