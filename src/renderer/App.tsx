import './App.css';
import Dock from '../components/Dock/Dock';
import Windows from '../components/Windows/Windows';
import MenuBar from '../components/MenuBar/MenuBar';
import LogIn from 'components/LogIn/LogIn';

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
