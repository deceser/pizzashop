const products = [
  {
    name: "special",
    id: 0,
    image: require("../assets/image/cheese.png"),
    title: "Cheese",
    special: 1,
    price: 4,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "special",
    id: 5,
    image: require("../assets/image/margarita.png"),
    title: "Margarita",
    special: 1,
    price: 35,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "special",
    id: 6,
    image: require("../assets/image/peproni.png"),
    title: "Pepperoni",
    special: 1,
    price: 45,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "special",
    id: 7,
    image: require("../assets/image/burger.png"),
    title: "Cheeseburger ",
    special: 1,
    price: 66,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  // -------------------------------------------------------------------------
  {
    name: "pizza",
    id: 1,
    image: require("../assets/image/cheese.png"),
    title: "Cheese",
    category: 0,
    price: 58,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "pizza",
    id: 2,
    image: require("../assets/image/peproni.png"),
    title: "Pepperoni",
    category: 0,
    price: 45,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "pizza",
    id: 3,
    image: require("../assets/image/margarita.png"),
    title: "Margarita",
    category: 0,
    price: 12,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "pizza",
    id: 4,
    image: require("../assets/image/burger.png"),
    title: "Cheeseburger",
    category: 0,
    price: 14,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "pizza",
    id: 20,
    image: require("../assets/image/burger.png"),
    title: "Cheeseburger",
    category: 0,
    price: 14,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "pizza",
    id: 21,
    image: require("../assets/image/peproni.png"),
    title: "Pepperoni",
    category: 0,
    price: 45,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "pizza",
    id: 22,
    image: require("../assets/image/cheese.png"),
    title: "Cheese",
    category: 0,
    price: 58,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "pizza",
    id: 23,
    image: require("../assets/image/burger.png"),
    title: "Cheeseburger",
    category: 0,
    price: 14,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },

  // ------------------------------------------------------------------------------

  {
    name: "wraps",
    id: 12,
    image: require("../assets/image/wraps1.png"),
    title: "Chicken Wrap",
    category: 1,
    price: 34,
    type: ["small", "default"],
    size: [],
  },

  // ---------------------------------------------------------------------------------

  {
    name: "salads",
    id: 8,
    image: require("../assets/image/salmon.png"),
    title: "Salmon and onion",
    category: 2,
    price: 12,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },
  {
    name: "salads",
    id: 9,
    image: require("../assets/image/green.png"),
    title: "Green salad",
    category: 2,
    price: 31,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },
  {
    name: "salads",
    id: 10,
    image: require("../assets/image/fish.png"),
    title: "Fish plate",
    category: 2,
    price: 23,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },
  {
    name: "salads",
    id: 11,
    image: require("../assets/image/meet.png"),
    title: "Meet salad",
    category: 2,
    price: 14,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },

  {
    name: "salads",
    id: 30,
    image: require("../assets/image/fish.png"),
    title: "Fish plate",
    category: 2,
    price: 23,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },
  {
    name: "salads",
    id: 31,
    image: require("../assets/image/meet.png"),
    title: "Meet salad",
    category: 2,
    price: 14,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },
  {
    name: "salads",
    id: 32,
    image: require("../assets/image/salmon.png"),
    title: "Salmon and onion",
    category: 2,
    price: 12,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },
  {
    name: "salads",
    id: 33,
    image: require("../assets/image/green.png"),
    title: "Green salad",
    category: 2,
    price: 31,
    type: ["0.5 lbs", "0.8 lbs"],
    size: ["bacon", "onion", "sause"],
  },
  // -----------------------------------------------------------------------------

  {
    name: "vegan",
    id: 13,
    image: require("../assets/image/vegan.png"),
    title: "Vegetables Grill",
    category: 3,
    price: 22,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
  {
    name: "vegan",
    id: 14,
    image: require("../assets/image/vegan1.png"),
    title: "Figs and Almond",
    category: 3,
    price: 11,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },

  // ---------------------------------------------------------------------------------

  {
    name: "drinks",
    id: 15,
    image: require("../assets/image/fanta.png"),
    title: "Fanta",
    category: 4,
    price: 13,
    type: ["0,3", "0,5"],
    size: [],
  },
  {
    name: "drinks",
    id: 16,
    image: require("../assets/image/sprite.png"),
    title: "Sprite",
    category: 4,
    price: 16,
    type: ["0,3", "0,5"],
    size: [],
  },

  // -------------------------------------------------------------------------------

  {
    name: "Deserts",
    id: 17,
    image: require("../assets/image/cheescake.png"),
    title: "Cheesecake Sneakers",
    category: 5,
    price: 2,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },

  // ------------------------------------------------------------------------------

  {
    name: "Grill",
    id: 18,
    image: require("../assets/image/grill.png"),
    title: "Potatoes Grill",
    category: 6,
    price: 6,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },

  // -----------------------------------------------------------------------------
  {
    name: "Seafood",
    id: 19,
    image: require("../assets/image/seafood.png"),
    title: "Dorado",
    category: 7,
    price: 123,
    type: ["tiny", "default"],
    size: ["10 inch", "12 inch", "13 inch"],
  },
];

export default products;
