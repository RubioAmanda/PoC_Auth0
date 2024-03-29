import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@material-ui/core';


export const LogoutButton = () => {
    const {logout} = useAuth0();

    return (
        <Button onClick={() => logout({returnTO: window.location.origin})}
        size="medium" variant="contained" color="primary">
            Log Out
        </Button>
    );
};

export default LogoutButton;