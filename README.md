# RotasDinamicasUsandoReact
Rotas Dinâmicas usando Rect, typescript e vite

### Passo a passo para rodar esse projeto localmente.

1. Configurar o Projeto  
Primeiro, vamos criar um novo projeto usando Vite com suporte a React e TypeScript.
```
npm create vite@latest my-react-app --template react-ts
cd my-react-app
npm install
```
2. Instalar Dependências  
Vamos instalar o React Router para gerenciar as rotas.
``` npm install react-router-dom ```

3. Configurar Rotas Dinâmicas  
Agora, vamos configurar as rotas dinâmicas no nosso projeto.
> src/main.tsx
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Post from './Post';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
```
> src/App.tsx
```
import React from 'react';
const App: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
export default App;
```
> src/Post.tsx
```
import React from 'react';
import { useParams } from 'react-router-dom';
const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h2>Post ID: {id}</h2>
    </div>
  );
};
export default Post;
```
4. Executar o Projeto  
Agora, você pode executar o projeto e testar as rotas dinâmicas.  
``` npm run dev ```
