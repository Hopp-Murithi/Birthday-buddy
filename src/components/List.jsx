import React from 'react'
import Usercard from './Usercard'

const List = ({people}) => {
  return (
    people.map((person)=>{
        return <Usercard key={person.uid} {...person}/>
    })
  )
}

export default List