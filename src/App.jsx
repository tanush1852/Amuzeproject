import './App.css';
import AuthPage from './Authpage.jsx'; // Correct import name
import Preloader from './Preloader.jsx';
import { Route, Routes } from 'react-router';
import Search from './Search.jsx';
import "./index.jsx"

function App() {
  return (
    <div className="App">
      {/* <Route>
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Route> */ }

    <Routes>
    <Route path='/' element={<AuthPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/preloader' element={<Preloader />} />

    </Routes>
    </div>
  );
}

export default App;