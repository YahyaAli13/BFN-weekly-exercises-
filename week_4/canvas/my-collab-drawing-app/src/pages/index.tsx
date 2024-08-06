import {Container, Box} from '@mui/material'
import Layout from '../components/Layout';
import Canvas from '../components/Canvas';

const Home = () => {
    return(
        <Layout>
            <Container>
                <Box my={4}>
                    <Canvas/>
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;