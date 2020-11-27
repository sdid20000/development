import "./App.css";
import FilteredList from "./FilteredList";
import React, { Component } from "react";
import Cart from "./Cart.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  //Keyboards have a name, brand,
  //Whether they have a numpad, switch types, and a price
  productList = [
    {
      name: "Cherry G80-3000",
      brand: "Cherry",
      switches: ["Cherry MX Black", "Cherry MX Blue", "Cherry MX Brown"],
      numPad: true,
      price: 91.49,
      src: "images\\Cherry-G80-3000.jpg",
      desc:
        "The Cherry MX Board Silent is the result of two high class products:" +
        "a high end keyboard and innovative switching technology. Reliable like " +
        "the original, but quieter, making it ideal for the office space. That’s " +
        "the result when innovation meets history.",
    },
    {
      name: "Cherry MX Board 1.0",
      brand: "Cherry",
      switches: ["Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 99.99,
      src: "images\\Cherry-MX-Board-1.0.jpg",
      desc:
        "The CHERRY MX BOARD 1.0 TKL – for more space on your desk. The compact" +
        " high-performance keyboard in proven MX quality and numerous illumination " +
        "options (depending on model) guarantee gaming enjoyment. With laser-etched" +
        " key...",
    },
    {
      name: "Cherry MX Board 6.0",
      brand: "Cherry",
      switches: ["Cherry MX Red"],
      numPad: true,
      price: 197.99,
      src: "images\\Cherry-MX-Board-6.0.jpg",
      desc:
        "The CHERRY MX BOARD 6.0 RGB combines simple, elegant design, uncompromising" +
        " quality and the absolute precision of the CHERRY MX RGB switches with spectacular" +
        " illumination options. Full n-key rollover and anti-ghosting make it a winner both" +
        " for office use and gaming",
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
      desc:
        "The CHERRY MX BOARD 3.0 S is a high-performance gaming keyboard with a choice of " +
        "illumination, color and switch options. The stylish extruded aluminum housing integrates" +
        " the genuine CHERRY MX switches, designed for fast play with all the gaming features " +
        "you need to win.",
    },
    {
      name: "CM Storm Quick Fire Rapid-i",
      brand: "CM Storm",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: false,
      price: 133.99,
      src: "images\\CM-Storm-Quick-Fire-Rapid-i.jpg",
      desc:
        "Cooler Master's Quick Fire Rapid - the tenkeyless icon that sets the mechanical keyboard " +
        "community ablaze has evolved. The new, fully backlit Quick Fire Rapid-i is equipped with an " +
        "ARM processor that enables responsive illumination, trailing effects, and individual key " +
        "lighting profiles. Light ‘em Up!",
    },
    {
      name: "CM Storm Quick Fire XTi",
      brand: "CM Storm",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 143.99,
      src: "images\\CM-Storm-Quick-Fire-XTi.jpg",
      desc:
        "The Quick Fire XTi mechanical gaming keyboard by Cooler Master is the ultimate in minimal " +
        "design and sleek simplicity. Luxurious UV coated keys include a streamlined multicolor per-key " +
        "backlighting system built with 100% Authentic Cherry MX switches. Plug and play design ensures " +
        "color, backlighting modes, profiles and macros ...",
    },
    {
      name: "Corsair Gaming K70 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Blue", "Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 89.99,
      src: "images\\Corsair-Gaming-K70-RGB.jpg",
      desc:
        "The K70 LUX RGB has Cherry MX RGB Red switches backed by a lightweight aluminum chassis. " +
        "CUE enabled advanced lighting control and large font keycaps deliver dynamic, vibrant multi-color " +
        "backlighting",
    },
    {
      name: "Corsair Gaming K95 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Brown", "Cherry MX Red"],
      numPad: true,
      price: 199.99,
      src: "images\\corsair-gaming-k951.jpg",
      desc:
        "The Corsair Gaming K95 RGB mechanical gaming keyboard begins with the performance of the legendary " +
        "K95, and adds multicolor per-key backlighting for virtually unlimited customization. Every key is backed " +
        "with a Cherry MX RGB key switch for precise actuation and superior feel. 122 full key rollover and 100% " +
        "anti-ghosting...",
    },
    {
      name: "Corsair K100 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Speed"],
      numPad: true,
      price: 199.99,
      src: "images\\Corsair-K100-RGB.jpg",
      desc:
        "The incomparable CORSAIR K100 RGB Optical-Mechanical Gaming Keyboard combines stunning aluminum design, " +
        "per-key RGB lighting with powerful CORSAIR AXON Hyper-Processing Technology and CORSAIR OPX RGB keyswitches. " +
        "Compatible with CORSAIR iCUE.",
    },
    {
      name: "Corsair K68 RGB",
      brand: "Corsair",
      switches: ["Cherry MX Red"],
      numPad: false,
      price: 79.99,
      src: "images\\Corsair-K68-RGB.jpg",
      desc:
        "The CORSAIR K68 RGB ultra-durable mechanical keyboard combines vivid per-key RGB backlighting, up to IP32 " +
        "water and dust resistance and CHERRY® MX keyswitches, allowing you to play on, whatever happens",
    },
    {
      name: "Razer Black Widow Chroma",
      brand: "Razer",
      switches: ["Razer Green", "Razer Orange"],
      numPad: true,
      price: 84.99,
      src: "images\\razer-blackwidow-chroma.jpg",
      desc:
        "The Razer BlackWidow mechanical gaming keyboard was first launched in 2010 and quickly became " +
        "the most popular and highest selling gaming keyboard worldwide, making its mark as the primary " +
        "choice for esports athletes. Four years later, the Razer Mechanical Switch was introduced, " +
        "giving the Razer BlackWidow an even greater advantage with the world’s...",
    },
    {
      name: "Razer Black Widow Elite",
      brand: "Razer",
      switches: ["Razer Orange"],
      numPad: true,
      price: 129.99,
      src: "images\\Razer-BlackWidow-Elite.jpg",
      desc:
        "The Razer BlackWidow has always been the gold standard for gaming keyboards, and now we’ve taken " +
        "its components to the next level—an updated Razer™ Mechanical Switch and the new Multi-Function " +
        "Digital Dial. Meet the Razer BlackWidow Elite. Designed as the most complete mechanical gaming " +
        "keyboard in any arena. Featuring Razer Hypershift and Hybrid On-board and Cloud Memory...",
    },
    {
      name: "Razer Black Widow Ultimate 2016",
      brand: "Razer",
      switches: ["Razer Green", "Razer Orange"],
      numPad: true,
      price: 99.99,
      src: "images\\Razer-BlackWidow-Ultimate-2016.jpg",
      desc:
        "The Razer BlackWidow Ultimate features the all-new Razer Mechanical Switches which were designed " +
        "from the ground up to elevate the speed and responsiveness of the Razer BlackWidow gaming keyboard " +
        "beyond the capabilities of previous generation mechanical switches.",
    },
    {
      name: "Razer Black Widow V3 Tenkeyless",
      brand: "Razer",
      switches: ["Razer Green", "Razer Yellow"],
      numPad: false,
      price: 143.99,
      src: "images\\BlackWidow-V3-Tenkeyless.jpg",
      desc:
        "Mean performance in a leaner form—enter the Razer BlackWidow V3 Tenkeyless. Continuing an iconic " +
        "legacy, this compact gaming keyboard is armed with our world-renowned Razer™ Mechanical Switches " +
        "and powered by Razer Chroma™ RGB, for a level of precision and personalization beloved by gamers worldwide.",
    },
    {
      name: "Razer Black Widow X Chroma",
      brand: "Razer",
      switches: ["Razer Green"],
      numPad: true,
      price: 189.99,
      src: "images\\Razer-BlackWidow-X-Chroma-1.jpg",
      desc:
        "The BlackWidow X TE Chroma is the keyboard crafted specifically for esports. With tournament-grade " +
        "precision courtesy of Razer™ Mechanical Switches and a tenkeyless design packed in a compact layout—it’s " +
        "grab and go whenever your next match arises",
    },
  ];

  addItem = (item) => {
    console.log("HERE");
    const items = [...this.state.items, item];
    this.setState({
      items,
    });
  };

  render() {
    return (
      <div>
        <h1>The Keyboard Shop</h1>
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col">
              <FilteredList
                list={this.productList}
                addItem={this.addItem}
              ></FilteredList>
            </div>
            <div className="col">
              <Cart items={this.state.items}></Cart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
