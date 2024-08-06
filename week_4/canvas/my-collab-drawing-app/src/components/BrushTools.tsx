import { Box, Button, Slider, Typography } from '@mui/material';

const BrushTools = () => {
    return (
        <Box display= "flex" flexDirection = "column" alignItems= "center">
            <Typography>Brush Size</Typography>
            <Slider defaultValue={5} min = {1} max = {100}/>
            <Button variant ="contained" color="primary">Change color</Button>
            <Button variant ="contained" color = "secondary">Clear Canvas</Button>
        </Box>
    );

};

export default BrushTools;