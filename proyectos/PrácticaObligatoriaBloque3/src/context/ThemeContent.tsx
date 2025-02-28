import { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderProps = {
    children: React.ReactNode;
};

type ThemeProviderState = {
    isDark: boolean;
};

const initialState: ThemeProviderState = {
    isDark: true,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
    }, []);

    return (
        <ThemeProviderContext.Provider {...props} value={{ isDark: true }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};