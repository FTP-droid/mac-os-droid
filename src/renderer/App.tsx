import './App.css';
import LogIn from 'components/LogIn/LogIn';
import Dock from '../components/Dock/Dock';
import Windows from '../components/Windows/Windows';
import MenuBar from '../components/MenuBar/MenuBar';

export default function App() {
  return (
    <div className="container">
      <MenuBar />
      <Windows />
      <Dock />
      <LogIn />
    </div>
  );
}
