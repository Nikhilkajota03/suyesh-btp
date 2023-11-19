const mongoose = require("mongoose");
const AuctTra = new mongoose.Schema(
    {
      buyerName: {
        type: String,
        required: true,
      },
      buyerWallet: {
        type: String,
        required: true,
      },
      sellerName: {
        type: String,
        required: true,
      },
      sellerWallet: {  // Change the property name to "sellerWallet"
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  

  module.exports = mongoose.model("AuctTra", AuctTra);