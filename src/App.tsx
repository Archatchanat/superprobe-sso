import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Backendlayout from './Layout/Backendlayout';
import Station from './page/Station'
import StationDetails from './page/StationDetails';
import Map from './page/Map'
import Weather from './page/Weather';

function App() {
  document.title = 'React API TEST'
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Backendlayout/>}>
            <Route path="/" element={<Station/>}></Route>
            <Route path="/stationdetails" element={<StationDetails/>}></Route>
            <Route path="/map" element={<Map/>}></Route>
            <Route path="/weather" element={<Weather/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
