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

import Contact from './screens/Contact'
import Home from './screens/Home'
import Register from './screens/Register'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />} path="/">
			<Route element={<Home />} path="/" index />
			<Route element={<Contact />} path="/contact" />
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
