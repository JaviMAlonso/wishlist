import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root')

// root es la raiz de la aplicacion que se monta en el div#root
const root = createRoot(container)

// renderiza algo en la raiz de la aplicacion
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
