import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import '../../color-style.scss'

const tiers = [
    {
        title: 'Закупить все позиции',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Закупить',
        buttonVariant: 'outlined',
    },
    {
        title: 'Добавить на склад',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Добавить',
        buttonVariant: 'contained',
    },
    {
        title: 'Архив',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Открыть',
        buttonVariant: 'outlined',
    },
];

function BuyCard(){
    return (
        <React.Fragment>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}>
                            <Card>
                                <CardHeader

                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{align: 'center', color: 'white',fontSize:16}}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.primary.light
                                                : theme.palette.primary.light,
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            // component="h2",
                                            // variant="h6,
                                            display: 'flex',
                                            justifyContent: 'left',
                                            alignItems: 'baseline',
                                            mb: 2
                                        }}>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component='p'
                                                        variant='p'
                                                        align='center'
                                                        key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default function BuyCards(){
    return <BuyCard/>;
}