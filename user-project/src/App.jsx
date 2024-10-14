import { useState } from 'react'
import axios from 'axios'
function App() {
 let [firstname, setfirstname] = useState("")
 let [lastname, setlastname] = useState("")
 let [email, setemail] = useState("")
 let [mobileNo, setmobileNo] = useState("")
 let [password, setpassword] = useState("")
 let [Users,setUsers]=useState([])
function summitdata(params) {
  firstname=document.getElementById("firstname").value
  setfirstname(firstname)
  lastname=document.getElementById("lastname").value
  setlastname(lastname)
  email=document.getElementById("email").value
  setemail(email)
  mobileNo=document.getElementById("mobileNo").value
  setmobileNo(mobileNo)
  password=document.getElementById("password").value
  setpassword(password)
  let data={
    firstname:firstname,
    lastname:lastname,
    email:email,
    mobileNo:mobileNo,
    password:password,

  }
  axios({
    url:'http://localhost:3000/add/user',
    method:'post',
    data:data
  }).then((data)=>{
    console.log(data)
    if (data.data.Users) {
      alert("data saved successfully")
      Users=data.data.Users
      setUsers(Users)
      
    }

  }).catch((err)=>{
    alert("somtjing went wrong..")
    console.log(err)
  })
}
  return (
    <>
      <h4>sign up</h4>
     <table>
      <tbody>
      <tr>
        <td>first name</td>
        <td><input type="text" id='firstname'/></td>
      </tr>
      <tr>
        <td>last name</td>
        <td><input type="text" id='lastname'/></td>
      </tr>
      <tr>
        <td>Email</td>
        <td><input type="text" id='email'/></td>
      </tr>
      <tr>
        <td>Moblie number</td>
        <td><input type="text" id='mobileNo'/></td>
      </tr>
      <tr>
        <td>password</td>
        <td><input type="password" id='password'/></td>
      </tr>
     
      </tbody>
     </table>
     <button onClick={summitdata}>summit</button>
    {Users.map((item)=>(
      <div>
        <p>password:{item.password}</p>
        <p>First name:{item.firstname}</p>
        <p>Last name:{item.lastname}</p>
        <p>Email:{item.email}</p>
        <p>Mobile no:{item.mobileNo}</p>
         <hr />
      </div>
    ))}
    </>
  )
}
export default App
