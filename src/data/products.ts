import productShirt1 from "@/assets/product-shirt-1.jpg";
import productShirt2 from "@/assets/product-shirt-2.jpg";
import productShirt3 from "@/assets/product-shirt-3.jpg";
import productShirt4 from "@/assets/product-shirt-4.jpg";
import productShirt5 from "@/assets/product-shirt-5.jpg";
import productShirt6 from "@/assets/product-shirt-6.jpg";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "formal" | "casual";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Formal",
    description: "Premium cotton formal shirt with crisp collar",
    price: "₹1,299",
    image: productShirt1,
    category: "formal",
  },
  {
    id: 2,
    name: "Sky Blue Oxford",
    description: "Soft button-down collar shirt for everyday elegance",
    price: "₹1,499",
    image: productShirt2,
    category: "formal",
  },
  {
    id: 3,
    name: "Navy Blue Executive",
    description: "Elegant business wear shirt for professionals",
    price: "₹1,599",
    image: productShirt3,
    category: "formal",
  },
  {
    id: 4,
    name: "Blue Check Casual",
    description: "Stylish casual checkered shirt for weekend outings",
    price: "₹1,399",
    image: productShirt4,
    category: "casual",
  },
  {
    id: 5,
    name: "Blush Pink Classic",
    description: "Soft cotton formal shirt with subtle elegance",
    price: "₹1,349",
    image: productShirt5,
    category: "formal",
  },
  {
    id: 6,
    name: "Charcoal Gray Slim",
    description: "Modern slim fit design for the contemporary man",
    price: "₹1,449",
    image: productShirt6,
    category: "formal",
  },
];
