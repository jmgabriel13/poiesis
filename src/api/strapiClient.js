import { getApiBaseUrl, getStrapiToken } from "./baseUrl";

const BASE_URL = getApiBaseUrl();
const TOKEN = getStrapiToken();
console.log(BASE_URL, TOKEN)
export async function strapiFetch(endpoint, options = {}) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
                ...(options.headers || {}),
            },
            ...options,
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.error?.message || 'Fetch failed');
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(`[strapiFetch error]: ${err.message}`);
        throw err;
    }
};