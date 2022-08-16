// import SHOP_DATA from "../../shop-data.json";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {
        Object.keys(CategoriesMap).map((title) => {
          const products = CategoriesMap[title]
          return (
            
            <CategoryPreview key={title} title={title} products={products}/>
          );
        })
      }
    </div>
  );
};

export default Shop;
