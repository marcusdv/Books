import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    // Provider encapsula todos os componentes, disponibilizando a eles o objeto que em ./context/books
    // que pode conter states, funções, etc.  Evitando que tenha que passar tudo por props um a um.
    <Provider>
        <App />
    </Provider>
)
