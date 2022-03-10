import React from 'react'
import Avatar from '../Avatar/Avatar'
import { BsPencilSquare } from 'react-icons'
import { FaSun } from 'react-icons/fa'
import edit from '../../../assets/images/edit-regular.svg'
import del from '../../../assets/images/times-solid.svg'

const Contact = ( { person } ) => {
  
  return (
		<li className='contact__list'>
			<div className='contact__info'>
				<Avatar person={person} />
				<div>
					<span className='contact__name'>{person.firstName}</span>{' '}
					<span className='contact__name'>{person.lastName}</span>
					<div className='contact__number'>
						<span>{person.primaryPhone}</span>
					</div>
				</div>
			</div>
			<div>
        <div className='contact__action'>
          <span>

						<img className='icon' src={edit} alt='edit' />
						<img className='icon' src={del} alt='delete'  />					
          </span>
				</div>
				{person.email}
			</div>
		</li>
	)
}

export default Contact