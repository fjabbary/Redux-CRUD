import Exercises from "./components/Exercises";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";
import AddExercise from "./components/AddExercise";
import EditExercise from "./components/EditExercise";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Exercises />} />
          <Route path="/add/exercise" element={<AddExercise />} />
          <Route path="/edit/:id" element={<EditExercise />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
