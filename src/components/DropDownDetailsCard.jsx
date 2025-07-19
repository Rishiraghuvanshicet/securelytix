import { Card, CardContent, Typography } from "@mui/material";

const DropDownDetailsCard = ({ data, type }) => {
  if (!data) return null;

  return (
    <Card
      sx={{
        backgroundColor: "#1e1e1e",
        color: "white",
        mt: 2,
        border: "1px solid #00f0ff",
        boxShadow: "0 0 10px #00f0ff",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: "#00f0ff", mb: 1 }}>
          {type.charAt(0).toUpperCase() + type.slice(1)} Details
        </Typography>
        {Object.entries(data).map(([key, value]) => (
          <Typography key={key} sx={{ textTransform: "capitalize", mb: 0.5 }}>
            <strong>{key}:</strong> {value}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default DropDownDetailsCard;
