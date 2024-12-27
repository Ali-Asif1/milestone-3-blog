
import React from 'react'

interface Props{
    task:string
}

const ShowComments = ({task}: Props) => {
  return (
    <div>{task}</div>
  )
}

export default ShowComments
