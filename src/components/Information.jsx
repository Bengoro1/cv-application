import {useState} from 'react';

export default function Information() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({name: '', email: '', phone: '', adress: ''});
  if (edit) { 
    return (
      <div className='information'>
        Personal information
        <label>Name: </label>
        <input 
          type='text'
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
        />
        <label>E-mail: </label>
        <input 
          type='email'
          value={data.email}
          onChange={(e) => setData({...data, email: e.target.value})}
        />
        <label>Mobile Number: </label>
        <input
          type='tel'
          value={data.phone}
          onChange={(e) => setData({...data, phone: e.target.value})}
        />
        <label>Residence Adress: </label>
        <input
          type='text'
          value={data.adress}
          onChange={(e) => setData({...data, adress: e.target.value})}
        />
        <button onClick={() => setEdit(false)}>
          Save
        </button>
      </div>
    )
  } else return (
    <div className='information'>
      Personal information
      <p>Name: <br /> {data.name}</p>
      <p>E-mail: <br /> {data.email}</p>
      <p>Mobile Number: <br /> {data.phone}</p>
      <p>Residence Adress: <br /> {data.adress}</p>
      <button onClick={() => setEdit(true)}>
        Edit
      </button>
    </div>
  )
}