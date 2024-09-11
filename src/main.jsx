import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'


{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home/>},
      {path:'/filmes', element: <MovieListPage/>},
      {path:'/filmes/:id', element:<MovieDetailPage/>},
      {path:'/listagenero', element: <MoviesByGenrePage/>},
      {path:'/listafilmes/:detalhesfilme', element: <MovieListPage/>},
  
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
