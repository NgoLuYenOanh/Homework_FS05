import "./App.css";
import { List } from "./components/list";

const App = () => {
  return (
    <>
      <form action="">
        <div className="input">
          <input type="text" id="input" placeholder="What do you need to do?" />
          <label htmlFor="input" className="add-to-do">
            ADD
          </label>
        </div>
        <List />
      </form>
    </>
  );
};

export default App;
