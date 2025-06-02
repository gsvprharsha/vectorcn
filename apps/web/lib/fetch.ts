import fs from 'fs'
import path from 'path'

const BASE_PATH = path.resolve(
  process.cwd(),
  'node_modules/@vectorcn/ui/src/blocks'
)

export function getComponentFolderPath(category: string, id: string) {
  return path.join(BASE_PATH, category, id)
}

export function getFileTree(category: string, id: string): string[] {
  const folderPath = getComponentFolderPath(category, id)
  if (!fs.existsSync(folderPath)) return []

  const files = fs.readdirSync(folderPath)
  return files.filter((file) => fs.statSync(path.join(folderPath, file)).isFile())
}

export function getSourceCodeForFile(
  category: string,
  id: string,
  filename: string
): string | null {
  try {
    const filePath = path.join(getComponentFolderPath(category, id), filename)
    if (!fs.existsSync(filePath)) return null
    return fs.readFileSync(filePath, 'utf-8')
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error)
    return null
  }
}

/**
 * Returns all source codes of files in the given category and id as
 * an object mapping filename -> source code string
 */
export function getAllSourceCodes(
  category: string,
  id: string
): Record<string, string> {
  const folderPath = getComponentFolderPath(category, id)
  if (!fs.existsSync(folderPath)) return {}

  const files = getFileTree(category, id)
  const allSourceCodes: Record<string, string> = {}

  for (const file of files) {
    try {
      const filePath = path.join(folderPath, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      allSourceCodes[file] = content
    } catch (error) {
      console.error(`Error reading file ${file}:`, error)
    }
  }

  return allSourceCodes
}