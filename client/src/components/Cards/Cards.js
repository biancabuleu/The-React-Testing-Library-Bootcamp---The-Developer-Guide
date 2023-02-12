import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ cats, setCats }) => {
  const updateFavourite = (index, favourite) => {
    const updatedCats = [...cats];
    updatedCats[index].favoured = favourite;
    setCats(updatedCats);
  };

  return (
    <div className="pet-cards-container">
      {cats.map((cat, index) => {
        return (
          <Card
            key={cat.id}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            image={cat.image}
            favoured={cat.favoured}
            updateFavourite={updateFavourite}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
