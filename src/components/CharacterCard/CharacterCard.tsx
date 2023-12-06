import { Box, Card, CardContent, CardMedia, Link, Typography } from '@mui/material';

export const CharacterCard = () => {
return (
  <Card
  sx={{
    display: 'grid',
    gridTemplateColumns: '230px 1fr',
    width: 600,
    height: 220,
    bgcolor: '#3C3E44',
    color: '#F5F5F5',
  }}
>
  <Link
  >
    <CardMedia
      component='img'
      image='/favicon.png'
      alt={'Image'}
      height='100%'
    />
  </Link>

  <CardContent
    sx={{
      padding: '13px',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box>
        <Typography
          component='div'
          sx={{
            fontWeight: 800,
            fontSize: 27,
            minHeight: 31,
            lineHeight: '100%',
            color: 'white',
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Rick Sanchez
          </Link>
        </Typography>
      </Box>

      <Box>
        <Typography
          variant='body2'
          color='#9E9E9E'
          sx={{
            fontWeight: 500,
          }}
        >
          Last known location:
        </Typography>

        <Typography variant='body1'>Citadel of Ricks</Typography>
      </Box>

      <Box>
        <Typography
          variant='body2'
          color='#9E9E9E'
          sx={{
            fontWeight: 500,
          }}
        >
          First seen in:
        </Typography>

        <Typography variant='body1'>Pilot</Typography>
      </Box>
    </Box>
  </CardContent>
</Card>
);
};