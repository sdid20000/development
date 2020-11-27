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
      src: "images\\Cherry-G80-3000.jpg",
    },
    {
      name: "Cherry MX Board 1.0",
      brand: "Cherry",
      switches: ["Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 99.99,
      src: "images\\Cherry-MX-Board-1.0.jpg",
    },
    {
      name: "Cherry MX Board 6.0",
      brand: "Cherry",
      switches: ["Cherry MX Red"],
      numPad: true,
      price: 197.99,
      src: "images\\Cherry-MX-Board-6.0.jpg",
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
      src: "images\\Cherry-MX-Board-3-0.jpg",
    },
    {
      name: "CM Storm Quick Fire Rapid-i",
      brand: "CM Storm",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: false,
      price: 133.99,
      src: "images\\CM-Storm-Quick-Fire-Rapid-i.jpg",
    },
    {
      name: "CM Storm Quick Fire XTi",
      brand: "CM Storm",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 143.99,
      src: "images\\CM-Storm-Quick-Fire-XTi.jpg",
    },
    {
      name: "Corsair Gaming K70 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 89.99,
      src: "images\\Corsair-Gaming-K70-RGB.jpg",
    },
    {
      name: "Corsair Gaming K95 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 199.99,
      src: "images\\corsair-gaming-k951.jpg",
    },
    {
      name: "Corsair K100 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Speed"],
      numPad: true,
      price: 199.99,
      src: "images\\Corsair-K100-RGB.jpg",
    },
    {
      name: "Corsair K68 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Red"],
      numPad: false,
      price: 79.99,
      src: "images\\Corsair-K68-RGB.jpg",
    },
    {
      name: "Razer Black Widow Chroma",
      brand: "Razer",
      switches: ["Razer Green", "Razer Orange"],
      numPad: true,
      price: 84.99,
      src: "images\\razer-blackwidow-chroma.jpg",
    },
    {
      name: "Razer Black Widow Elite",
      brand: "Razer",
      switches: ["Razer Orange"],
      numPad: true,
      price: 129.99,
      src: "images\\Razer-BlackWidow-Elite.jpg",
    },
    {
      name: "Razer Black Widow Ultimate 2016",
      brand: "Razer",
      switches: ["Razer Green", "Razer Orange"],
      numPad: true,
      price: 99.99,
      src: "images\\Razer-BlackWidow-Ultimate-2016.jpg",
    },
    {
      name: "Razer Black Widow V3 Tenkeyless",
      brand: "Razer",
      switches: ["Razer Green", "Razer Yellow"],
      numPad: false,
      price: 143.99,
      src: "images\\BlackWidow-V3-Tenkeyless.jpg",
    },
    {
      name: "Razer Black Widow X Chroma",
      brand: "Razer",
      switches: ["Razer Green"],
      numPad: true,
      price: 189.99,
      src: "images\\Razer-BlackWidow-X-Chroma-1.jpg",
    },
  ];

  return (
    <div>
      <FilteredList list={productList}></FilteredList>
    </div>
  );
}

export default App;
