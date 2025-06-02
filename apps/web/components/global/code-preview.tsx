import { getFileTree, getSourceCodeForFile } from '@/lib/fetch'

interface PageProps {
  params: { category: string; id: string }
  searchParams?: Record<string, string>
}

export default async function CodePreviewPage({ params, searchParams }: PageProps) {
  const { category, id } = params
  const currentFile = searchParams?.file || 'index.tsx'

  const fileTree = getFileTree(category, id)
  const sourceCode = getSourceCodeForFile(category, id, currentFile)

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar: File Tree */}
      <aside style={{ width: '250px', borderRight: '1px solid #ccc', padding: '1rem' }}>
        <h3>Files</h3>
        <ul>
          {fileTree.map((file) => (
            <li key={file}>
              <a
                href={`/code/${category}/${id}?file=${file}`}
                style={{
                  color: file === currentFile ? 'blue' : 'black',
                  textDecoration: 'none',
                }}
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main: Source Code */}
      <main style={{ flex: 1, padding: '1rem', overflowX: 'auto' }}>
        <h1>
          {category} / {id} / {currentFile}
        </h1>
        {sourceCode ? (
          <pre style={{ background: '#000000', padding: '1rem', borderRadius: '8px', color: '#fff' }}>
            <code>{sourceCode}</code>
          </pre>
        ) : (
          <p>Source code not found for {currentFile}</p>
        )}
      </main>
    </div>
  )
}