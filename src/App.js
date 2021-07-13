import './App.css';
import FormattedTable from './table.js'
import Header from './header.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <div className="imageContainer">
        <img className="notchImg" alt="Notch Logo" src={"https://storage.googleapis.com/chefhero-storage-release/interview/logo.svg"}/>
      </div>
      <main>
       <div>
        <div className="headerContainer">
          <Header />
        </div>
        <FormattedTable />
       </div>
      </main>
    </div>
  );
}

export default App;
