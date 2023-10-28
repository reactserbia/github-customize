import './reset.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from './providers/Layout'

// import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Layout>{/* <App /> */}</Layout>
    </React.StrictMode>
)
