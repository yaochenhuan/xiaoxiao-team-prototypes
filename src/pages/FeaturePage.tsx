import { useState, useRef, useCallback, useEffect } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import { getFeatureById } from '@/data/features'
import PrototypePanel from '@/components/prototype/PrototypePanel'
import PRDPanel from '@/components/prd/PRDPanel'
import { ViewMode } from '@/components/layout/AppLayout'

interface OutletContext {
  viewMode: ViewMode
}

const A4_WIDTH = 794 // A4 纸宽 210mm @ 96dpi

export default function FeaturePage() {
  const location = useLocation()
  const { viewMode } = useOutletContext<OutletContext>()

  // 可拖动分隔条，PRD 固定 A4 宽，剩余空间给原型
  const [splitRatio, setSplitRatio] = useState(0.6) // 原型区占的比例
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const path = location.pathname.replace(/^\/?/, '')

  const pathToFeatureId: Record<string, string> = {
    'homework/homework-correction': 'homework-correction',
    'homework/homework-assignment': 'homework-assignment',
    'homework/wrong-questions': 'wrong-questions',
    'question-bank/question-list': 'question-list',
    'question-bank/question-detail': 'question-detail',
    'question-bank/question-generate': 'question-generate',
    'course/course-list': 'course-list',
    'course/course-detail': 'course-detail',
    'course/lesson-management': 'lesson-management'
  }

  const featureId = pathToFeatureId[path] || 'homework-correction'
  const feature = getFeatureById(featureId)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      // PRD 至少 A4 宽，原型区至少 400px
      const minPrototype = 400
      const maxPrototype = rect.width - A4_WIDTH - 8
      const newPrototypeWidth = Math.max(minPrototype, Math.min(maxPrototype, x))
      const ratio = newPrototypeWidth / rect.width
      setSplitRatio(ratio)
    }

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  if (!feature) {
    return (
      <div className="flex items-center justify-center h-full bg-canvas">
        <div className="text-center">
          <p className="text-gray-400 text-sm">功能未找到</p>
        </div>
      </div>
    )
  }

  const showPrototype = viewMode === 'split' || viewMode === 'prototype'
  const showPRD = viewMode === 'split' || viewMode === 'prd'

  return (
    <div ref={containerRef} className="h-full flex">
      {showPrototype && (
        <div
          className={`h-full overflow-hidden ${
            viewMode === 'split' ? '' : 'w-full'
          }`}
          style={
            viewMode === 'split'
              ? { width: `calc(${splitRatio * 100}% - 4px)` }
              : undefined
          }
        >
          <PrototypePanel feature={feature} />
        </div>
      )}

      {/* Drag divider - only in split mode */}
      {viewMode === 'split' && (
        <div
          onMouseDown={handleMouseDown}
          className="w-2 h-full bg-gray-100 hover:bg-brand/20 cursor-col-resize flex items-center justify-center group shrink-0 transition-colors"
        >
          <div className="w-0.5 h-8 bg-gray-300 group-hover:bg-brand rounded-full transition-colors" />
        </div>
      )}

      {showPRD && (
        <div
          className={`h-full overflow-hidden flex justify-center bg-canvas ${
            viewMode === 'split' ? '' : 'w-full'
          }`}
          style={
            viewMode === 'split'
              ? { width: `calc(${(1 - splitRatio) * 100}% - 4px)` }
              : undefined
          }
        >
          <div
            className="h-full bg-white shadow-sm"
            style={{ width: `${A4_WIDTH}px`, maxWidth: '100%' }}
          >
            <PRDPanel feature={feature} />
          </div>
        </div>
      )}
    </div>
  )
}
