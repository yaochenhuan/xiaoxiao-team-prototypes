interface DesktopMockupProps {
  title: string
  children: React.ReactNode
  width?: number
}

export default function DesktopMockup({ title, children, width = 1100 }: DesktopMockupProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Browser frame */}
      <div
        className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden"
        style={{ width: `${width}px` }}
      >
        {/* Browser chrome */}
        <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white border border-gray-200 rounded px-3 py-0.5 text-[10px] text-gray-400 max-w-md mx-auto text-center">
              xiaoxiao.app/{title}
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-white">
          {children}
        </div>
      </div>

      {/* Label */}
      <p className="mt-3 text-sm text-gray-600 font-medium">{title}</p>
    </div>
  )
}
