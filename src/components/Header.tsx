import { Box, Button, Chip, Typography } from '@mui/material';

interface IHeaderProps {
  handleOpen: () => void;
}

export const Header = ({ handleOpen }: IHeaderProps) => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      padding={'24px 24px 0'}
    >
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        gap='18px'
      >
        <Typography variant='h3' fontWeight='bold'>
          Products
        </Typography>

        <Chip
          color="secondary"
          label="Guide Me"
          sx={{
            borderRadius: '18px',
            height: '48px',
            minHeight: '48px',
          }}
        />
      </Box>

      <Box
        display='flex'
        alignItems='center'
      >
        <Button
          onClick={handleOpen}
          sx={{ height: '48px', minHeight: '48px' }}
          variant="contained"
        >
          Add new
        </Button>
      </Box>
    </Box>
  )
}
