import './styles/reset.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './providers/layout'

import { Home } from './routes/home'
import { GitHubLogin } from './routes/github-login'
import { LinkedInLogin } from './routes/linkedin-login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'app',
        children: [
            {
                path: 'login',
                children: [
                    {
                        path: 'github',
                        element: <GitHubLogin />
                    },
                    {
                        path: 'linkedin',
                        element: <LinkedInLogin />
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Layout>
            <RouterProvider router={router} />
            {/* <LoginGuard>
                <Home />
            </LoginGuard> */}
        </Layout>
    </React.StrictMode>
)
