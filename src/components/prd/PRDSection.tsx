import { PRDSection as PRDSectionType } from '@/data/types'

interface PRDSectionProps {
  section: PRDSectionType
}

export default function PRDSection({ section }: PRDSectionProps) {
  return (
    <div className="border-b border-gray-100 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
          {section.id.split('-').pop()?.slice(0, 2).toUpperCase()}
        </span>
        <h3 className="text-base font-semibold text-gray-800">{section.title}</h3>
      </div>
      <div className="pl-8">
        <p className="text-gray-500 text-sm leading-relaxed">{section.content}</p>
      </div>
    </div>
  )
}