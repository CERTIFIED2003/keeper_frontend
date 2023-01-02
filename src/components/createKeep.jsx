import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddButton from './AddButton'
import TitleInput from './TitleInput.jsx'
import ClickAwayListener from '@mui/base/ClickAwayListener';

export function CreateKeep(props){
    const [isExpanded, setExpanded] = useState(false)
    const [keep, setKeep] = useState({
        title: '',
        description: ''
      })


      function handleChange (event) {
        const { name, value } = event.target
        setKeep(prevValue => {
          return {
            ...prevValue,
            [name]: value
          }
        })
      }
    
      function expand () {
        setExpanded(true);
      }
      function shrink(){
        setExpanded(false);
      }

    function handleSubmit(e) {
        console.log(keep);
        e.preventDefault();
        axios
            // .post("http://localhost:8000/api/keep", keep)
            .post(`${process.env.REACT_APP_BACKEND_URL}/api/keep`, keep)
            .then((res) => {
                console.log(res.data.message);
                setKeep({title: "", description: ""});
                shrink();
            })
            .catch((err) => {
                console.log("error could not create");
                console.log(err.message);
            });
    }

    
    return (
        <ClickAwayListener onClickAway={shrink}>
    <div className='creator-container'>
      <form onSubmit={handleSubmit}>
          {isExpanded && (
            <TitleInput
              placeholder='Title'
              name='title'
              title={keep.title}
              handleChange={handleChange}
            />
          )}
          <textarea
            className='creator-input input-desc'
            placeholder='Take a note...'
            name='description'
            value={keep.description}
            onChange={handleChange}
            rows={isExpanded ? 4 : 1}
            onClick={expand}
          />
          {isExpanded && (
            <AddButton
              expand={isExpanded}
            />
          )}
      </form>
    </div>
    </ClickAwayListener>
    );
}


// "@mui/icons-material": "^5.11.0",
// "@mui/material": "^5.11.2",