import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';

const Home = () => {
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          About
        </Typography>
        <Link href='/' color='secondary'>
          Go Back
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
