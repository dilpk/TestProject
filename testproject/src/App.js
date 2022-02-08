import { LoginForm } from "./Component/Login";
import Todo1 from "./Component/Todo1.js";

function App() {
  const val = {
    userName: "Dilip",
    password: "Dilip1"
  }
  return (
    <div className="App">
      {/* <LoginForm inpVal = {val}/> */}
      {/* <Todo /> */}
      <Todo1 />
    </div>
  );
}

export default App;
