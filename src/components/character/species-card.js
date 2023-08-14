const { useEffect, useState } = require("react");

const SpeciesCard = ({ character }) => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    if (!character.species[0]) return;

    fetch(character.species[0])
      .then((response) => response.json())
      .then((data) => {
        setSpecies(data.name);
      })
      .catch((error) => {
        console.log("There was a problem!", error);
      });
  }, []);

  return <div>{species}</div>;
};

export default SpeciesCard;
