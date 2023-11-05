import './styles/reset.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './providers/layout'

import { Home, Login } from './routes'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'app',
        element: (
            <div>
                <p>WELCOME!</p>
            </div>
        )
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    </React.StrictMode>
)
