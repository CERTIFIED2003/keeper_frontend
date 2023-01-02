import React from "react";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

function EmptyKeep(){
    return (
        <div className="empty-msg-container">
        <div className="svg-container">
            <LightbulbOutlinedIcon 
                sx={{
                    backgroundSize: "120 120",
                    height: 120,
                    opacity: .1,
                    width: 120,
                    color: "#202124"
                }}
            />
        </div>
        <div className="empty-note"><p>Notes you add appear here</p></div>
        </div>
    );
}
export default EmptyKeep;