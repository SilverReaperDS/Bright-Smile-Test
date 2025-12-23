import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function TestimonialCard({ name, rating, text, date }) {
  return (
    <Card
      role="article"
      aria-label={`Testimonial by ${name}`}
      sx={{
        height: '100%',
        border: '2px solid #ccc',
        borderRadius: 2,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 1.5,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h4" gutterBottom>
          {name}
        </Typography>

        <Box
          sx={{
            color: '#f5a623',
            fontSize: 18,
            letterSpacing: 1,
            mb: 1,
          }}
          aria-hidden
        >
          {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {text}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
}
