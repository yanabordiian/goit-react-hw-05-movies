import { NavLink, Routes, Route } from 'react-router-dom';


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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={Movies}/>
        </Routes>
      </main>
    </div>
  )
}