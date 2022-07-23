import ArrayMap from './components/ArrayMap'
import ToggleButton from './components/ToggleButton'

function App() {
const arrayMap = ['hi', 'this is Anna', 'my phone number is 2674143213', 'i like swim', 'i am 35 years old', 'i like to eat']
  return (
    <div >
      <ArrayMap arrayMap={arrayMap}/>
      <ToggleButton/>
    </div>
  );
}

export default App;
