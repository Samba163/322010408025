import logo from './logo.svg';
import './App.css';

function App() {
  const trains = [
    {
      name: 'Kachiguda',
      location: 'Banglore',
      source: 'Bnaglore',
      destination: 'Goa',
      timings: '5:00pm',
    },
    {
      name: 'Sathabdhi Express',
      location: 'Kashmir',
      source: 'Kanyakumari',
      destination: 'Kanyakumari',
      timings: '1:00pm',
    },
    // Add more train data as needed
  ];
 return (
    <div className="App">
      <div className="App-header">
        <img src="https://thumbs.dreamstime.com/b/steam-train-engine-beautiful-red-railway-passing-lush-green-british-forest-55435070.jpg" alt="Train Logo" className="train-logo" />
        <h1>Train_Booking</h1>
        <input type="text" placeholder="Search" />
      </div>
      <div className="App-content">
        {trains.map((train, index) => (
          <div className="train-card" key={index}>
            <h2>{train.name}</h2>
            <p>Location: {train.location}</p>
            <p>Source: {train.source}</p>
            <p>Destination: {train.destination}</p>
            <p>Timings: {train.timings}</p>
            <img src="https://5.imimg.com/data5/KK/KU/GLADMIN-31567807/train-ticket-booking-service-500x500.png" alt="Book Logo" className="book-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;