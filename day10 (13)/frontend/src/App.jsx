import "./App.css";
import First from "./First";
import Second from "./Second";
import Third from "./third";

function App() {
  let uname5 = "books";
  let url5 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcVLwkWYXOuMW4NOLV7RPMzfUMNVLDrxRXA&s";
  
   let uname1 = "Hoodie";
   let url1 =
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2atleDnzBsmYv0wkKLosK0kWeIT17uaf7w&s";

  let uname2 = "Hoodie";
  let url2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2atleDnzBsmYv0wkKLosK0kWeIT17uaf7w&s";

  let uname3 = "Bag";
  let url3 =
    "https://images.jdmagicbox.com/quickquotes/images_main/sara-30-liters-polyester-black-school-bag-black-178207114-ksaft.jpg";

  return (
    <>
      <First username={uname5} userimgurl={url5}></First>
      <Second username={uname1} userimgurl={url1}></Second>
      <Second username={uname2} userimgurl={url2}></Second>
      <Second username={uname3} userimgurl={url3}></Second>
      <Second username={uname1} userimgurl={url1}></Second>
      <Second username={uname2} userimgurl={url2}></Second>
      <Second username={uname3} userimgurl={url3}></Second>
    </>
  );
}

export default App;
