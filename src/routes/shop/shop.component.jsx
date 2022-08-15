// import SHOP_DATA from "../../shop-data.json";
import { useContext, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(CategoriesMap).map((title) => {
        <Fragment key={title}>
          <h2>{title}</h2>

          <div className="products-container">
            {CategoriesMap[title].map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </Fragment>;
      })}
    </Fragment>
  );
};

export default Shop;
