import React from 'react';
import axios from 'axios';
import { navigate } from "gatsby"

class SignupLogin extends React.Component {

    // const login = () => {

    // }

    state = {


    }

    login(e) {
        e.preventDefault();
        // console.log(e.target.name.value);
        const formData = e.target;
        const email = formData.email.value
        const password = formData.password.value

        axios.post(`http://localhost:3000/api/user_token`, {
            "auth": {
                "email": email, 
                "password": password
            }
        })
        .then(function (response) {
            console.log(response.data);
            localStorage.setItem("htcUser", response.data.jwt);
            navigate(
                "/",
                { replace: true }
              )

        })
        .catch(function (error) {
            console.log(error);
        });
        

    }

    // AXIOS MASTERCLASS
    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //   axios({
    //     method: 'post',
    //     url: '/user/12345',
    //     data: {
    //       firstName: 'Fred',
    //       lastName: 'Flintstone'
    //     }
    //   });

    // axios.get(`http://localhost:3000/test`)
    // .then(res => {
    //     // const persons = res.data;
    //     // this.setState({ persons });
    //     console.log(res.data);
        
    // })


    

    render(){
        return(
            <div>
                <h1>Welcome to the Login Page</h1>

                <form onSubmit={this.login}>
                    <input type="text" name="email"/>
                    <input type="text" name="password"/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }


}
    // login () {
    //     const email = $("#email").val()
    //     const password = $("#password").val()
    //     const request = {"auth": {"email": email, "password": password}}
    //     console.log(request)
    //     $.ajax({
    //       url: "http://localhost:3000/api/user_token",
    //       type: "POST",
    //       data: request,
    //       dataType: "json",
    //       success: function (result) {
    //         console.log(result)
    //         localStorage.setItem("jwt", result.jwt)
    //       }
    //     })
    //   }

    //   getBananas() {
    //     let token = "Bearer " + localStorage.getItem("jwt")
    //     console.log(token)
    //     $.ajax({
    //       url: "http://localhost:3000/api/bananas",
    //       type: "GET",
    //       beforeSend: function(xhr){xhr.setRequestHeader('Authorization', token)},
    //       context: this, // Allows us to use this.setState inside success
    //       success: function (result) {
    //         console.log(result)
    //         this.setState({bananasReceived: JSON.stringify(result)})
    //       }
    //     })
    //   }

    // render(){
    //     return(
    //         <div>
    //             <h1>Signup or Login</h1>

    //             <form>
    //       <label htmlFor="email">Email: </label>
    //       <br />
    //       <input
    //         name="email"
    //         id="email"
    //         type="email"
    //       />
    //       <br /><br />
    //       <label htmlFor="password">Password:</label>
    //       <br />
    //       <input
    //         name="password"
    //         id="password"
    //         type="password"
    //       />
    //       </form>
    //       <br />
    //       <button
    //         onClick={this.login}
    //       >
    //           Login
    //       </button>
    //     <br />
    //     <button
    //       onClick={this.getBananas}
    //       style={{marginTop: "10vh"}}
    //       >
    //       Get Bananas
    //     </button>
    //     <p>{this.state.bananasReceived}</p>
                
    //         </div>
    //     )
    // }


export default SignupLogin;