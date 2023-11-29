import { z } from "zod";

export const envSchema = z.object({
  USERNAME: z.string(),
  PASSWORD: z.string(),
  
});