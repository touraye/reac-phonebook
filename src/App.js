import Contacts from './components/Contacts/Contacts'

const App = () => {		

	//static data
const data = [
	{
		id: 1,
		firstName: 'alieu',
		lastName: 'saidy',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 2,
		firstName: 'mariama',
		lastName: 'saidy',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 3,
		firstName: 'fatoumatta',
		lastName: 'touray',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 4,
		firstName: 'ice',
		lastName: 'man',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 5,
		firstName: 'rock',
		lastName: 'man',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 6,
		firstName: 'teller',
		lastName: 'man',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 7,
		firstName: 'hard',
		lastName: 'man',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 8,
		firstName: 'fatoumatta',
		lastName: 'touray',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
	{
		id: 9,
		firstName: 'fatoumatta',
		lastName: 'touray',
		primaryPhone: '2309942',
		secondaryPhone: '',
		email: 'asaidy@gmail.com',
		address: 'nema sukuta, WCR',
	},
]

	

  return (
		<div className='contact'>
			<h1>Phonebook</h1>		
			<Contacts data={data} />
		</div>
	)
}

export default App
