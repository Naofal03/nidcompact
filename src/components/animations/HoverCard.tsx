'use client'

import { motion } from 'framer-motion'

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function HoverCard({
  children,
  className,
  glowColor = 'rgba(245,200,66,0.15)',
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: `0 20px 40px ${glowColor}, 0 0 0 1px rgba(245,200,66,0.1)`,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
