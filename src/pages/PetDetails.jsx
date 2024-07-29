import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Api";
import { Card, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import DetailComponent from "../components/DetailComponent";

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get(`/pets?id=${id}`);
        setPet(response.data.pets[0]);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPet();
  }, [id]);

  if (!pet) {
    return <CircularProgress />;
  }

  return <DetailComponent pet={pet} />;
}

export default PetDetails;
