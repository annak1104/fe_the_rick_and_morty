import { Box } from '@mui/material';
import { CharacterCard } from '../CharacterCard/CharacterCard';

export const CardsList = () => {
  return (
    <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '28px',
          mb: 1,
        }}
      >
        {[1,2,3,4,5,6].map((char) => (
          <CharacterCard key={char} />
        ))}
      </Box>
  );
};