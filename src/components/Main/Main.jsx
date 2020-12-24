import React, { useContext } from 'react'
import{ Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';

import Form from './Form/Form';
import List from './List/List';

import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className = {classes.root}>
            <CardHeader title = "Expense Tracker" />
            <CardContent>
                <Typography variant="h5" align="center">Total Balance ${balance}</Typography>
                {/* <Typography variant="subheader" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard></InfoCard>
                </Typography> */}
                <Divider />
                <Form />
                </CardContent>
                <CardContent className = { classes.CardContent }>
                    <Grid container spacing = { 2 }>
                        <Grid item xs = { 12 }>
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>
        </Card>
    )
}

export default Main
