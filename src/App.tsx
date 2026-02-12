import { Button, Container, createTheme, ThemeProvider, Box, CssBaseline } from '@mui/material'
import './App.css'
import Home from './pages/Home'
import { useState } from 'react';
import { LightMode, Bedtime } from '@mui/icons-material';

function App() {

  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createTheme({
    palette: { mode },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, width: "100%", px: 0}}>
          <Button sx={{
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "scale(1.05)",
            },
            transition: "all 0.3s ease",
          }} content='variant' onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? <Bedtime /> : <LightMode />}
          </Button>
        </Box>
        <Home />
      </Container>
    </ThemeProvider>
  )
}

export default App
