import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Radha Radha ❣️ Shyam Shyam
                </Typography>
                <Button variant="contained" color="warning">
                    Radha
                </Button>
                <Button variant="contained" color="info">
                    Radha
                </Button>
                <Button variant="contained" color="error">
                    Radha
                </Button>
                <Button variant="contained" color="primary">
                    Radha
                </Button>
                <Button variant="contained" color="secondary">
                    Radha
                </Button>
            </Box>
        </Container>
    )
}
export default Home
