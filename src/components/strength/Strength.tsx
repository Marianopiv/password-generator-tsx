import React from 'react'

type Props = {item:string,classColor:string}

const Strength = ({item,classColor}:Props) => {
  return (
    <p className={classColor}>{item}</p>
  )
}

export default Strength