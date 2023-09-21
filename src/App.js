import './App.css';
import { Content } from './Content';
import { Header } from './components/Header';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Redirect from="/" to="/inicial" />
      <Content />
    </div>
  );
}

export default App;
