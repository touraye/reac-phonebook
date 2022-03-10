const Contacts = ( {data} ) => {  
  return (
		<ul>
			{ data.map((contact) => (
				<li>
					<p>
						{contact.firstName} {contact.lastName}
					</p>
					<p>{contact.primaryPhone}</p>
					<p>{contact.email}</p>
				</li>
			))}
    </ul>    
	)
}

export default Contacts