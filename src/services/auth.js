export const isBrowser = () => typeof window !== "undefined"

// export const checkLoggedIn = () => {

//     isBrowser()
// }

export const getUser = () =>
//   isBrowser() && window.localStorage.getItem("htcUser")
//     ? JSON.parse(window.localStorage.getItem("htcUser"))
//     : {}
  isBrowser() && window.localStorage.getItem("htcUser")
    ? window.localStorage.getItem("htcUser")
    : null

const setUser = user =>
  window.localStorage.setItem("htcUser", JSON.stringify(user))

// export const handleLogin = ({ username, password }) => {
//   if (username === `john` && password === `pass`) {
//     return setUser({
//       username: `john`,
//       name: `Johnny`,
//       email: `johnny@example.org`,
//     })
//   }

//   return false
// }

export const isLoggedIn = () => {
  const user = getUser()

//   return !!user.username
console.log(`user is: ${user}`);

  return !!user
}

// export const logout = callback => {
//   setUser({})
//   callback()
// }