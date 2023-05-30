import './App.css';
import Ninja from './components/Ninjas';

function App() {
  return (
    <div className="App">

      <div className="ninja">

        <div className="card">

          <Ninja 
          firstName= {"Matthew"} 
          lastName= {"York"} 
          age= {24} 
          hair= {"Hazel"} />
        </div>

        <div className="card">

          <Ninja 
                firstName= {"Sarah"} 
                lastName= {"Tout"} 
                age= {22} 
                hair= {"Black"} />
        </div>

        <div className="card">

          <Ninja 
                firstName= {"May"} 
                lastName= {"Ford"} 
                age= {16} 
                hair= {"Blonde"} />
        </div>

        <div className="card">

          <Ninja 
                      firstName= {"Owen"} 
                      lastName= {"Jade"} 
                      age= {19} 
                      hair= {"Brown"} />
        </div>
        
      </div>

    </div>
  );
}

export default App;
