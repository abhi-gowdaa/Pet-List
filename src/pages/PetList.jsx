import { useEffect } from "react";
import api from "../Api";
import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
function PetList() {
  const [data, setData] = useState([]);

  const request = async () => {
    console.log("API request fired");
    try {
      const response = await api.get("/pets");
      setData(response.data.pets);
      console.log(response.data.pets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography>Click to view the details</Typography>
      <ul>
        {Array.isArray(data) &&
          data.map((element) => (
            <li key={element.id}>
              <Link to={`/petlist/${element.id}`}>
                <Card
                  sx={{
                    width: "40vw",
                    padding: "8px",
                    margin: "5px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "100px", height: "100px" }}>
                    <img
                      src={element.images[0]}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <Typography variant="subtitle1" sx={{ marginLeft: "16px" }}>
                    Name: {element.name}
                  </Typography>
                </Card>
              </Link>
            </li>
          ))}
      </ul>
    </Box>
  );
}

export default PetList;
