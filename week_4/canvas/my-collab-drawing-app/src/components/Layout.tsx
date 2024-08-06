import React, { ReactNode } from 'react';
import{ AppBar, Toolbar, Typography, Button, Container} from '@mui/material';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => { //{} Maybe needed 
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style = {{ flexGrow:1 }}>
                        Collaborative Drawing App
                    </Typography>
                    <Link href="/auth" passHref>
                    <Button color = "inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>    
        </div>
    );
};

export default Layout;