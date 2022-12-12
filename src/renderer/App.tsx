import './App.css';
import Dock from 'components/Dock/Dock';
import MenuBar from '../components/MenuBar/MenuBar';

export default function App() {
  return (
    <div className="container">
      <MenuBar />
      <Dock />
    </div>
  );
}
