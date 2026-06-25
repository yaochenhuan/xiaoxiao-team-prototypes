import PhoneMockup from './PhoneMockup'
import { PrototypePage } from '@/data/types'
import RealExamMockup from './pages/RealExamMockup'
import BaseTrainingMockup from './pages/BaseTrainingMockup'
import WrongWordsMockup from './pages/WrongWordsMockup'

interface PrototypeCardProps {
  page: PrototypePage
  featureId: string
  featureCode: string
  pageIndex: number
}

export default function PrototypeCard({ page, featureId, featureCode, pageIndex }: PrototypeCardProps) {
  const isWrongQuestions = featureId === 'wrong-questions'

  // 错题功能使用 PC 端 mockup
  if (isWrongQuestions) {
    if (pageIndex === 1) return <RealExamMockup featureCode={featureCode} pageIndex={pageIndex} />
    if (pageIndex === 2) return <BaseTrainingMockup featureCode={featureCode} pageIndex={pageIndex} />
    if (pageIndex === 3) return <WrongWordsMockup featureCode={featureCode} pageIndex={pageIndex} />
  }

  // 其他功能使用手机 mockup
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
      {/* Card header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
            {pageIndex}
          </span>
          <span className="text-sm font-semibold text-gray-800">{page.name}</span>
        </div>
        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
          {featureCode}-{String(pageIndex).padStart(2, '0')}
        </span>
      </div>

      {/* Phone mockup */}
      <div className="flex justify-center mb-5">
        <PhoneMockup title={page.name}>
          <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0">
            <span className="text-[10px] font-semibold text-gray-800">9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-gray-600">📶</span>
              <span className="text-[8px] text-gray-600">🔋</span>
            </div>
          </div>

          <div className="px-4 py-2 border-b border-gray-100 shrink-0">
            <p className="text-xs font-semibold text-gray-800">{page.name}</p>
          </div>

          <div className="flex-1 px-4 py-3 overflow-hidden">
            <p className="text-[10px] text-gray-400 mb-2">{page.description}</p>

            <div className="space-y-2">
              <div className="h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                <span className="text-[9px] text-gray-300">内容区域</span>
              </div>
              <div className="h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3">
                <div className="w-6 h-6 bg-brand/10 rounded shrink-0" />
                <div className="ml-2 flex-1">
                  <div className="h-1.5 bg-gray-100 rounded w-3/4 mb-1" />
                  <div className="h-1.5 bg-gray-50 rounded w-1/2" />
                </div>
              </div>
              <div className="h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3">
                <div className="w-6 h-6 bg-gray-100 rounded shrink-0" />
                <div className="ml-2 flex-1">
                  <div className="h-1.5 bg-gray-100 rounded w-2/3 mb-1" />
                  <div className="h-1.5 bg-gray-50 rounded w-1/3" />
                </div>
              </div>
            </div>

            <div className="mt-3 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-[10px] text-white font-medium">操作按钮</span>
            </div>
          </div>

          <div className="flex items-center justify-around py-2 border-t border-gray-100 shrink-0">
            <div className="w-4 h-4 rounded bg-brand/20" />
            <div className="w-4 h-4 rounded bg-gray-100" />
            <div className="w-4 h-4 rounded bg-gray-100" />
            <div className="w-4 h-4 rounded bg-gray-100" />
          </div>
        </PhoneMockup>
      </div>

      {page.sections && page.sections.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {page.sections.map((section, index) => (
            <span
              key={index}
              className="text-[10px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded border border-gray-100"
            >
              {section}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1.5 text-xs text-amber-500 bg-amber-50 px-3 py-2 rounded-lg">
        <span>⚠</span>
        <span>原型图待补充</span>
      </div>
    </div>
  )
}
