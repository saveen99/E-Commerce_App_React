
















import { Grid, Typography } from "@mui/material";

const UserForm = (props) => {
    <Grid 
        container
        spacing={2} 
        sx={{
            backgroundColor:'ffffff',
            marginBottom: '30px',
            display: 'block',
        }}
    >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{ color: '#000000'}}>Users Form</Typography>
        </Grid>

        <Grid>
            <Typography>
                
            </Typography>
        </Grid>
    </Grid>
}

export default UserForm;
