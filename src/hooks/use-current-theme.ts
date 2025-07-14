import { useTheme } from "next-themes";

export const useCurrentTheme = () => {
    const { theme, systemTheme } = useTheme();
    
    if (theme === "dark" || theme === "light") {
        return theme;
    }
    // Default to light theme if no theme is set
    return systemTheme;
};