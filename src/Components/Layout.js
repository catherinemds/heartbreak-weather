import Grid from "@mui/material/Grid";

function Layout({ children }) {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
