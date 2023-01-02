import { Button, ClickAwayListener } from '@mui/material'
import React, { useState } from 'react'
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'
import axios from 'axios'

function Keep({ id, title, desc, onDelete, handleBlur }) {
  const [isOpen, setOpen] = useState(false)
  const [keep, setKeep] = useState({
    title: title,
    description: desc
  })

  function handleClick() {
    setOpen(true)
    handleBlur(true)
  }

  function handleClickAway() {
    setOpen(false)
    handleBlur(false)
    submitEdit()
  }

  function handleChange(event) {
    const { name, value } = event.target
    console.log(`name: ${name}, value: ${value}`)
    setKeep(prevKeep => ({ ...prevKeep, [name]: value }))
    console.log(keep)
  }

  function submitEdit() {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/api/keep/${id}`, keep)
      .then(res => {
        // console.log(keep);
        setOpen(false)
        console.log(res.data.message)
      })
      .catch(err => {
        console.log('error could not update')
        console.log(err.message)
      })
  }

  const expandedCard = {
    position: 'fixed',
    top: '25vh',
    left: '28vw',
    transform: 'translateY(-50%)',
    background: '#fff',
    // box-shadow: 0 12px 28px 0 var(--light-pink-color-blur), 0 2px 4px 0 var(--light-pink-color), inset 0 0 0 1px var(--shadow-inset);
    // minHeight:"228px",
    minWidth: '240px',
    width: '600px',
    borderRadius: '7px',
    zIndex: '999',
    // position: 'absolute',
    // transform: 'translate(42px, 15px)',
    // backgroundColor: '#fff',
    // width: '600px',
    transition: 'top 1s, left 1s, transform 1s'
    // zIndex: "1",
    // filter: "brightness(1)"
  }
  return (
    <ClickAwayListener onClickAway={isOpen ? handleClickAway : () => { }}>
      <div className='parent-note-container'>
        <div
          className='note'
          onClick={() => {
            handleClick()
          }}
          style={isOpen ? expandedCard : null}
        >
          <div className='note-title'>
            <input
              value={keep.title}
              type='text'
              onChange={handleChange}
              name='title'
              className='note-title-h1'
              contentEditable={isOpen ? true : false}
            />
          </div>
          <div className='note-desc'>
            <input
              value={keep.description}
              onChange={handleChange}
              name='description'
              type='text'
              className='note-desc-p'
              contentEditable={isOpen ? true : false}
            />
          </div>
          <div className='update-options'>
            <div className='push-left'>
              <div className='delete-btn'>
                <DeleteButton id={id} onClick={onDelete} />
              </div>
              <div className='edit-btn'>
                <EditButton />
              </div>
            </div>
            <div
              style={
                !isOpen
                  ? { opacity: '0' }
                  : {
                    opacity: '100'
                  }
              }
              className='close-btn push-right'
            >
              <Button onClick={submitEdit} size='small'>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Keep
