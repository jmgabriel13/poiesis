import { Moon, Sun } from 'lucide-react';
import React, { useEffect } from 'react'
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.classList.add(savedTheme);
            setIsDarkMode(savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDark ? 'dark' : 'light';
            document.documentElement.classList.add(initialTheme);
            localStorage.setItem('theme', initialTheme);
            setIsDarkMode(prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
                'focus:outline-hidden'
            )}
        >
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-300' />
            ) : (
                <Moon className='h-6 w-6 text-blue-900' />
            )}
        </button>
    );
};