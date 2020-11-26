import "./App.css";
import FilteredList from "./FilteredList";

function App() {
  //Keyboards have a name, brand,
  //Whether they have a numpad, switch types, and a price
  const productList = [
    {
      name: "Cherry G80-3000",
      brand: "Cherry",
      switches: ["Cherry MX Black", "Cherry MX Blue", "Cherry MX Brown"],
      numPad: true,
      price: 91.49,
    },
    {
      name: "Cherry MX Board 1.0",
      brand: "Cherry",
      switches: ["Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 99.99,
    },
    {
      name: "Cherry MX Board 6.0",
      brand: "Cherry",
      switches: ["Cherry MX Red"],
      numPad: true,
      price: 198.0,
    },
    {
      name: "Cherry MX Board 3.0",
      brand: "Cherry",
      switches: [
        "Cherry MX Red",
        "Cherry MX Black",
        "Cherry MX Blue",
        "Cherry MX Brown",
      ],
      numPad: true,
      price: 19.98,
    },
    {
      name: "CM Storm Quick Fire Rapid-i",
      brand: "CM Storm",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: false,
      price: 134.0,
    },
    {
      name: "CM Storm Quick Fire XTi",
      brand: "CM Storm",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 144.0,
    },
    {
      name: "Corsair Gaming K70 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 89.99,
    },
    {
      name: "Corsair Gaming K95 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 199.99,
    },
    {
      name: "Corsair K100 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Speed"],
      numPad: true,
      price: 199.99,
    },
    {
      name: "Corsair K68 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Red"],
      numPad: false,
      price: 79.99,
    },
    {
      name: "Razer Black Widow Chroma",
      brand: "Razer",
      switches: ["Razer Green", "Razer Orange"],
      numPad: true,
      price: 84.99,
    },
    {
      name: "Razer Black Widow Elite",
      brand: "Razer",
      switches: ["Razer Orange"],
      numPad: true,
      price: 129.99,
    },
    {
      name: "Razer Black Widow Ultimate 2016",
      brand: "Razer",
      switches: ["Razer Green", "Razer Orange"],
      numPad: true,
      price: 99.99,
    },
    {
      name: "Razer Black Widow V3 Tenkeyless",
      brand: "Razer",
      switches: ["Razer Green", "Razer Yellow"],
      numPad: false,
      price: 144.0,
    },
    {
      name: "Razer Black Widow X Chroma",
      brand: "Razer",
      switches: ["Razer Green"],
      numPad: true,
      price: 189.99,
    },
  ];

  return (
    <div>
      <FilteredList list={productList}></FilteredList>
    </div>
  );
}

export default App;
