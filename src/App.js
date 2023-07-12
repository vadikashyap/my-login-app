import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./page/login";
import { useState } from "react";
import Register from "./page/Register";

function App() {
  const [page, setPage] = useState("login");
  const [userList, setUserList] = useState([
    { name: "test1", email: "test1@gmail.com", password: "123123" },
    { name: "test2", email: "test2@gmail.com", password: "123123" },
    { name: "test3", email: "test3@gmail.com", password: "123123" },
  ]);
  return (
    <div className="App">
      {page === "login" ? (
        <Login setPage={setPage} userList={userList} />
      ) : (
        <Register
          setPage={setPage}
          userList={userList}
          setUserList={setUserList}
        />
      )}
    </div>
  );
}

export default App;
