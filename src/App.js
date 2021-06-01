import logo from './logo.svg';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Article
          title={'props 見出し用だよ'}
          content={'props 内容用だよ'}
        />
      </header>
    </div>
  );
}

export default App;
