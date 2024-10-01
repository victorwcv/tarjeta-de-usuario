import { useState } from "react";
import UserCard from "./components/user_card/UserCard";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <UserCard name="Victor Ccanchi" status="Active" />
      <UserCard name="John Doe" status="Inactive" />
    </div>
  );
}

export default App;
