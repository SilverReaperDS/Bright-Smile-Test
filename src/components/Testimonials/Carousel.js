import React, { useRef, useState, useEffect } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import useInterval from '../../hooks/useInterval';

export default function Carousel({
  children,
  interval = 4000,
  autoPlay = true,
  pauseOnHover = true,
  className = '',
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const items = React.Children.toArray(children);
  const len = items.length;

  const next = () => setIndex((i) => (i + 1) % Math.max(len, 1));
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  useInterval(() => {
    if (len > 1 && !hovering) next();
  }, autoPlay ? interval : null);

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  if (len === 0) return null;

  return (
    <Box
      className={className}
      onMouseEnter={() => pauseOnHover && setHovering(true)}
      onMouseLeave={() => pauseOnHover && setHovering(false)}
      sx={{ overflow: 'hidden', position: 'relative' }}
      aria-roledescription="carousel"
    >
      <Box
        ref={trackRef}
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          width: `${len * 100}%`,
        }}
      >
        {items.map((child, i) => (
          <Box
            key={i}
            sx={{
              minWidth: '100%',
              boxSizing: 'border-box',
              flexShrink: 0,
            }}
            aria-hidden={i !== index}
          >
            {child}
          </Box>
        ))}
      </Box>

      {len > 1 && (
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <IconButton onClick={prev} aria-label="Previous slide">
            <ArrowBackIos fontSize="small" />
          </IconButton>
          <IconButton onClick={next} aria-label="Next slide">
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
}
