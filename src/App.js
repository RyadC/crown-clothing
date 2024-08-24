import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
    },
    {
      id: 1,
      title: "Jackets",
      imageUrl:
        "https://images.pexels.com/photos/26585488/pexels-photo-26585488.jpeg",
    },
    {
      id: 1,
      title: "Snickers",
      imageUrl:
        "https://images.pexels.com/photos/233312/pexels-photo-233312.jpeg",
    },
    {
      id: 1,
      title: "Womens",
      imageUrl:
        "https://images.pexels.com/photos/1755674/pexels-photo-1755674.jpeg",
    },
    {
      id: 1,
      title: "Mens",
      imageUrl:
        "https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
