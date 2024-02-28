export default function Experience() {
  return (
    <div class='information'>
      <label>Company name: </label>
      <input type='text'></input>
      <label>Position title: </label>
      <input type='text'></input>
      <label>Main responsibilities</label>
      <textarea></textarea>
      <p>Date of employment</p>
      <label>From: </label>
      <input type='month' value='2020-02'></input>
      <label>To: </label>
      <input type='month' value='2024-02'></input>
      <button /*onClick={}*/>Save</button>
    </div>
  )
}