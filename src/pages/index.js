import React from "react";
import Link from 'gatsby-link';
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { isLoggedIn } from '../services/auth'
// import { graphql } from "gatsby";

//   { localStorage.getItem('jwt') ? <p>Hello, you're signed in</p> : <p>Please sign in</p>} 

// export default ({ data }) => (
// const hello = false

// const [key, setKey] = useState(undefined)

// useEffect(() => {
//   setKey(localStorage.getItem('token'))
// }, [])
export default () => (

    <Layout>

        <div style={{ color: "tomato"}}>

            <div>Hello world! Yayy!</div>
            <p>this is a paragraph</p>

            
            <Link to="/login/">Signup or Login</Link>
            <br />
            <br />

            {/* {isLoggedIn() ? (
          <a
            href="/"
            // onClick={event => {
            //   event.preventDefault()
            //   logout(() => navigate(`/`))
            // }}
          >
            Logout
          </a>
        ) : null} */}

        {
            isLoggedIn()
            ?
            <p>You are officially logged in</p>
            :
            <p>You are not logged in</p>
        }


        </div>
    </Layout>
);


// GraphQL Query
// export const query = graphql`
//     query MyFilesQuery {
//         allFile {
//             edges {
//                 node {
//                     relativePath
//                     prettySize
//                     extension
//                     birthTime( fromNow: true )
//                 }
//             }
//         }
//     }
// `
