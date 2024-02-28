export default function Education() {
  return (
    <div class='information'>
      <label>School name: </label>
      <input type='text'></input>
      <label>Title of study: </label>
      <input type='text'></input>
      <p>Date of study</p>
      <label>From: </label>
      <input type='month' value='2020-02'></input>
      <label>To: </label>
      <input type='month' value='2024-02'></input>
      <button /*onClick={}*/>Save</button>
    </div>
  )
}