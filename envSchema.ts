import { z } from 'zod';

export const envSchema = z.object({
    USERNAME: z.string(),
    PASSWORD: z.string(),
    BASE_URL: z.string(),
    BASE_API_URL: z.string(),
    AUTH_URL: z.string(),
    TOKEN: z.string()
});