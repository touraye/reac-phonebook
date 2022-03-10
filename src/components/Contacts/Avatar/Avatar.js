import React from 'react'
import firstName from '../../../utils/helper'

const firstLetter = (name) => {
	return name.substr(0, 1)
}

const Avatar = ( { person } ) => {
  return (
		<div className='contact__avatar'>
			{firstLetter(person.firstName)} {firstLetter(person.lastName)}
		</div>
	)
}

export default Avatar