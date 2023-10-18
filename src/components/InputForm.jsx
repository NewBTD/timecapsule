import {
  Container,
  FormControl,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Input } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

function InputForm() {
  const [formData, setFormData] = useState({
    subject: "Testing Email",
    recipientEmail: "",
    body: "",
    // dateTime: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateTimeChange = (dateTime) => {
    setFormData({ ...formData, dateTime });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a data object to send to the server
    const postData = {
      email: formData.email,
      dateTime: formData.dateTime,
    };

    // Replace the URL with your API endpoint
    axios
      .post("https://api.example.com/your-post-endpoint", postData)
      .then((response) => {
        // Handle a successful response from the server
        console.log("Post successful:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the POST request
        console.error("Post error:", error);
      });
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid md={9}>
            <textarea
              className="w-full p-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              rows="20"
              placeholder="Enter your text here"
            ></textarea>
          </Grid>
          <Grid md={3}>
            <FormControl fullWidth>
              <Stack spacing={3}>
                <Typography>ส่งเมื่อใด</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker></DateTimePicker>
                </LocalizationProvider>
                <Typography>E-mail</Typography>
                <Input
                  slotProps={{
                    input: {
                      placeholder: "example@example.com",
                      type: "email",
                    },
                  }}
                ></Input>
                <Button variant="contained">ส่งต่อสู่อนาคต</Button>
              </Stack>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default InputForm;
