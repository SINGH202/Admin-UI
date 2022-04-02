import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Elements } from './components/Elements';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Admin-ui</h1>
      {/* //Search-bar */}
      <SearchBar />
      {/* //Elements
      //footer */}
      <Elements/>
      <Footer/>
    </div>
  );
}

export default App;
