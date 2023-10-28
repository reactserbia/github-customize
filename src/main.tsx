import './styles/reset.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from './providers/layout1'
import { LoginGuard } from './providers/login-guard'

import { Home } from './routes/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Layout>
            <LoginGuard>
                <Home />
            </LoginGuard>
        </Layout>
    </React.StrictMode>
)
