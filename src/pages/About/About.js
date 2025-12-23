// src/pages/About/About.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  CircularProgress,
} from '@mui/material';

export default function About() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('/data/team.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load team data');
        return res.json();
      })
      .then(setTeam)
      .catch(() => setTeam([]));
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: 600, color: '#0db1ad', mb: 2 }}
      >
        About BrightSmile
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 800, mb: 5 }}>
        BrightSmile is a student-built project for a responsive dental clinic website.
        Our team combines UX, React, and frontend best practices to deliver a clean,
        accessible experience.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{ mb: 3, fontWeight: 500, color: '#00796b' }}
        >
          Meet the Team
        </Typography>

        {team.length === 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          team.map((member) => (
            <Box
              key={member.id}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '24px',
                mb: '32px',
                border: '1px solid #eee',
                borderRadius: '8px',
                p: '16px',
                backgroundColor: '#fff',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                component="img"
                src={member.photo}
                alt={member.name}
                sx={{
                  width: '160px',
                  height: '160px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{ mb: '4px', fontSize: '20px', color: '#0db1ad' }}
                >
                  {member.name}
                </Typography>
                <Typography sx={{ fontWeight: 'bold', mb: '8px' }}>
                  {member.role}
                </Typography>
                <Typography sx={{ mb: '8px', lineHeight: 1.6 }}>
                  {member.bio}
                </Typography>
                <Typography sx={{ fontSize: '14px', color: '#555' }}>
                  <strong>Student ID:</strong> {member.studentId}
                </Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
}
