import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { lazy,Suspense} from "react";

const Home = lazy(() => import('../pages/Home'));
const Movies  = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails'));
const Loader = lazy(() => import("./Loader/Loader"));

export const App = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul className="home_page">
            <li className="page"><NavLink to="/">Home</NavLink></li>
            <li className="page"><NavLink to="/movies">Movies</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:moviesId/*" element={<MovieDetails />} />
            
          <Route path="*" element={<Navigate to='/'/>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}