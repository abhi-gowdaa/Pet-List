import { useState } from "react";
import api from "../Api"; // Adjust the import path as necessary
import { TextField, Button, Typography } from "@mui/material";
import DetailComponent from "../components/DetailComponent";
import CircularProgress from "@mui/material/CircularProgress";

export const dummmy = [
  {
    name: "Luna",
    animal: "dog",
    city: "Seattle",
    state: "WA",
    description:
      "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington.",
    breed: "Havanese",
    images: [
      "http://pets-images.dev-apis.com/pets/dog25.jpg",
      "http://pets-images.dev-apis.com/pets/dog26.jpg",
      "http://pets-images.dev-apis.com/pets/dog27.jpg",
      "http://pets-images.dev-apis.com/pets/dog28.jpg",
      "http://pets-images.dev-apis.com/pets/dog29.jpg",
    ],
  },
];
function SearchForm() {
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");

  const [results, setResults] = useState(dummmy);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `/pets?animal=${animal}&location=${location}&breed=${breed}`
      );
      setResults(response.data.pets);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", marginTop: "50px" }}>
      <div
        style={{
          margin: "auto",
          marginBottom: "20px",
          padding: "20px",
          backgroundColor: "white",
          position: "static",
        }}
      >
        <TextField
          label="Animal"
          variant="outlined"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Breed"
          variant="outlined"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {loading && <CircularProgress />}

      {!loading && results.length === 0 && (
        <Typography>No results found.</Typography>
      )}

      <DetailComponent pet={results[0] || dummmy[0]} />
    </div>
  );
}

export default SearchForm;
