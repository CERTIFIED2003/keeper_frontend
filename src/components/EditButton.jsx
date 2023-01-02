import React from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


function EditButton(props){
    return (
        <div>
            <IconButton
                onClick={() =>{
                    props.onClick(props.id)
                }}
            ><EditIcon /></IconButton>
        </div>
    );
};
export default EditButton;