import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/child/cardlist/cardList";
import HomePage from "./components/parent/homePage"

const data = [
  { gambar: "https://tastynesia.com/wp-content/uploads/2020/06/Resep-Sate-Kambing-Empuk-1200x799.jpg", nama: "Sate Kambing", stok: 40, harga: 15000 },
  { gambar: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1607833073/ycql2m50b64h0dxy6pxr.jpg", nama: "Nasi Goreng Bakso", stok: 30, harga: 12000 },
  { gambar: "https://img-global.cpcdn.com/recipes/d673616eeeb1cbf5/1200x630cq70/photo.jpg", nama: "Gado-gado", stok: 10, harga: 15000 },
  { gambar: "http://www.rsnirmalasuri.com/wp-content/uploads/2020/07/kerupuk-2.jpg", nama: "Kerupuk", stok: 5, harga: 8000 },
  { gambar: "https://asset.kompas.com/crops/jZtHBcCGP1o6mD0tLn3luGmUT70=/26x0:691x444/750x500/data/photo/2021/04/12/6073c22d1a8c3.jpg", nama: "Dendeng Sapi Goreng", stok: 14, harga: 18000 },
  { gambar: "https://selerasa.com/wp-content/uploads/2015/05/images_daging_empal-daging-goreng.jpg", nama: "Empal Daging Sapi", stok: 23, harga: 20000 },
];

ReactDOM.render(
  <React.StrictMode>
    <HomePage 
      menu_data = {data}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
