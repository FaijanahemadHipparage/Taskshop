import React, { useEffect, useState } from "react";
import banner from "../images/nwsweb.jpg";
import bag from "../images/bag-removebg-preview.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const firstFourProducts = data.slice(0, 4);
        setData(firstFourProducts);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchApi();
  }, []);

  const bannerstyle = {
    display: "flex",
    justifycontent: "center",
    width: "100%",
    height: "100%",
    padding: "0 0 0 0",
    backgroundColor: "#6DBFB0",
    marginTop: "70px",
  };
  return (
    <>
      <div style={bannerstyle}>
        <img src={banner} alt="banner" style={{ marginLeft: "80px" }} />
        <div>
          <h1
            style={{
              marginTop: "20px",
              color: "white",
              fontSize: "60px",
              marginLeft: "200px",
            }}
          >
            NWS Web Store
          </h1>
          <img
            src={bag}
            alt="bag"
            style={{ marginLeft: "250px", height: "250px" }}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "70px",
          marginBottom: "70px",
          backgroundColor: "#D7EEEA",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2D665C" }}>Products</h1>

        <Grid container spacing={4}>
          {data.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              style={{ marginBottom: "30px" }}
            >
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
                ></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{ marginBottom: "20px", marginRight: "30px" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/product"
            >
              More..
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
