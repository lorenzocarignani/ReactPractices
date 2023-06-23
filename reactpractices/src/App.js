import ContainerProducts from "./Components/ContainerProducts";
import Books from "./Components/Books";
function App() {
  return (
    <div className="App">
      <div>
        <ContainerProducts />
        <hr />
        <Books />
        <hr />
      </div>
    </div>
  );
}

export default App;
