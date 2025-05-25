import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import { removeAllproduct, removeItem } from "../Redux/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const storeData = useSelector((state) => state.cart.productData);
  const dispatch = useDispatch();

  const [groupedProducts, setGroupedProducts] = useState([]);

  // Group products by ID and update local state
  useEffect(() => {
    const grouped = storeData.reduce((acc, product) => {
      const found = acc.find((item) => item.id === product.id);
      if (found) {
        found.quantity += 1;
        found.totalPrice += product.price;
      } else {
        acc.push({ ...product, quantity: 1, totalPrice: product.price });
      }
      return acc;
    }, []);
    setGroupedProducts(grouped);
  }, [storeData]);

  const handleBuyNow = (product) => {
    console.log(`Buy now: ${totalCartPrice}`);
    const shipping_address = {
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    let options = {
      key: "rzp_test_vv1FCZvuDRF6lQ",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(totalCartPrice) * 100,
      currency: "INR",
      name: "NWS Shopping Web",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId, shipping_address);
      },
      theme: {
        color: "#07a291db",
      },
    };
    let pay = new window.Razorpay(options);
    pay.open();
  };

  const handleIncreaseQuantity = (product) => {
    const updatedProducts = groupedProducts.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + product.price,
          }
        : item
    );
    setGroupedProducts(updatedProducts);
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      const updatedProducts = groupedProducts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - product.price,
            }
          : item
      );
      setGroupedProducts(updatedProducts);
    }
  };

  const handleRemoveAll = () => {
    dispatch(removeAllproduct());
    setGroupedProducts([]); // Clear local state to reflect the change immediately
  };

  const btnstyle = {
    backgroundColor: "#063970",
    color: "white",
    padding: "20px",
    fontSize: "20px",
    borderRadius: "15px",
    border: "none",
    marginTop: "50px",
  };

  const totalCartPrice = groupedProducts.reduce(
    (total, product) => total + product.totalPrice,
    0
  );

  const handleRemove = (product) => {
    dispatch(removeItem(product));
    const updatedProducts = groupedProducts.filter(
      (item) => item.id !== product.id
    );
    setGroupedProducts(updatedProducts);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Container>
        <Grid container spacing={4} style={{ marginTop: "70px" }}>
          {groupedProducts.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              style={{
                backgroundColor: "#E1E2E4",
                padding: "20px",
              }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <CardActionArea sx={{ flexGrow: 1 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      objectFit: "cover", // Maintain aspect ratio and cover
                      transition: "transform 0.3s ease-in-out", // Smooth transition
                      "&:hover": {
                        transform: "scale(1.1)", // Scale up the image on hover
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description.length > 60
                        ? `${product.description.substring(0, 60)}...`
                        : product.description}
                    </Typography>
                    <Typography variant="h5" mt={3}>
                      {product.totalPrice}₹ ({product.quantity} pcs)
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "16px",
                  }}
                >
                  <IconButton
                    aria-label="decrease"
                    onClick={() => handleDecreaseQuantity(product)}
                    disabled={product.quantity === 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{product.quantity}</Typography>
                  <IconButton
                    aria-label="increase"
                    onClick={() => handleIncreaseQuantity(product)}
                  >
                    <AddIcon />
                  </IconButton>
                  <Button
                    size="small"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px 15px",
                      borderRadius: "20px",
                    }}
                    onClick={() => handleRemove(product)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <button size="medium" style={btnstyle} onClick={handleRemoveAll}>
              Remove All from Cart
            </button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <button size="medium" style={btnstyle}>
              Product Quantity: {groupedProducts.length}
            </button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <button size="medium" style={btnstyle}>
              Total Price: {totalCartPrice}₹
            </button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <button
              size="medium"
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "20px",
                fontSize: "20px",
                borderRadius: "15px",
                border: "none",
                marginTop: "50px",
              }}
              onClick={() => handleBuyNow(totalCartPrice)}
            >
              Buy Now
            </button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
