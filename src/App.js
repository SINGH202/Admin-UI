import './App.css';
import { SearchBar } from './components/SearchBar';
import { Elements } from './components/Elements';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Elements/>
      <Footer/>
    </div>
  );
}

export default App;
