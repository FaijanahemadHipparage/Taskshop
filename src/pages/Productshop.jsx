import React, { useEffect, useState } from "react";
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
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import CheckIcon from "@mui/icons-material/Check";

const Productshop = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [searchString, setSearchString] = useState("");

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchApi();
  }, []);
  console.log(data);
  const searchData = data.filter((product) =>
    product.title.toLowerCase().includes(searchString.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1000);
  };

  const handleBuyNow = (product) => {
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
      amount: parseInt(product.price) * 100,
      currency: "INR",
      name: "NWS Shopping Web",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("payment id", paymentId, shipping_address);
      },
      theme: {
        color: "#07a291db",
      },
    };
    let pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div
      style={{
        backgroundColor: "#E1E2E4",
        padding: "20px",
      }}
    >
      <Container style={{ marginTop: "100px" }}>
        {showAlert && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            variant="filled"
            severity="primary"
            style={{
              position: "fixed",
              top: "70px",
              right: "30px",
              zIndex: 1000,
              width: "200px",
            }}
          >
            Your product is added in cart
          </Alert>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#063970", // Gradient background
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
          }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{
              color: "#fff",
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "bold",
            }}
          >
            Shopping Product
          </Typography>
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Search for products..."
            style={{
              padding: "10px 15px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
              fontFamily: "'Roboto', sans-serif",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Slight shadow for input
              transition: "box-shadow 0.3s ease",
            }}
          />
        </div>
        <Grid container spacing={4}>
          {searchData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: "100%", // Ensure card grows to fill the height of the container
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
                    height="200" // Fixed height for images
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
                      {product.price}₹
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
                  <Button
                    size="small"
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "10px 15px",
                      borderRadius: "20px",
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    size="small"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px 15px",
                      borderRadius: "20px",
                    }}
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Productshop;
