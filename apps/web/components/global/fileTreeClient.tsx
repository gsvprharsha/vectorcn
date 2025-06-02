"use client"
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import { Tree, TreeItem, TreeItemLabel } from "@vectorcn/ui/components/tree"
import { ChevronDown, File, LucideFolderCode } from "lucide-react"

interface FileTreeClientProps {
  files: string[]
  onFileSelect?: (filename: string) => void
}

interface FileItemData {
  name: string
  children?: string[]
}

// TypeScript React icon component - square blue icon
const TypeScriptIcon = () => (
  <div className="w-4 h-4 bg-[#0078cf] flex items-center justify-center text-[8px] text-white font-bold">
    <span>TS</span>
  </div>
)

export default function FileTreeClient({ files, onFileSelect }: FileTreeClientProps) {
  const items: Record<string, FileItemData> = files.reduce(
    (acc, file) => {
      acc[file] = { name: file }
      return acc
    },
    {} as Record<string, FileItemData>,
  )

  items["root"] = {
    name: "Files",
    children: files,
  }

  const tree = useTree<FileItemData>({
    indent: 0, // No indentation
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => {
        const item = items[itemId]
        if (!item) throw new Error(`Item not found: ${itemId}`)
        return item
      },
      getChildren: (itemId) => items[itemId]?.children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  })

  return (
    <div className="h-full w-full bg-muted dark:bg-background text-white font-sans text-sm">
      <div className="p-3">
        <Tree className="space-y-1 pt-3 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]" indent={1} tree={tree}>
            <span className="inline-flex text-foreground font-mono text-xs font-medium items-center gap-1.5 mb-2 ">
                <ChevronDown className="w-4 h-4"/> source  
            </span>

          {tree
            .getItems()
            .filter((item) => !item.isFolder())
            .map((item) => {
              const name = item.getItemData().name

              return (
                <TreeItem key={item.getId()} item={item} className="pl-5">
                  <TreeItemLabel
                    className="flex items-center dark:bg-muted/1 bg-muted gap-2 py-1 rounded dark:hover:bg-foreground/10 hover:bg-background cursor-pointer"
                    onClick={() => {
                      if (onFileSelect) {
                        onFileSelect(name)
                      }
                    }}
                  >
                    <span className="text-foreground font-mono text-xs font-medium inline-flex gap-1 items-center">                      
                        <File className="w-3 h-3"/>
                        {name}
                    </span>
                  </TreeItemLabel>
                </TreeItem>
              )
            })}
        </Tree>
      </div>
    </div>
  )
}