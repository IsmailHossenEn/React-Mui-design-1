import {
  Avatar,
  AvatarGroup,
  Box,
  List,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={4} sx={{ margin: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/worried-boy-red-hoodie_1308-171318.jpg?t=st=1724242719~exp=1724246319~hmac=4a4f78b43d2edd6a5def92f725079b8b5780a3580edfb54c3fb5b99301e66521&w=740"
          />
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?t=st=1724242865~exp=1724246465~hmac=5b571630b77d46579cc984d0381f73dfddf36fa8b3086d24dd6427fa12f43316&w=740"
          />
          <Avatar
            alt="Agnes Walker"
            src="/https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg?t=st=1724242727~exp=1724246327~hmac=f78ccc01cdbbcfa9f2091875d6e9cf88288189b0f6d3533f260b1a9bfbf4b0a5&w=740"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} marginY={2}>
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          gap={2}
          sx={{ marginX: "10px", overflow: "hidden" }}
        >
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={300} marginY={2}>
          Latest Photos
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://img.freepik.com/free-photo/worried-boy-red-hoodie_1308-171318.jpg?t=st=1724242719~exp=1724246319~hmac=4a4f78b43d2edd6a5def92f725079b8b5780a3580edfb54c3fb5b99301e66521&w=740"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
