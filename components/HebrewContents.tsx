// components/HebrewContent.tsx
import React from 'react'

export const HebrewContent: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = '' }) => {
  return (
    <div className={`rtl-content ${className}`} lang='he'>
      {children}
    </div>
  )
}
