// 'use client'

// import { useToast } from '@chakra-ui/react'

// import React from 'react'
// import { useState } from 'react'

// const ApiTest = () => {

//   const toast = useToast()

//   const [ getForm, setGetForm ] = useState({
//     username: '', 
//     password: ''
//   })

//   const [ updateForm, setUpdateForm ] = useState({
//     username: '', 
//     password: '',
//     newPassword: ''
//   })

//   const onChangeGetForm = (e) => {
    
//     setGetForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value

//     }))
//   }

//   const onChangeUpdateForm = (e) => {
    
//     setUpdateForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value

//     }))
//   }


//   async function registerAdmin(e) {
//     e.preventDefault()
//     const res = await fetch('/api/admin/register', {
//       method: 'POST',
//       body: JSON.stringify(getForm)
//     })
//   }

//   async function getAdmin(e) {
//     e.preventDefault()

//     const response = await fetch('/api/admin',{
//       method: 'POST',
//       body: JSON.stringify(getForm.password)
//     })

//     const data = response.ok ? await response.json() : await response.text()

//     console.log(data)

//     return data
//   }

//   async function updateAdmin(e) {
//     e.preventDefault()

//     const response = await fetch('api/admin/update', {
//       method: 'PATCH',
//       body: JSON.stringify(updateForm)
//     })

//     // const data = response.ok ? await response.json() : await response.text()
//     const data = await response.text()

//     console.log(data)

//     return data
//   }

//   return (
//     <>
//       <form>
//         <label htmlFor='username'>username</label>
//         <input id='username' type='text' name='username' defaultValue={getForm.username} onChange={onChangeGetForm}/>
//         <br/>
//         <label htmlFor='password'>password</label>
//         <input id='password' type='text' name='password' defaultValue={getForm.password} onChange={onChangeGetForm}/>

//         <button type='submit' onClick={registerAdmin}>Submit</button>
//       </form>
      
//       <br/>
//       <button onClick={getAdmin}>Get Admin</button>
//       <br/>

//       <form>
//         <label htmlFor='updateUsername'>username</label>
//         <input id='updateUsername' type='text' name='username' defaultValue={updateForm.username} onChange={onChangeUpdateForm}/>
//         <br/>
//         <label htmlFor='updatePassword1'>password1</label>
//         <input id='updatePassword1' type='text' name='password' defaultValue={updateForm.password} onChange={onChangeUpdateForm}/>
//         <br/>
//         <label htmlFor='updatePassword2'>password2</label>
//         <input id='updatePassword2' type='text' name='newPassword' defaultValue={updateForm.newPassword} onChange={onChangeUpdateForm}/>

//         <button type='submit' onClick={updateAdmin}>Submit</button>
//       </form>


//     </>
//   )
// }

// export default ApiTest