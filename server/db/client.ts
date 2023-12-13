import { PrismaClient } from '@prisma/client'
import { createClient } from '@supabase/supabase-js'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}
export const prisma =
globalForPrisma.prisma ??
  new PrismaClient({
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);