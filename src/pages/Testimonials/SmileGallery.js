// src/pages/SmileGallery.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import GalleryViewer from '../../components/Gallery/GalleryViewer';

export default function SmileGallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/gallery.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load gallery');
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ py: 6, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 600, color: '#0db1ad', textAlign: 'center' }}>
          Smile Gallery
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            {error}
          </Alert>
        )}

        {!loading && !error && <GalleryViewer items={data} />}
      </Container>
    </Box>
  );
}
