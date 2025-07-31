import { ExternalLink, Facebook, Instagram, Linkedin, UsersRound } from 'lucide-react';
import { getTeamMembers } from '../services/services';

const teamMembers = await getTeamMembers();

export const TeamSection = () => {
    return (
        <section id='ourTeam' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <div className='flex justify-center mb-12'>
                    <div className='p-3'>
                        <UsersRound className='h-6 w-6 text-primary' />
                    </div>
                    <div className='text-left'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center'>
                            Meet Our <span className='text-primary'>Team!</span>
                        </h2>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center sm:gap-10 md:gap-20 lg:gap-30 gap-10'>
                    {teamMembers.map((member, key) => (
                        <div
                            key={key}
                            className='group bg-card card-hover'
                        >
                            <div className='flex justify-center h-48'>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className='rounded-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            <div className='p-6'>
                                <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-glow'>
                                    {member.role}
                                </span>
                                <h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
                                <p className='text-muted-foreground text-sm mb-4'>{member.description}</p>
                                <div className='flex justify-center items-center'>
                                    <div className='flex space-x-3'>
                                        <a
                                            href={`/profile/${member.id}`}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={member.linkedIn}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                        <a
                                            href={member.facebook}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <Facebook size={20} />
                                        </a>
                                        <a
                                            href={member.instagram}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <Instagram size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};