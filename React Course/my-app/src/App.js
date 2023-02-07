// import logo from './logo.svg';
import './App.css';
import Navbar from './Compoenents/Navbar';
import TextForm from './Compoenents/TextForm';



function App() {
  return (
    <>
      <Navbar  aboutText="About Us" contact="Contact Us"/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze below"/>
      </div>

   
    </>
  );
}

export default App;
