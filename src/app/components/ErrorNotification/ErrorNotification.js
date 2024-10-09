import { Alert } from "@mui/material";

function ErrorNotification({ error }) {
    const { type, message } = error;
    return (
        <Alert severity={type} variant="filled">
            {message}
        </Alert>
    );
}

export default ErrorNotification;
