import React from 'react';
import { Container, Typography, Box, Avatar, Button } from '@mui/material';

interface ProfileProps {
  username: string;
  email: string;
  profilePicture: string;
  bio: string;
}

export const Profile: React.FC<ProfileProps> = ({ username, email, profilePicture, bio }) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt={username}
          src={profilePicture}
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <Typography component="h1" variant="h4">
          {username}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {bio}
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Edit Profile
        </Button>
      </Box>
    </Container>
  );
};
