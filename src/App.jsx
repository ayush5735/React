import Header from "./Header";
import Footer from "./Footer";

function App() {

  const students = ["Ayush", "Rahul", "Amit", "Rohan"];

  return (
    <div>
      <Header names={students} />

      <Footer />
    </div>
  );
}

export default App;