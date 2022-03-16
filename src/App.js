import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/profile";
function App() {

  const handleName = (name) => alert(`this is ${name} speaking`);
  const data = {
    fullName: "Walid Sabri Sabri Walid",
    bio: "i am developper.\ni develop web apps.\nmy developper skills are developping.",
    profession: "not working at the moment",
    handleName,
  };
  const imgUrl = "https://memegenerator.net/img/instances/85240859.jpg";
  return (
    <div className="App">
      <Profile data={data}>{imgUrl}</Profile>
      <p><i>(PS: alert function not working with onClick event.</i></p>
      <p><i>Other functions worked fine)</i></p>
    </div>
  );
}

export default App;
