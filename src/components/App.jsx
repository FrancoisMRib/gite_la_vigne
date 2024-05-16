// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
// import { BrowserRouter } from 'react-router-dom';

import { Accueil } from "./pages/Accueil";
import { Contact } from "./pages/Contact";
import { DecouvGite } from "./pages/DecouvGite";
import { DecReg } from "./pages/DecouvRegion";
import { LivreDor } from "./pages/LivreDor";
// import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
//const root = ReactDOM.createRoot(document.querySelector("#root"));
// const router = BrowserRouter([
//   {
//     path: '/',
//     element: <div>Page d'accueil</div>
//   },
//   {
//     path: '/blog',
//     element: <div>Blog</div>
//   }
// ])

export function App() {


  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* < Accueil /> */}
      {/* < Contact /> */}
      < DecReg />
      < LivreDor />
      {/* < DecouvGite /> */}
      {/* < DecReg /> */}
    </div>
    
    // Version avec le ROUTER
    //<RouterProvider router={router}/>
    // <div>
    //   <BrowserRouter>
    //   <div>
    //     <h1>Bienvenue sur mon application React</h1>

    //     {/* <nav>
    //       <ul>
    //         <li><Link to="/">Accueil</Link></li>
    //         <li><Link to="/contact">Contact</Link></li>
    //       </ul>
    //     </nav> */}

    //     <Routes>
    //       <Route path="/" element={<Accueil />} />
    //       <Route path="/contact" element={<Contact />} />

    //     </Routes>
    //   </div>
    // </BrowserRouter>
    // </div>


    // VERSION D'APRES GRAFIKART (2)
    // <Router>
    //   <div>
    //   Bienvenue sur le site du Gîte la Vigne !!
    //   <Switch>
    //     <Route exact path="/">
    //       <Accueil />
    //     </Route>
    //     <Route exact path="/contact">
    //       <Contact />
    //     </Route>
    //   </Switch>
    //   </div>
    // </Router>
    
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  );
}