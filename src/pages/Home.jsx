import { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { StarBackground } from '../components/StarBackground';
import { TeamSection } from '../components/TeamSection';
import { ThemeToggle } from '../components/ThemeToggle';
import { useGlobal } from '../context/GlobalContext';

export const Home = () => {
    const { globalData, loading } = useGlobal();

    useEffect(() => {
        if (!loading) {
            const favicon = document.querySelector("link[rel~='icon']");
            if (favicon) {
                favicon.href = globalData.favicon.data.attributes.url;
            }

            document.title = globalData.websiteTitle;
        }
    }, [globalData]);

    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar
                siteTitle1={globalData?.siteTitle1}
                siteTitle2={globalData?.siteTitle2}
            />
            {/* Main Content */}
            <main>
                <HeroSection
                    siteDescription={globalData?.siteDescription}
                    siteTagline1={globalData?.siteTagline1}
                    siteTagline2={globalData?.siteTagline2}
                />
                <TeamSection />
            </main>

            {/* Footer */}
        </div>
    );
};