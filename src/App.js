import './App.css';
import MentorsList from './components/mentors-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='hackillinois-logo'>HACK ILLINOIS</h1>
      </header>
      <main>
        <MentorsList></MentorsList>
      </main>
    </div>
  );
}

export default App;
