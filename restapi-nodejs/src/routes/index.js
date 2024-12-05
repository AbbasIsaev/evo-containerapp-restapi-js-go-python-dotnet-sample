var express = require("express");
var router = express.Router();
const productController = require("../controllers/ProductController");

// Root/Index Routes
router.get("/", function (req, res, next) {
  res.json({
    message: "Call the /products route to retrieve a list of products",
  });
});

// get products
router.get("/products", productController.index);

router.get("/result", function (req, res, next) {
  res.json({
    status: "success",
    message: "Тестирование CICD",
  });
});

module.exports = router;
