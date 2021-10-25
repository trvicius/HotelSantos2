import React, { useEffect, useState } from "react"
import LoginPage from "./LoginPage"
import { Route, Redirect } from "react-router-dom";
import api from "./services/api"


const ProtectedRoute = ({ component: Component, ...props }) => {

	const token = localStorage.getItem("hs:token")
	const [authorized, setAuthorized] = useState(false)
  const [loading, setLoading] = useState(true);
      
	const checkAuthentication = async (token) => {
    try {
    const res = await api.get("/users", { headers: { "Authorization": "Bearer " + token } })
      setAuthorized(res.status == 200)
    } catch (err) {
      setAuthorized(false)
    }
    setLoading(false)
}

  useEffect(() => {
    if (!authorized) {
        checkAuthentication(token);
    }
  }, []);

  if (loading) return null
  
 return <Route {...props} render={props => authorized ? <Component {...props} /> : <Redirect to="/" />} />
}

export default ProtectedRoute