import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().startsWith("postgresql://"),
    PORT: z.string().default("3333"),
  },

  //   clientPrefix: "PUBLIC_",

  //   client: {
  //     PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  //   },

  runtimeEnvStrict: {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT,
  },

  // emptyStringAsUndefined: true,
})
