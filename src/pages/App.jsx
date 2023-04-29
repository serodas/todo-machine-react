import AppUI from '../containers/AppUI';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/App.css';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <AppUI />
    </AppContext.Provider>
  );
}

export default App;
