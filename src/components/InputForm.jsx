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
import axios from "axios";
import { LoadingButton } from "@mui/lab";

function InputForm() {
  const [formData, setFormData] = useState({
    recipientEmail: "",
    contents: "",
    openDate: new Date(),
  });

  const [formLoading, setFormLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleDateTimeChange = (dateTime) => {
    const d = new Date(dateTime);
    setFormData({ ...formData, d });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    setFormLoading(true);
    e.preventDefault();
    // Create a data object to send to the server
    const postData = {
      recipientEmail: formData.recipientEmail,
      openDate: formData.openDate,
      contents: formData.contents,
    };

    // Replace the URL with your API endpoint
    axios
      .post(
        "https://0f62-124-121-138-221.ngrok-free.app/api/timecapsules/send-email",
        postData
      )
      .then((response) => {
        // Handle a successful response from the server
        setFormLoading(false);
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
              onChange={handleInputChange}
              name="contents"
              className="w-full p-2 text-gray-700 border border-neutral-700 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              rows="20"
              placeholder="Enter your text here"
            ></textarea>
          </Grid>
          <Grid md={3}>
            <FormControl fullWidth onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Typography>ส่งเมื่อใด</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    onChange={handleDateTimeChange}
                  ></DateTimePicker>
                </LocalizationProvider>
                <Typography>E-mail</Typography>
                <Input
                  name="recipientEmail"
                  onChange={handleInputChange}
                  slotProps={{
                    input: {
                      placeholder: "example@example.com",
                      type: "email",
                    },
                  }}
                ></Input>
                <LoadingButton
                  onClick={handleSubmit}
                  loading={formLoading}
                  variant="contained"
                >
                  ส่งต่อสู่อนาคต
                </LoadingButton>
                {/* {formLoading ? (
                  <LoadingButton />
                ) : (
                  <Button onClick={handleSubmit} variant="contained">
                    ส่งต่อสู่อนาคต
                  </Button>
                )} */}
              </Stack>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default InputForm;
