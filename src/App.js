import './App.css';

function App() {

  const requestApi = async() => {
    const request = await fetch('/medalists.json', {
      headers: {
        Accept: 'application/json',
      },
    });
    const resolve = await request.json();
  }
  requestApi()
  return (
    <div>
      Teste
    </div>
  );
}

export default App;
