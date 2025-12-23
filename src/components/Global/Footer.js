import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 4,
        mt: 8,
        borderTop: '1px solid #ddd',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.primary">
          © 2025 BrightSmile Dental Clinic
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          Built by: Saed Aghbar (12429711), Ayoub Aghbar (12428124), Eyas Marshoud (12428791), Nsralla Dabeek (12428610)
        </Typography>
      </Container>
    </Box>
  );
}