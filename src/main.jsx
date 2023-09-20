import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register.jsx'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />} path="/">
			<Route element={<Home />} path="/" index />
			<Route element={<Login />} path="/login" />
			<Route element={<Register />} path="/register" />
		</Route>
	)
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
