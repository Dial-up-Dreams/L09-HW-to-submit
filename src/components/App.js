import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import Session from "./Session";
import Header from "./Header";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
          <Route path=":sessionId" element={<Session />}/>
          </Route>
          <Route index element={<h3>Select a category from above</h3>}/>
        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="confirmed" element={<Confirmation />}/>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
