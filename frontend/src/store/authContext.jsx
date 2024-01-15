import { createContext, useState } from 'react';
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext({
  token: null,
  user: null,
  featuresList: () => { },
  login: () => { },
  register: () => { },
  queryList: () => { },
  queryRequest: () => { },
  logout : () => {},
});

export default AuthContext;

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
  const [user, setUser] = useState(() => localStorage.getItem('token') ? jwtDecode(JSON.parse(localStorage.getItem('token')).access) : null);

  const login = async (username, password) => {
    const response = await fetch('http://127.0.0.1:8000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': username,
        'password': password,
      })
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(
        resData.message || 'Something went wrong, failed to send request.'
      );
    }
    const token = resData.token;
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
    setUser(jwtDecode(token.access));
  }

  const register = async (username, email, password) => {
    const response = await fetch('http://127.0.0.1:8000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': username,
        'email': email,
        'password': password,
      })
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(
        resData.message || 'Something went wrong, failed to send request.'
      );
    }
    return 'Registered successfully';
  }

  const featuresList = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/features', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(
        resData.message || 'Something went wrong, failed to send request.'
      );
    }
    return resData;
  }

  const queryRequest = async (featureId, query, queryimg, querypdf) => {
    let headers = {
      'Content-Type': 'application/json',
    }

    let data = {
      'feature': featureId,
      'query': query,
    }

    if (token) {
      headers = { ...headers, 'Authorization': `Bearer ${token.access}`, }
    }

    if (querypdf instanceof File) {
      data = { ...data, 'query_pdf': querypdf, }
    }

    if(queryimg instanceof Image){
      data = { ...data, 'query_image': queryimg, }
    }

    const response = await fetch('http://127.0.0.1:8000/api/query/create', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(
        resData.message || 'Something went wrong, failed to send request.'
      );
    }
    return resData;
  }

  const queryList = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/query/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access}`,
      },
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(
        resData.message || 'Something went wrong, failed to send request.'
      );
    }
    return resData;
  }
  
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  }

  const cxtValue = {
    user: user,
    token: token,
    login: login,
    register: register,
    featuresList: featuresList,
    queryList: queryList,
    queryRequest:queryRequest,
    logout: logout,
  }
  return (
    <AuthContext.Provider value={cxtValue}>
      {children}
    </AuthContext.Provider>
  );
}