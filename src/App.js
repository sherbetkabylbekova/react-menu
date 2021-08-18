
import User from "./User";
import DecInc from "./DecInc";
import Forms from "./Forms";
import Catalog from "./Catalog";



function App() {
  return (
    <div className="App">
     <User name={'Katya'} job={'Manager'}/>
        <DecInc/>
        <Forms/>
        <Catalog />
    </div>
  );
}

export default App;
