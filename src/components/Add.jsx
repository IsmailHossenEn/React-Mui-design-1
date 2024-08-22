import styled from "@emotion/styled";
import {
  DateRange,
  EmojiEmotions,
  Image,
  MapsUgc,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  margin: "10px 0",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <IconButton>
          <Fab color="primary" aria-label="add">
            <MapsUgc />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          width={400}
          height={320}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={2}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography sx={{ color: "#000", fontSize: "18px" }}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            label="What's on your mind?!"
            variant="standard"
            multiline
            rows={2}
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;
