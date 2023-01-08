import React,{useState} from 'react'

function App() {
  const [studentobject,setStudentobject]=useState([])
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")

  function btnFunc(){
    setStudentobject([...studentobject,{
      userName,
      password
    }])
  }
  function userFunc(e){
    setUserName(e.target.value)

  }
  function passFunc(e){
    setPassword(e.target.value)

  }
 
  return (
    <div>
      <div>
        Username <input type="text" value={userName} onChange={ userFunc } />
      </div>
      <div>
        Password <input type="password" value={password} onChange={ passFunc } />
      </div>
      <div>
        <button onClick={btnFunc}>click</button>
      </div>
     { console.log(studentobject)}
    </div>
  )
}

export default App