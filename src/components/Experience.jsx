import { useState } from "react"

export default function Experience() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({name: '', position: '', responsibilities: '', from: '2020-02', to: '2024-02'});
  if (edit) {
    return (
      <div className='experience'>
        Working experience
        <label>Company name: </label>
        <input 
          type='text'
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
        />
        <label>Position title: </label>
        <input 
          type='text'
          value={data.position}
          onChange={(e) => setData({...data, position: e.target.value})}
        />
        <label>Main responsibilities: </label>
        <textarea
          value={data.responsibilities}
          onChange={(e) => setData({...data, responsibilities: e.target.value})}
        />
        <div className='date'>
          <p>Date of employment</p>
          <label>From: </label>
          <input 
            type='month'
            value={data.from}
            onChange={(e) => setData({...data, from: e.target.value})}
          />
          <label>To: </label>
          <input 
            type='month'
            value={data.to}
            onChange={(e) => setData({...data, to: e.target.value})} 
          />
        </div>
        <button onClick={() => setEdit(false)}>
          Save
        </button>
      </div>
    )
  } else return (
    <div className='experience'>
      Working experience
      <p>Company name:: <br /> {data.name}</p>
      <p>Position title: <br /> {data.position}</p>
      <p>Main responsibilities: <br /> {data.responsibilities}</p>
      <p>{`Date of employment from: ${data.from} to: ${data.to}`}</p>
      <button onClick={() => setEdit(true)}>
        Edit
      </button>
    </div>
  )
}