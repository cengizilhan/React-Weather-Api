import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
   <div>
     <WeatherProvider>
     <Container></Container>
     </WeatherProvider>
   </div>
  );
}

export default App;
