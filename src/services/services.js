import { strapiFetch } from '../api/strapiClient';

export async function getMainNavMenus() {
    const res = await strapiFetch('/api/main-navbar-menus');
    return res.data
        .map((item) => ({
            id: item.id,
            name: item.name,
            href: item.href,
            orderId: item.orderId,
        }))
        .sort((a, b) => a.orderId - b.orderId);
};

export async function getTeamMembers() {
    const res = await strapiFetch('/api/team-members');
    return res.data
        .map((item) => ({
            id: item.id,
            name: item.name,
            role: item.role,
            image: item.image,
            description: item.description,
            linkedIn: item.linkedIn,
            facebook: item.facebook,
            instagram: item.instagram,
            orderId: item.orderId
        }))
        .sort((a, b) => a.orderId - b.orderId);
};

// TODO
export async function getAllProjects() {
    const res = await strapiFetch('/api/projects?populate=*');
    return res.data.map((item) => {
        const attrs = item.attributes;
        return {
            id: item.id,
            title: attrs.title,
            description: attrs.description,
            tags: attrs.tags?.split(',').map((t) => t.trim()) || [],
            demoUrl: attrs.demoUrl,
            githubUrl: attrs.githubUrl,
            image: attrs.image?.data?.attributes?.url
                ? `https://your-strapi.up.railway.app${attrs.image.data.attributes.url}`
                : null,
        };
    });
};