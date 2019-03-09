import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};
export default props => (
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                
            </Paper>
        </Grid>

        <Grid item sm>
            <Paper style={styles.Paper}>Right grid</Paper>
        </Grid>
    </Grid>
);
