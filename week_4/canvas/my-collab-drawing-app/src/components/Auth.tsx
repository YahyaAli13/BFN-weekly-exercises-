import {Box, TextField, Button, Typography, TextFieldClassKey} from '@mui/material';

const Auth = () => {
    return(
        <Box display="flex" flexDirection="column" alignItems = "center">
            <Typography variant= "h4" gutterBottom>Login</Typography>
            <TextField label= "Email" variant="outlined" margin="normal"/>
            <TextField label = "Password" type = "password" variant="outlined" margin = "normal"/>
            <Button variant = "contained" color = "primary">Login</Button>
        </Box>
    );

};

export default Auth;