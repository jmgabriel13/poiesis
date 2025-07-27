
export const HeroSection = () => {
    return (
        <section
            id='hero'
            className='relative min-h-screen flex flex-col items-center justify-center px-4'
        >
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='text-primary opacity-0 animate-fade-in'>Poiesis</span>
                        <span className='opacity-0 animate-fade-in-delay-1'> — </span>
                        <span className='ml-2 opacity-0 animate-fade-in-delay-2'>to bring forth</span>
                    </h1>
                    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        the act of creation that brings something into being.
                        It’s about more than just making things <br></br>
                        —it’s about revealing and transforming.
                    </p>

                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href='#projects' className='cosmic-button'>
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};