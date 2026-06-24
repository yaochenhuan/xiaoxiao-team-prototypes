import PhoneMockup from './PhoneMockup'
import { PrototypePage } from '@/data/types'

interface PrototypeCardProps {
  page: PrototypePage
  featureName: string
  featureCode: string
}

export default function PrototypeCard({ page, featureName, featureCode }: PrototypeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-medium text-gray-700">{featureName}</span>
        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
          {featureCode}
        </span>
      </div>
      
      <PhoneMockup title={page.name}>
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <span className="text-2xl">📱</span>
          </div>
          <p className="text-xs text-gray-500 text-center mb-2">{page.description}</p>
          <p className="text-xs text-orange-500 font-medium">原型图待补充</p>
        </div>
        
        {page.sections && page.sections.length > 0 && (
          <div className="px-3 pb-3">
            <div className="flex flex-wrap gap-1">
              {page.sections.map((section, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {section}
                </span>
              ))}
            </div>
          </div>
        )}
      </PhoneMockup>
    </div>
  )
}