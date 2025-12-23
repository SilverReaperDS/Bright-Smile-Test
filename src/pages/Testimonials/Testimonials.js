import React from 'react';
import { getTestimonials } from '../../services/api';
import useFetch from '../../hooks/useFetch';
import TestimonialCard from '../../components/Testimonials/TestimonialCard';
import Carousel from '../../components/Testimonials/Carousel';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Grid,
} from '@mui/material';

export default function Testimonials() {
  const fetcher = () => getTestimonials();
  const { data: testimonials, loading, error, refetch } = useFetch(fetcher, []);

  return (
    <Box sx={{ py: 6, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, color: '#0db1ad', mb: 4, textAlign: 'center' }}
        >
          Patient Testimonials
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            <Alert
              severity="error"
              action={
                <Button color="inherit" size="small" onClick={refetch}>
                  Retry
                </Button>
              }
            >
              Failed to load testimonials: {error.message}
            </Alert>
          </Box>
        )}

        {!loading && !error && Array.isArray(testimonials) && testimonials.length > 0 && (
          <>
            <Box component="section" aria-label="Featured testimonials" sx={{ mb: 5 }}>
              <Carousel interval={4500} autoPlay pauseOnHover>
                {testimonials.slice(0, 5).map((t) => (
                  <TestimonialCard key={t.id} {...t} />
                ))}
              </Carousel>
            </Box>

            <Box component="section">
              <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                All Testimonials
              </Typography>
              <Grid container spacing={3}>
                {testimonials.map((t) => (
                  <Grid item key={t.id} xs={12} sm={6} md={4}>
                    <TestimonialCard {...t} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        )}

        {!loading && !error && (!testimonials || testimonials.length === 0) && (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
            No testimonials available yet.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
