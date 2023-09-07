import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const OrganizationTheme = createTheme({
    palette: {
        primary: {
            main: "#B2675E",
        },
        secondary: {
            main: "#69A2B0"
        }
    },
    status: {
        danger: orange[500],
    },
});
