import { useSelector, useDispatch } from "react-redux";
import { changeUsersName } from "./redux/actions/changeUsersName";
import { changeUsersAge } from "./redux/actions/changeUsersAge";
import "./App.css";
import { useState } from "react";

function App() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.name);

  return (
    <div className="App">
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <hr></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        ></input>
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Change age"
        ></input>
        <input type="submit" value="Change user details" />
      </form>
    </div>
  );
}

export default App;
