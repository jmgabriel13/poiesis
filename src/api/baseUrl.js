let BASE_API = import.meta.env.VITE_PRIMARY_API_URL;
let STRAPI_TOKEN = import.meta.env.VITE_PRIMARY_STRAPI_TOKEN;

const BACKUP_API = import.meta.env.VITE_BACKUP_API_URL;
const BACKUP_STRAPI_TOKEN = import.meta.env.VITE_BACKUP_STRAPI_TOKEN;

export async function initializeApiBaseUrl() {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const res = await fetch(`${BASE_API}/api/global`, {
            method: 'GET',
            signal: controller.signal,
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
        });

        clearTimeout(timeout);

        if (!res.ok) throw new Error('Primary not ok');
        console.log('✅ Primary API available');
    } catch (err) {
        console.warn('⚠️ Primary API failed. Using fallback API.');
        BASE_API = BACKUP_API;
        STRAPI_TOKEN = BACKUP_STRAPI_TOKEN;
    }
};

export function getApiBaseUrl() {
    return BASE_API;
};

export function getStrapiToken() {
    return STRAPI_TOKEN;
};