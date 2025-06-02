'use client'

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { cn } from '@vectorcn/ui/lib/utils'
import dynamic from 'next/dynamic'
import CodeBlock from './codeblock'
import { useTheme } from 'next-themes'
import { Loader2, Maximize, MonitorIcon, SmartphoneIcon, TabletIcon } from 'lucide-react'

// Lazy load FileTreeClient only when code tab is active
const FileTreeClient = dynamic(
  () => import('./fileTreeClient'), 
  { 
    ssr: false,
    loading: () => <div className="p-4 text-sm text-muted-foreground">Loading files...</div>
  }
)

interface BlockPreviewClientProps {
  category: string
  id: string
  files: string[]
  allSourceCodes: Record<string, string>
  height?: string | number
  className?: string
}

export default function BlockPreviewClient({
  category,
  id,
  files,
  allSourceCodes,
  height = '500px',
  className = '',
}: BlockPreviewClientProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const [selectedFile, setSelectedFile] = useState(
    files.includes('index.tsx') ? 'index.tsx' : files[0] || ''
  )
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const { theme } = useTheme()

  // Memoize expensive computations
  const src = useMemo(() => `/preview/${category}/${id}`, [category, id])
  const sourceCode = useMemo(() => 
    selectedFile ? allSourceCodes[selectedFile] ?? 'Source code not found' : '', 
    [selectedFile, allSourceCodes]
  )
  const codeTheme = useMemo(() => 
    theme === 'dark' ? 'github-dark' : 'github-light', 
    [theme]
  )

  const getIframeWidth = useCallback(() => {
    switch (device) {
      case 'tablet':
        return '60%'
      case 'mobile':
        return '40%'
      default:
        return '100%'
    }
  }, [device])

  const categoryDisplay = useMemo(() =>
    category
      ?.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    [category]
  )

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadIframe(true)
          }
        })
      },
      {
        root: null,
        rootMargin: '1px', // Load when 10px above viewport
        threshold: 0
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
      observer.disconnect()
    }
  }, [])

  // Handle iframe load
  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true)
  }, [])

  // Handle tab change with performance optimization
  const handleTabChange = useCallback((newTab: 'preview' | 'code') => {
    setTab(newTab)
  }, [])

  // Handle device change
  const handleDeviceChange = useCallback((newDevice: 'desktop' | 'tablet' | 'mobile') => {
    setDevice(newDevice)
  }, [])

  // Handle file selection
  const handleFileSelect = useCallback((file: string) => {
    setSelectedFile(file)
  }, [])

  return (
    <div ref={containerRef} className={cn('w-full border-y overflow-hidden', className)}>
      {/* Header with tabs */}
      <div className="flex border-b bg-background px-4 py-2 text-sm font-medium text-foreground items-center gap-3">
        {/* Tabs */}
        <div className="bg-white dark:bg-black border-dashed border gap-1 px-2 py-1 text-muted-foreground inline-flex">
          <button
            className={cn(
              'px-3 py-1 hover:bg-muted-foreground/10 transition-colors',
              tab === 'preview' && 'bg-muted-foreground/20 text-foreground'
            )}
            onClick={() => handleTabChange('preview')}
          >
            Preview
          </button>
          <button
            className={cn(
              'px-3 py-1 hover:bg-muted-foreground/10 transition-colors',
              tab === 'code' && 'bg-muted-foreground/20 text-foreground'
            )}
            onClick={() => handleTabChange('code')}
          >
            Code
          </button>
        </div>

        {/* Divider */}
        <div className="my-[calc(3/16*1rem)] h-7 w-[1px] flex-none dark:bg-white/20 bg-muted" />

        {/* Category */}
        <div className="h-full items-center flex gap-2">
          <p>{categoryDisplay}</p>
          <p className="font-mono">- [{id}]</p>
        </div>

        {/* Right-aligned device menu - hidden on small screens */}
        <div className="ml-auto sm:flex hidden items-center gap-1 bg-muted-foreground/10 border p-1">
          <button
            className={cn('p-1 hover:bg-muted-foreground/10 rounded transition-colors', device === 'desktop' && 'bg-muted')}
            onClick={() => handleDeviceChange('desktop')}
            aria-label="Desktop view"
          >
            <MonitorIcon className="w-3.5 h-3.5" />
          </button>
          <button
            className={cn('p-1 hover:bg-muted-foreground/10 rounded transition-colors', device === 'tablet' && 'bg-muted')}
            onClick={() => handleDeviceChange('tablet')}
            aria-label="Tablet view"
          >
            <TabletIcon className="w-3.5 h-3.5" />
          </button>
          <button
            className={cn('p-1 hover:bg-muted-foreground/10 rounded transition-colors', device === 'mobile' && 'bg-muted')}
            onClick={() => handleDeviceChange('mobile')}
            aria-label="Mobile view"
          >
            <SmartphoneIcon className="w-3.5 h-3.5" />
          </button>
          <div className="my-[calc(3/16*1rem)] h-4 w-[1px] flex-none dark:bg-white/20 bg-muted" />
          <button className="p-1 hover:bg-muted-foreground/10 rounded transition-colors" aria-label="Open in new tab">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <Maximize className="w-3.5 h-3.5" />
            </a>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-muted/30 flex justify-center" style={{ height }}>
        {tab === 'preview' ? (
          <div className="relative" style={{ height, width: getIframeWidth() }}>
            {/* Loading placeholder */}
            {!iframeLoaded && shouldLoadIframe && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className='animate-spin w-4'/>
                  Loading preview...
                </div>
              </div>
            )}
            
            {/* Iframe - only render when shouldLoadIframe is true */}
            {shouldLoadIframe && (
              <iframe
                ref={iframeRef}
                src={src}
                title={`Preview of ${category}/${id}`}
                className={cn(
                  "rounded shadow transition-opacity duration-300",
                  iframeLoaded ? "opacity-100" : "opacity-0"
                )}
                style={{ height, width: '100%', border: 'none' }}
                onLoad={handleIframeLoad}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            )}

            {/* Placeholder when iframe not loaded yet */}
            {!shouldLoadIframe && (
              <div className="w-full h-full flex items-center justify-center bg-muted/30 rounded border-2 border-dashed border-muted-foreground/30">
                <div className="text-center text-muted-foreground">
                  <div className="w-12 h-12 mx-auto mb-2 opacity-40">
                    <MonitorIcon className="w-full h-full" />
                  </div>
                  <p className="text-sm">Preview loading soon</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex bg-m h-full w-full">
            <div className="sm:w-1/6 h-full border-r-2 overflow-auto hidden sm:block">
              {/* Only load FileTreeClient when code tab is active */}
              <FileTreeClient files={files} onFileSelect={handleFileSelect} />
            </div>

            <div className="w-full sm:w-5/6 h-full overflow-auto bg-muted/30">
              <CodeBlock 
                lang="tsx" 
                textSize={13} 
                className="h-full" 
                theme={codeTheme}
              >
                {sourceCode}
              </CodeBlock>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}