import axios from "axios";

const state = {
  products: [
    {
      id: 41,
      title: "Tissue Paper Box",
      description:
        "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
      category: "groceries",
      price: 2.49,
      discountPercentage: 13.28,
      rating: 2.69,
      stock: 86,
      tags: ["household essentials"],
      sku: "GRO-BRD-TIS-041",
      weight: 1,
      dimensions: {
        width: 18.75,
        height: 17.58,
        depth: 12.43,
      },
      warrantyInformation: "No warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 1,
          comment: "Not as described!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Ariana Ross",
          reviewerEmail: "ariana.ross@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Fast shipping!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Carter Baker",
          reviewerEmail: "carter.baker@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Penelope Harper",
          reviewerEmail: "penelope.harper@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 44,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9446468291745",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/2.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
    },
    {
      id: 42,
      title: "Water",
      description:
        "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
      category: "groceries",
      price: 0.99,
      discountPercentage: 14.92,
      rating: 4.96,
      stock: 53,
      tags: ["beverages"],
      sku: "GRO-BRD-WAT-042",
      weight: 4,
      dimensions: {
        width: 18.43,
        height: 7.4,
        depth: 17.79,
      },
      warrantyInformation: "3 months warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Jonathan Pierce",
          reviewerEmail: "jonathan.pierce@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Would not recommend!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Grayson Coleman",
          reviewerEmail: "grayson.coleman@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Not as described!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Ethan Fletcher",
          reviewerEmail: "ethan.fletcher@x.dummyjson.com",
        },
      ],
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 28,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "2409829645213",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/groceries/water/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
    },
    {
      id: 43,
      title: "Decoration Swing",
      description:
        "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
      category: "home-decoration",
      price: 59.99,
      discountPercentage: 10.41,
      rating: 3.16,
      stock: 47,
      tags: ["home decor", "swing"],
      sku: "HOM-BRD-DEC-043",
      weight: 4,
      dimensions: {
        width: 23.84,
        height: 15.19,
        depth: 26.05,
      },
      warrantyInformation: "1 week warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 1,
          comment: "Would not buy again!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Daniel Cook",
          reviewerEmail: "daniel.cook@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Poor quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Hunter Gordon",
          reviewerEmail: "hunter.gordon@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Very unhappy with my purchase!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Stella Morris",
          reviewerEmail: "stella.morris@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 8,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "9646971048759",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/2.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    },
    {
      id: 44,
      title: "Family Tree Photo Frame",
      description:
        "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
      category: "home-decoration",
      price: 29.99,
      discountPercentage: 14.87,
      rating: 4.53,
      stock: 77,
      tags: ["home decor", "photo frame"],
      sku: "HOM-BRD-FAM-044",
      weight: 1,
      dimensions: {
        width: 17.27,
        height: 14.81,
        depth: 29.11,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Highly impressed!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Oscar Powers",
          reviewerEmail: "oscar.powers@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Austin Hudson",
          reviewerEmail: "austin.hudson@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Very dissatisfied!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Luke Cooper",
          reviewerEmail: "luke.cooper@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 15,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "5398738320864",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
    },
    {
      id: 45,
      title: "House Showpiece Plant",
      description:
        "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
      category: "home-decoration",
      price: 39.99,
      discountPercentage: 7.46,
      rating: 4.67,
      stock: 28,
      tags: ["home decor", "artificial plants"],
      sku: "HOM-BRD-HOU-045",
      weight: 8,
      dimensions: {
        width: 8.55,
        height: 14.62,
        depth: 17.25,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 1 week",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Natalie Harris",
          reviewerEmail: "natalie.harris@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Poor quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Max Russell",
          reviewerEmail: "max.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
      ],
      returnPolicy: "No return policy",
      minimumOrderQuantity: 3,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "8433795204995",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/1.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/2.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/3.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
    },
    {
      id: 46,
      title: "Plant Pot",
      description:
        "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
      category: "home-decoration",
      price: 14.99,
      discountPercentage: 6.84,
      rating: 3.01,
      stock: 59,
      tags: ["home decor", "plant accessories"],
      sku: "HOM-BRD-PLA-046",
      weight: 9,
      dimensions: {
        width: 9.83,
        height: 20.28,
        depth: 13.49,
      },
      warrantyInformation: "Lifetime warranty",
      shippingInformation: "Ships in 3-5 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Fast shipping!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Vivian Carter",
          reviewerEmail: "vivian.carter@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Ella Adams",
          reviewerEmail: "ella.adams@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Poor quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Liam Smith",
          reviewerEmail: "liam.smith@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 31,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "8477070578398",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp",
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/4.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
    },
    {
      id: 47,
      title: "Table Lamp",
      description:
        "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
      category: "home-decoration",
      price: 49.99,
      discountPercentage: 7.09,
      rating: 3.55,
      stock: 9,
      tags: ["home decor", "lighting"],
      sku: "HOM-BRD-TAB-047",
      weight: 4,
      dimensions: {
        width: 8.98,
        height: 13.41,
        depth: 5.65,
      },
      warrantyInformation: "3 months warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Excellent quality!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Benjamin Foster",
          reviewerEmail: "benjamin.foster@x.dummyjson.com",
        },
        {
          rating: 3,
          comment: "Would not recommend!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Sophia Jones",
          reviewerEmail: "sophia.jones@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Awesome product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Natalie Harris",
          reviewerEmail: "natalie.harris@x.dummyjson.com",
        },
      ],
      returnPolicy: "90 days return policy",
      minimumOrderQuantity: 2,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "8806138916048",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
    },
    {
      id: 48,
      title: "Bamboo Spatula",
      description:
        "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
      category: "kitchen-accessories",
      price: 7.99,
      discountPercentage: 2.84,
      rating: 3.27,
      stock: 37,
      tags: ["kitchen tools", "utensils"],
      sku: "KIT-BRD-BAM-048",
      weight: 3,
      dimensions: {
        width: 21.32,
        height: 23.03,
        depth: 25.94,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Awesome product!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Lucas Ramirez",
          reviewerEmail: "lucas.ramirez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly recommended!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Caleb Perkins",
          reviewerEmail: "caleb.perkins@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Highly recommended!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 29,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "3988181417733",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
    },
    {
      id: 49,
      title: "Black Aluminium Cup",
      description:
        "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
      category: "kitchen-accessories",
      price: 5.99,
      discountPercentage: 15.65,
      rating: 4.46,
      stock: 75,
      tags: ["drinkware", "cups"],
      sku: "KIT-BRD-BLA-049",
      weight: 7,
      dimensions: {
        width: 5.88,
        height: 5.11,
        depth: 10.03,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships overnight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 3,
          comment: "Very disappointed!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Alexander Hernandez",
          reviewerEmail: "alexander.hernandez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Great value for money!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Aurora Rodriguez",
          reviewerEmail: "aurora.rodriguez@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Not worth the price!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Benjamin Foster",
          reviewerEmail: "benjamin.foster@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 48,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "5606164195748",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/1.webp",
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
    },
    {
      id: 50,
      title: "Black Whisk",
      description:
        "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
      category: "kitchen-accessories",
      price: 9.99,
      discountPercentage: 10.24,
      rating: 3.9,
      stock: 73,
      tags: ["kitchen tools", "utensils"],
      sku: "KIT-BRD-BLA-050",
      weight: 1,
      dimensions: {
        width: 13.03,
        height: 5.99,
        depth: 20.64,
      },
      warrantyInformation: "3 months warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 3,
          comment: "Not worth the price!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Cameron Perez",
          reviewerEmail: "cameron.perez@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Waste of money!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Benjamin Foster",
          reviewerEmail: "benjamin.foster@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very pleased!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Paisley Bell",
          reviewerEmail: "paisley.bell@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 40,
      meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z",
        barcode: "3112495795209",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
    },
  ],
  totalItems: 20,
  currentPage: 1,
  itemsPerPage: 2,
};

const getters = {
  allProducts: (state) => state.dummyjson,
  products: (state) => state.products,
  totalItems: (state) => state.totalItems,
  currentPage: (state) => state.currentPage,
  itemsPerPage: (state) => state.itemsPerPage,
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_TOTAL_ITEMS(state, total) {
    state.totalItems = total;
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
  SET_ITEMS_PER_PAGE(state, count) {
    state.itemsPerPage = count;
  },
};

const actions = {
  fetchProducts({ commit, state }, page = 1) {
    const limit = state.itemsPerPage;
    const skip = (page - 1) * limit;

    return axios
      .get("/progress", {
        params: {
          limit,
          skip,
        },
      })
      .then((response) => {
        console.log("ress", response);
        commit("SET_PRODUCTS", response.data.products);
        commit("SET_TOTAL_ITEMS", response.data.total);
        commit("SET_CURRENT_PAGE", page);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
