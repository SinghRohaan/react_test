import React from 'react';
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Drawer, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline />

      {/* Header */}
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Overview
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Documents
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Lists
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Goal 
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth={false} style={{ padding: '24px' }}>
        <Grid container spacing={5}>
          {[...Array(12)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="Video Thumbnail"
                />
                <CardContent>
                  <Typography variant="subtitle1">Video Title</Typography>
                  <Typography variant="body2" color="textSecondary">Channel Name</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
