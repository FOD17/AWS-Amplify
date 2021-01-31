import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Page</h1>
      <AmplifySignOut />
    </div>
  );
}

export default App;
