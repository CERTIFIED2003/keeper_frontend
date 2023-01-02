// Importing all the packages and files
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CreateKeep } from './createKeep'
import KeepCard from './KeepCard'
import EmptyNotes from './EmptyKeep'
import Header from './Header'
import Footer from './Footer'

export function ShowKeepList () {
  const [keeps, setKeeps] = useState([])
  const [isBlured, setBlured] = useState(false)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/keep`)
      .then(res => {
        setKeeps(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  function handleDelete (id) {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/keep/${id}`)
    setKeeps(data => {
      return data.filter(keep => keep._id !== id)
    })
  }

  function updateKeep () {
    setKeeps(keeps => [...keeps])
  }

  function showNotes (note, index) {
    const { title, description } = note
    return (
      <KeepCard
        key={note._id}
        id={note._id}
        title={title}
        desc={description}
        onDelete={handleDelete}
        handleBlur={handleBlur}
      />
    )
  }

  function handleBlur(shouldBlur){
      setBlured(shouldBlur);
  }
  console.log("is blured: ", isBlured);

  return (
    <div
      className='root-container'
    //   style={{ filter: `brightness(${isBlured ? 0.75 : 1})`, zIndex: '9999' }}
    >
    <div className={isBlured? "blur": ""}>
      <Header />
      <CreateKeep onAdd={updateKeep} />
      <div >
        {keeps.length === 0 ? (
          <EmptyNotes />
        ) : (
          <div className='notes-container'>{keeps.map(showNotes)}</div>
        )}
      </div>
      <Footer />
      </div>
    </div>
  )
}
