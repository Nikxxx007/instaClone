import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import { Favorite, MoreVert } from '@mui/icons-material';

interface PostProps {
  username: string;
  profilePicture: string;
  imageUrl: string;
  caption: string;
  likes: number;
}

export const Post: React.FC<PostProps> = ({ username, profilePicture, imageUrl, caption, likes }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        avatar={<Avatar alt={username} src={profilePicture} />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={username}
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likes} likes
        </Typography>
      </CardActions>
    </Card>
  );
};
