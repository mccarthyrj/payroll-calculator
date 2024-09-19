import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const InstructionsBox = () => {

  return (
  
    <Box 
      className="smallBox"
      sx={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 250,
        width: 500,
        bhcolor: 'background.paper',
        borderColor: 'gray'
      }}
    >
      <Typography>
        hello
      </Typography>
    </Box>
  );
}

export default InstructionsBox;