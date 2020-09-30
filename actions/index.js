// import axios from 'axios'

// export const loginRequest = (payload) => ({
//   type: "LOGIN_REQUEST",
//   payload,
// });

// export const registerRequest = (payload) => ({
//   type: "REGISTER_REQUEST",
//   payload,
// });

// export const registerUser = (payload, redirectUrl) => ({
//   return (dispatch) => {
//     axios.post('', payload)
//     .then(({ data }) => dispatch(registerRequest(data)))
//     .then(() => { window.location.href = redirectUrl })
//     .catch( error => dispatch(setError(error)) )
//   }
// });

// export const loginUser = ({ email, password }, redirectUrl ) => ({
//   return (dispatch) => {
//     axios( 
//       url:'',
//       method: 'post',
//       auth: {
//         username: email,
//         password
//       } 
//     )
//     .then(({ data }) => {
//       document.cookie = `email = ${data.user.email}`
//       document.cookie = `name = ${data.user.name}`
//       document.cookie = `id = ${data.user.id}`
//       dispatch(loginRequest(data.user))
//     })
//     .then(() => { window.location.href = redirectUrl })
//     .catch( error => dispatch(setError(error)) )
//   }
// });

