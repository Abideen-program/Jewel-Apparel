import CategoryItem from "./components/category-item/category-item.component";

import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://images.unsplash.com/photo-1650751909778-16a5515313de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItem  category = {category} key={category.id}/>
        );
      })}
    </div>
  );
};

export default App;
