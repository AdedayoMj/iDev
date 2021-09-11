import React, { useEffect, useState } from 'react';
import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

import { Version, Client, Server, Database, Cloud, DataFormat } from '../../util/dummdata';
import CustomizedTreeView from './customTree';
import ITreeViewProps from '../../interface/treeview';
import Header from '../../components/header';
import ProfileSection from './profileInfo';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backColor: {
            width: '100%',
            minHeight: '100%',
            backgroundColor: theme.palette.type === 'dark' ? '#073642' : 'white'
        },
        root: {
            marginRight: 10,
            marginLeft: 10,
            display: 'flex'
        },
        mrg: {
            marginBottom: 100
        }
    })
);

const AccountPage: React.FunctionComponent = () => {
    const classes = useStyles();
    const fire_token = localStorage.getItem('fire_token');
    const [loading, setLoading] = useState<boolean>(false);
    const [version, setVersion] = useState<ITreeViewProps | null>(null);
    const [database, setDatabase] = useState<ITreeViewProps | null>(null);
    const [server, setServer] = useState<ITreeViewProps | null>(null);
    const [client, setClient] = useState<ITreeViewProps | null>(null);
    const [cloud, setCloud] = useState<ITreeViewProps | null>(null);
    const [dataFormat, setDataFormat] = useState<ITreeViewProps | null>(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setVersion(Version);
            setDatabase(Database);
            setServer(Server);
            setClient(Client);
            setCloud(Cloud);
            setDataFormat(DataFormat);
            setLoading(false);
        }, 1000);
    }, []);
    if (fire_token === null) return <Redirect to="/login" />;
    return (
        <Container>
            <Header title="ACCOUNT">
                <Grid className={classes.root} container spacing={3}>
                    <ProfileSection />
                    <Grid className={classes.mrg} item xs={10} lg={3}>
                        <CustomizedTreeView title={version?.title} subtitle={version?.subtitle} color={version?.color} loading={loading} />

                        <CustomizedTreeView title={database?.title} subtitle={database?.subtitle} color={database?.color} loading={loading} />
                    </Grid>
                    <Grid className={classes.mrg} item xs={10} lg={3}>
                        <CustomizedTreeView title={client?.title} subtitle={client?.subtitle} color={client?.color} loading={loading} />

                        <CustomizedTreeView title={dataFormat?.title} subtitle={dataFormat?.subtitle} color={dataFormat?.color} loading={loading} />
                    </Grid>
                    <Grid className={classes.mrg} item xs={10} lg={3}>
                        <CustomizedTreeView title={server?.title} subtitle={server?.subtitle} color={server?.color} loading={loading} />
                        <CustomizedTreeView title={cloud?.title} subtitle={cloud?.subtitle} color={cloud?.color} loading={loading} />
                    </Grid>
                </Grid>
            </Header>
        </Container>
    );
};

export default AccountPage;
