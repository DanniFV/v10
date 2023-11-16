import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='Matti.jpg' className="App-Matti" alt="Matti" />
        <img src='Hekla.JPG' className="App-Hekla" alt="Hekla" />
        <p>
          Spinny spinny blabla
        </p>
        <a
          className="App-link"
          href="http://www.leikjanet.is/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gefðu mér locationið þitt!
        </a>
      </header>
    </div>
  );
}

export default App;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


