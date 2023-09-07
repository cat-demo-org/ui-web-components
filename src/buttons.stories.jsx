import { Box, Button as MuiButton, ThemeProvider } from "@mui/material";
import { OrganizationTheme } from "./theme/theme";

export default {
    decorators: [
        (Component) => (
            <ThemeProvider theme={OrganizationTheme}>
                <Component />
            </ThemeProvider>
        ),
    ],
};

const generateButton = (variant, size, color) => (
    <MuiButton size={size} color={color} variant={variant} sx={{ m: 2 }}>
        {size}_{color}_{variant}
    </MuiButton>
);

const generateButtonColorLayout = (color) => {
    const sizes = ["small", "medium", "large"];
    const buttons = sizes.map((size) => (
        <Box>
            {generateButton("contained", size, color)}
            {generateButton("outlined", size, color)}
            {generateButton("text", size, color)}
        </Box>
    ));
    return buttons;
};

export const AllButtons = () => (
    <>
        {generateButtonColorLayout("primary")}
        {generateButtonColorLayout("secondary")}
        {generateButtonColorLayout("success")}
        {generateButtonColorLayout("error")}
        {generateButtonColorLayout("warning")}
    </>
);
