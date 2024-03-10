import { useState } from "react"

export default function Education() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({name: '', title: '', from: '2020-02', to: '2024-02'});
  if (edit) {
    return (
      <div className='education'>
        Education
        <label>School name: </label>
        <input
          type='text'
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
        />
        <label>Title of study: </label>
        <input
          type='text'
          value={data.title}
          onChange={(e) => setData({...data, title: e.target.value})}
        />
        <div className='date'>
          <p>Date of study</p>
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
    <div className='education'>
      Education
      <p>School name: <br /> {data.name}</p>
      <p>Title of study: <br /> {data.title}</p>
      <p>{`Date of study from: ${data.from}  to: ${data.to}`}</p>
      <button onClick={() => setEdit(true)}>
        Edit
      </button>
    </div>
  )
}