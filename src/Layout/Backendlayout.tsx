import { CssBaseline,Box, } from '@mui/material'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'


const Backendlayout = () => {
  return (
    <>
    <CssBaseline />
      <Nav />
      <Box sx={styles.container}>
        <Box component={"main"} sx={styles.mainSection}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
  },
  mainSection: {
    px: 4,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
}

export default Backendlayout