import React from 'react'
import { getFileTree, getAllSourceCodes } from '@/lib/fetch'
import BlockPreviewClient from './block-preview-client'

interface BlockPreviewProps {
  category: string
  id: string
  height?: string | number
  className?: string
}

export default async function BlockPreview({
  category,
  id,
  height = '500px',
  className,
}: BlockPreviewProps) {
  const files = getFileTree(category, id)
  const allSourceCodes = getAllSourceCodes(category, id)

  return (
    <BlockPreviewClient
      category={category}
      id={id}
      files={files}
      allSourceCodes={allSourceCodes}
      height={height}
      className={className}
    />
  )
}
