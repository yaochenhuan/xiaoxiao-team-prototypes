interface PhoneMockupProps {
  title: string
  children: React.ReactNode
}

export default function PhoneMockup({ title, children }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-xl">
        <div className="w-32 h-1 bg-gray-700 rounded-full mb-2" />
        <div className="bg-white rounded-[2.5rem] overflow-hidden">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[420px] w-[200px] flex flex-col">
            {children}
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600 font-medium">{title}</p>
    </div>
  )
}