
import { Box, Container, Grid, Typography } from "@mui/material";
import './style.scss'
function Footer() {
    return (
        <div className="box">
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "rgb(63, 110, 228)",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Typography color="white" variant="h5">
                                Store App
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="white" variant="subtitle1">
                                {`${new Date().getFullYear()} | Store App`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;