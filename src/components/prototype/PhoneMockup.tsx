interface PhoneMockupProps {
  title: string
  children: React.ReactNode
}

export default function PhoneMockup({ title, children }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden w-[240px]">
          <div className="flex flex-col h-[480px]">
            {children}
          </div>
        </div>
      </div>
      {/* Label */}
      <p className="mt-4 text-sm text-gray-600 font-medium">{title}</p>
    </div>
  )
}
