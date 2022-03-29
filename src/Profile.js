import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardHeader, CardContent, CardMedia, Avatar, Typography } from '@material-ui/core';


export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar" src={user.picture}>
                        </Avatar>
                    }
                    title={user.name}
                    subheader = {date}
                />
                <CardMedia
                    image={user.picture}
                    alt={user.name}
                    title="User Avatar"
                />
                <CardContent>
                    <Typography component="p">
                        Email: {user.email}
                    </Typography>
                </CardContent>
            </Card>
        )
    );
};
