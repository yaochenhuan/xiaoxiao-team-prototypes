import { useState } from 'react'

const TABS = [
  { id: 'student-result', label: '结果页（学生）' },
  { id: 'teacher-result', label: '结果页（老师）' },
  { id: 'teacher-detail', label: '作业详情（老师）' },
  { id: 'ai-chat', label: 'AI 助教' },
  { id: 'correction-flow', label: '四步订正' },
  { id: 'consolidation', label: '订正练习' },
  { id: 'notes', label: '笔记模块' },
]

function StudentResultMockup() {
  return (
    <div className="space-y-3 text-xs">
      <div className="flex items-center justify-between bg-blue-500 text-white px-3 py-2 rounded-lg">
        <span>已生成当前作业的订正练习，点击去练习巩固薄弱知识点</span>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 bg-white/20 rounded text-[10px]">去练习</button>
          <span className="cursor-pointer">×</span>
        </div>
      </div>
      <div className="flex gap-3 h-64">
        <div className="w-36 border border-gray-200 rounded-lg p-2 space-y-1.5 shrink-0">
          <p className="font-medium text-gray-700">题目列表</p>
          {[
            { q: 'Q1', ok: true, status: null },
            { q: 'Q2', ok: false, status: '未订正' },
            { q: 'Q3', ok: true, status: null },
            { q: 'Q4', ok: false, status: '已订正' },
            { q: 'Q5', ok: false, status: '未订正' },
          ].map((item) => (
            <div key={item.q} className="flex items-center justify-between px-1.5 py-1 rounded hover:bg-gray-50">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">{item.q}</span>
                <span className={item.ok ? 'text-green-500' : 'text-red-500'}>{item.ok ? '✓' : '✕'}</span>
              </div>
              {item.status && (
                <span className={`text-[8px] px-1 py-0.5 rounded ${item.status === '已订正' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                  {item.status}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 border border-gray-200 rounded-lg p-3 relative">
          <p className="font-medium text-gray-800 mb-2">第 2 题 / 共 5 题</p>
          <div className="space-y-2 text-gray-600">
            <p>已知函数 f(x) = sin(2x + π/3)，求其最小正周期。</p>
            <div className="space-y-1">
              <p>A. π/2</p>
              <p>B. π</p>
              <p className="text-green-600 font-medium">C. 2π ✓</p>
              <p className="text-red-500">D. 4π（你的答案）</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded border border-blue-100">添加订正笔记</button>
            <button className="px-3 py-1.5 bg-orange-50 text-orange-600 rounded border border-orange-100">修改错误归因</button>
          </div>
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-lg text-lg">🤖</div>
        </div>
      </div>
    </div>
  )
}

function TeacherResultMockup() {
  return (
    <div className="space-y-3 text-xs">
      <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
        <div className="w-8 h-8 rounded-full bg-gray-200" />
        <div>
          <p className="font-medium text-gray-800">姚姚</p>
          <div className="flex gap-1.5 mt-1">
            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded text-[10px]">完成状态：已完成</span>
            <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded text-[10px]">订正状态：订正中</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 h-56">
        <div className="w-36 border border-gray-200 rounded-lg p-2 space-y-1.5 shrink-0">
          <p className="font-medium text-gray-700">题目列表</p>
          {[
            { q: 'Q1', ok: true },
            { q: 'Q2', ok: false, status: '未订正' },
            { q: 'Q3', ok: false, status: '已订正' },
            { q: 'Q4', ok: true },
          ].map((item) => (
            <div key={item.q} className="flex items-center justify-between px-1.5 py-1 rounded hover:bg-gray-50">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">{item.q}</span>
                <span className={item.ok ? 'text-green-500' : 'text-red-500'}>{item.ok ? '✓' : '✕'}</span>
              </div>
              {item.status && (
                <span className={`text-[8px] px-1 py-0.5 rounded ${item.status === '已订正' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                  {item.status}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 border border-gray-200 rounded-lg p-3">
          <p className="font-medium text-gray-800 mb-2">题目详情</p>
          <div className="h-32 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-300">
            题目内容与解析
          </div>
        </div>
      </div>
    </div>
  )
}

function TeacherDetailMockup() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden text-xs">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {['学生', '完成状态', '订正状态', '订正练习'].map((h) => (
              <th key={h} className="px-3 py-2 text-left text-gray-600 font-medium border-b border-gray-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['姚姚', '已完成', '已订正', '已完成'],
            ['李明', '已完成', '订正中', '未开始'],
            ['王芳', '进行中', '未订正', '—'],
          ].map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2">
                  {j > 0 ? (
                    <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                      cell === '已完成' || cell === '已订正' ? 'bg-green-100 text-green-600' :
                      cell === '进行中' || cell === '订正中' ? 'bg-blue-100 text-blue-600' :
                      cell === '未开始' || cell === '未订正' ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-100 text-gray-500'
                    }`}>{cell}</span>
                  ) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function AIChatMockup() {
  return (
    <div className="flex gap-3 h-64">
      <div className="flex-1 border border-gray-200 rounded-lg p-3 text-xs text-gray-400 flex items-center justify-center">
        结果页题目详情（背景）
      </div>
      <div className="w-56 border border-gray-200 rounded-lg flex flex-col bg-white shadow-sm">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
          <span className="text-xs font-medium">AI 助教</span>
          <span className="text-gray-400">×</span>
        </div>
        <div className="flex-1 p-3 space-y-3 overflow-hidden">
          <div className="bg-gray-50 rounded-lg p-2 text-[10px] text-gray-600">
            <p className="mb-1">错误原因分析</p>
            <p>📌 错误原因：知识点理解不足</p>
            <p className="mt-1">你对三角函数的周期性质理解不够深入...</p>
            <div className="flex gap-2 mt-2">
              <button className="px-2 py-1 bg-green-500 text-white rounded text-[9px]">确认</button>
              <button className="px-2 py-1 bg-orange-400 text-white rounded text-[9px]">不太对</button>
            </div>
          </div>
        </div>
        <div className="p-2 border-t border-gray-100">
          <div className="flex gap-1.5 text-[9px] text-gray-500 mb-2 overflow-hidden">
            <span className="px-1.5 py-0.5 bg-gray-100 rounded">重点词汇</span>
            <span className="px-1.5 py-0.5 bg-gray-100 rounded">题目订正</span>
            <span className="px-1.5 py-0.5 bg-gray-100 rounded">总结笔记</span>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-7 bg-gray-100 rounded px-2 text-[10px] flex items-center text-gray-400">输入消息...</div>
            <button className="px-2 py-1 bg-brand text-white rounded text-[10px]">发送</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CorrectionFlowMockup() {
  const steps = ['题目讲解', '确认错误归因', '总结笔记', '订正练习']
  const current = 1
  return (
    <div className="space-y-3 text-xs">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center flex-1">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
              i < current ? 'bg-green-500 text-white' :
              i === current ? 'bg-blue-500 text-white' :
              'bg-gray-200 text-gray-500'
            }`}>
              {i < current ? '✓' : i + 1}
            </div>
            <span className={`ml-1.5 text-[10px] ${i === current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{step}</span>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < current ? 'bg-green-500' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>
      <div className="flex gap-3 h-56">
        <div className="flex-1 border border-gray-200 rounded-lg p-3">
          <p className="font-medium text-gray-800 mb-2">第 1 题 / 共 5 题</p>
          <p className="text-gray-600 mb-3">已知函数 f(x) = sin(2x + π/3)，求其最小正周期。</p>
          <div className="space-y-1.5 text-gray-500">
            <p>学生答案：B</p>
            <p>正确答案：C</p>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-600">上一题</button>
            <button className="px-3 py-1.5 bg-brand text-white rounded">下一题</button>
          </div>
        </div>
        <div className="w-52 border border-gray-200 rounded-lg p-3 bg-gray-50">
          <p className="text-[10px] text-gray-500 mb-2">AI 助教</p>
          <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600 shadow-sm">
            <p className="mb-1">第 1 题讲解</p>
            <p>📌 知识点：三角函数</p>
            <p className="mt-1">🔍 题目分析：这道题考查的是三角函数的基本性质...</p>
            <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded text-[9px]">完成讲解，进入下一步</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConsolidationMockup() {
  return (
    <div className="space-y-3 text-xs">
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        {['订正练习', '精听', '精读'].map((tab, i) => (
          <button key={tab} className={`px-3 py-1.5 rounded-lg text-[10px] font-medium relative ${
            i === 0 ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'
          }`}>
            {tab}
            {i === 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />}
          </button>
        ))}
      </div>
      <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
        <div>
          <p className="font-medium text-gray-800">订正练习 - 数学作业 3</p>
          <p className="text-[10px] text-gray-400 mt-0.5">共 8 道题 · 预计 15 分钟</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-[10px]">未开始</span>
          <button className="px-3 py-1.5 bg-brand text-white rounded text-[10px]">开始练习</button>
        </div>
      </div>
    </div>
  )
}

function NotesMockup() {
  const [active, setActive] = useState('correction')
  const tabs = [
    { id: 'practice', label: '练习笔记' },
    { id: 'correction', label: '订正笔记', badge: 'NEW' },
    { id: 'public', label: '公开笔记' },
  ]
  return (
    <div className="space-y-3 text-xs">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-medium flex items-center gap-1 ${
                active === tab.id ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {tab.label}
              {tab.badge && active === tab.id && (
                <span className="px-1 bg-red-500 text-white rounded text-[8px]">{tab.badge}</span>
              )}
            </button>
          ))}
        </div>
        <button className="px-3 py-1.5 bg-brand text-white rounded-lg text-[10px]">+ 新建笔记</button>
      </div>
      <div className="border border-gray-200 rounded-lg p-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gray-200" />
          <div>
            <p className="text-[10px] font-medium">姚姚</p>
            <p className="text-[9px] text-gray-400">2026-07-09 · 收藏</p>
          </div>
        </div>
        <p className="text-gray-600 text-[11px] leading-relaxed">
          这道题考察的是三角函数周期性质，我的偏差是没有把 ω 提取出来，下次遇到先化简成标准形式再判断。
        </p>
        <div className="flex gap-2 text-[10px] text-gray-400">
          <span>#三角函数</span>
          <span className="ml-auto">✏️ 🗑️</span>
        </div>
      </div>
    </div>
  )
}

export default function HomeworkCorrectionMockup() {
  const [activeTab, setActiveTab] = useState('student-result')

  const renderContent = () => {
    switch (activeTab) {
      case 'student-result': return <StudentResultMockup />
      case 'teacher-result': return <TeacherResultMockup />
      case 'teacher-detail': return <TeacherDetailMockup />
      case 'ai-chat': return <AIChatMockup />
      case 'correction-flow': return <CorrectionFlowMockup />
      case 'consolidation': return <ConsolidationMockup />
      case 'notes': return <NotesMockup />
      default: return <StudentResultMockup />
    }
  }

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2.5 text-[11px] font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'text-brand border-b-2 border-brand bg-brand/5'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 min-h-[320px]">{renderContent()}</div>
    </div>
  )
}
