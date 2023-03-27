import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card"> 
      <CardMedia component="img" style={{ height: "200px" }} image={product.image} 
      alt={product.image}/>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="h6" component="div"><b>${product.cost}</b></Typography> 
      </CardContent>
      <CardActions>
        <Rating name="read-only" value={product.rating} readOnly /> <br/>
        <Button variant="contained" ><AddShoppingCartOutlined/>ADD TO CART</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
