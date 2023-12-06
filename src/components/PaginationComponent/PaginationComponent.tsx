import { Pagination } from '@mui/material';

export const PaginationComponent = () => {

  return (
    <Pagination
    count={10}
    shape='rounded'
    variant='outlined'
    sx={{
      mb: '12px',
      mt: '26px',
      '& .MuiPaginationItem-root': {
        '&:hover': {
          bgcolor: '#D5D5D5',
        },
      },
      '& .Mui-selected': {
        bgcolor: '#F5F5F5',
        color: '#3C3E44',
        '&:hover': {
          bgcolor: '#D5D5D5',
        },
      },
      '& .Mui-disabled': {
        bgcolor: '#9E9E9E',
      },
    }}
    />
  );
};

