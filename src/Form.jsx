import React, { useState } from 'react'

export default function Form() {
  const data = {name:"",email:"",password:""}
  const [inputData,setInputData] = useState(data)
  function handleData(e){
 setInputData({...inputData,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.prevenetDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
      alert("no data Found")
    }
    else{h1}
  }
  
  return (
    <form  onSubmit={handleSubmit}>
      <div>
        <h1>Registration from</h1>
      </div>
      <div>
        <input type="text" name='name' placeholder='Enter Your Name' value={inputData.name} onChange={handleEvent} />
      </div>
      <div>
        <input type="text" name='email' placeholder='Enter Your email' value={inputData.email} onChange={handleEvent}/>
      </div>
      <div>
        <input type="text" name='password' placeholder='Enter Your password' value={inputData.password} onChange={handleEvent}/>
      </div>
      <button>Submit</button>
    </form>
  )
}
