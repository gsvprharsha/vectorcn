'use client'

import React, { useTransition, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface CategoryNavProps {
  categories: { name: string; slug: string }[]
  selectedSlug: string
}

export default function CategoryNav({ categories, selectedSlug }: CategoryNavProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleCategoryClick = useCallback((slug: string) => {
    if (selectedSlug !== slug) {
      startTransition(() => router.push(`/sections/${slug}`))
    }
  }, [selectedSlug, router])

  return (
    <nav className="overflow-x-auto whitespace-nowrap py-3 bg-muted/20 px-4">
      {categories.map(({ name, slug }) => (
        <button
          key={slug}
          onClick={() => handleCategoryClick(slug)}
          disabled={isPending}
          className={`inline-block px-4 py-1 mr-2 text-sm font-medium transition-colors disabled:opacity-60 ${
            selectedSlug === slug
              ? 'bg-foreground text-background border border-foreground'
              : 'text-foreground hover:bg-foreground/10'
          }`}
        >
          {name}
        </button>
      ))}
    </nav>
  )
}