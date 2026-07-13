import { useState } from 'react'
import { PrototypePage } from '@/data/types'

interface MockupProps {
  page: PrototypePage
}

// ========== 公共小零件 ==========
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl border border-gray-200 shadow-sm p-4 ${className}`}>{children}</div>
)

const Badge = ({ children, color = 'gray' }: { children: React.ReactNode; color?: 'green' | 'orange' | 'blue' | 'red' | 'gray' }) => {
  const map = {
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    blue: 'bg-blue-100 text-blue-600',
    red: 'bg-red-100 text-red-600',
    gray: 'bg-gray-100 text-gray-500',
  }
  return <span className={`px-1.5 py-0.5 rounded text-[10px] ${map[color]}`}>{children}</span>
}

const QuestionList = ({ items }: { items: { q: string; ok: boolean; status?: string }[] }) => (
  <div className="w-36 border border-gray-200 rounded-lg p-2 space-y-1 shrink-0">
    <p className="text-[11px] font-medium text-gray-700">题目列表</p>
    {items.map((item) => (
      <div key={item.q} className="flex items-center justify-between px-1.5 py-1 rounded hover:bg-gray-50">
        <div className="flex items-center gap-1.5 text-[10px]">
          <span>{item.q}</span>
          <span className={item.ok ? 'text-green-500' : 'text-red-500'}>{item.ok ? '✓' : '✕'}</span>
        </div>
        {item.status && (
          <Badge color={item.status === '已订正' ? 'green' : 'orange'}>{item.status}</Badge>
        )}
      </div>
    ))}
  </div>
)

const AIPanel = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-52 border border-gray-200 rounded-lg p-3 bg-gray-50 flex flex-col ${className}`}>
    <p className="text-[10px] text-gray-500 mb-2">AI 助教</p>
    {children}
  </div>
)

const StepIndicator = ({ steps, current }: { steps: string[]; current: number }) => (
  <div className="flex items-center justify-between">
    {steps.map((step, i) => (
      <div key={step} className="flex items-center flex-1">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
          i < current ? 'bg-green-500 text-white' : i === current ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
        }`}>
          {i < current ? '✓' : i + 1}
        </div>
        <span className={`ml-1.5 text-[10px] ${i === current ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{step}</span>
        {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < current ? 'bg-green-500' : 'bg-gray-200'}`} />}
      </div>
    ))}
  </div>
)

// ========== 页面一：结果页（学生端） ==========
function StudentResultMockup() {
  return (
    <Card>
      <div className="space-y-3 text-xs">
        <div className="flex items-center justify-between bg-blue-500 text-white px-3 py-2 rounded-lg">
          <span className="text-[11px]">已生成当前作业的订正练习，点击去练习巩固薄弱知识点</span>
          <div className="flex items-center gap-2 shrink-0">
            <button className="px-2 py-1 bg-white/20 rounded text-[10px]">去练习</button>
            <span className="cursor-pointer">×</span>
          </div>
        </div>
        <div className="flex gap-3 h-60">
          <QuestionList items={[
            { q: 'Q1', ok: true },
            { q: 'Q2', ok: false, status: '未订正' },
            { q: 'Q3', ok: true },
            { q: 'Q4', ok: false, status: '已订正' },
            { q: 'Q5', ok: false, status: '未订正' },
          ]} />
          <div className="flex-1 border border-gray-200 rounded-lg p-3 relative">
            <p className="font-medium text-gray-800 mb-2 text-[11px]">第 2 题 / 共 5 题</p>
            <div className="space-y-2 text-gray-600 text-[11px]">
              <p>已知函数 f(x) = sin(2x + π/3)，求其最小正周期。</p>
              <div className="space-y-1">
                <p>A. π/2</p>
                <p>B. π</p>
                <p className="text-green-600 font-medium">C. 2π ✓</p>
                <p className="text-red-500">D. 4π（你的答案）</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded border border-blue-100 text-[10px]">添加订正笔记</button>
              <button className="px-3 py-1.5 bg-orange-50 text-orange-600 rounded border border-orange-100 text-[10px]">修改错误归因</button>
            </div>
            <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-lg text-lg">🤖</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// ========== 页面二：结果页（老师端） ==========
function TeacherResultMockup() {
  return (
    <Card>
      <div className="space-y-3 text-xs">
        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <div>
            <p className="font-medium text-gray-800 text-[11px]">姚姚</p>
            <div className="flex gap-1.5 mt-1">
              <Badge color="blue">完成状态：已完成</Badge>
              <Badge color="orange">订正状态：订正中</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-3 h-52">
          <QuestionList items={[
            { q: 'Q1', ok: true },
            { q: 'Q2', ok: false, status: '未订正' },
            { q: 'Q3', ok: false, status: '已订正' },
            { q: 'Q4', ok: true },
          ]} />
          <div className="flex-1 border border-gray-200 rounded-lg p-3">
            <p className="font-medium text-gray-800 mb-2 text-[11px]">题目详情</p>
            <div className="h-32 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-300 text-[10px]">
              题目内容与解析
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// ========== 页面三：作业详情页（老师端） ==========
function TeacherDetailMockup() {
  return (
    <Card>
      <div className="border border-gray-200 rounded-lg overflow-hidden text-xs">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['学生', '完成状态', '订正状态', '订正练习'].map((h) => (
                <th key={h} className="px-3 py-2 text-left text-gray-600 font-medium border-b border-gray-200 text-[10px]">{h}</th>
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
                  <td key={j} className="px-3 py-2 text-[11px]">
                    {j > 0 ? (
                      <Badge color={
                        cell === '已完成' || cell === '已订正' ? 'green' :
                        cell === '进行中' || cell === '订正中' ? 'blue' :
                        cell === '未开始' || cell === '未订正' ? 'orange' : 'gray'
                      }>{cell}</Badge>
                    ) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

// ========== 页面四：AI 助教自由问答订正 ==========
function AIChatMockup() {
  return (
    <Card>
      <div className="flex gap-3 h-60">
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
              <p className="mb-1 font-medium">错误原因分析</p>
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
    </Card>
  )
}

// ========== 页面五：订正页面（仅错题） ==========
function CorrectionPageMockup() {
  const steps = ['题目讲解', '确认错误归因', '总结笔记', '订正练习']
  return (
    <Card>
      <div className="space-y-3 text-xs">
        <StepIndicator steps={steps} current={0} />
        <div className="flex gap-3 h-52">
          <div className="flex-1 border border-gray-200 rounded-lg p-3">
            <p className="font-medium text-gray-800 mb-2 text-[11px]">第 1 题 / 共 5 题</p>
            <p className="text-gray-600 mb-3 text-[11px]">已知函数 f(x) = sin(2x + π/3)，求其最小正周期。</p>
            <div className="space-y-1.5 text-gray-500 text-[10px]">
              <p>学生答案：B</p>
              <p>正确答案：C</p>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-600 text-[10px]">上一题</button>
              <button className="px-3 py-1.5 bg-brand text-white rounded text-[10px]">下一题</button>
            </div>
          </div>
          <AIPanel>
            <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600 shadow-sm flex-1">
              <p className="mb-1 font-medium">第 1 题讲解</p>
              <p>📌 知识点：三角函数</p>
              <p className="mt-1">🔍 题目分析...</p>
              <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded text-[9px]">完成讲解，进入下一步</button>
            </div>
          </AIPanel>
        </div>
      </div>
    </Card>
  )
}

// ========== 页面六：手动点击“题目订正”，进入订正流程（步骤 0） ==========
function CorrectionWelcomeMockup() {
  const steps = ['题目讲解', '确认错误归因', '总结笔记', '订正练习']
  return (
    <Card>
      <div className="space-y-4 text-xs text-center">
        <p className="text-gray-700 text-[12px] leading-relaxed">
          Hi~姚姚同学，欢迎来到 AI 助教作业订正页。<br />
          接下来，我会陪你一起进行题目订正，先帮你理解题目要求，再一步一步分析解题思路，找到这道题的关键点和容易出错的地方。准备好了，我们就开始吧。
        </p>
        <div className="flex items-center justify-center gap-2">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-[10px]">{i + 1}</div>
              <span className="ml-1 text-[10px] text-gray-600">{step}</span>
              {i < steps.length - 1 && <div className="w-4 h-0.5 bg-gray-200 mx-1" />}
            </div>
          ))}
        </div>
        <button className="px-4 py-2 bg-brand text-white rounded-lg text-[11px]">开始订正</button>
      </div>
    </Card>
  )
}

// ========== 页面七：题目讲解（步骤 1） ==========
function ExplanationMockup() {
  return (
    <Card>
      <div className="flex gap-3 h-60 text-xs">
        <div className="flex-1 border border-gray-200 rounded-lg p-3">
          <p className="font-medium text-gray-800 mb-2 text-[11px]">第 1 题 / 共 5 题</p>
          <p className="text-gray-600 mb-2 text-[11px]">已知函数 f(x) = sin(2x + π/3)，求其最小正周期。</p>
          <div className="space-y-1 text-[10px] text-gray-500">
            <p>学生答案：B</p>
            <p>正确答案：C</p>
          </div>
        </div>
        <AIPanel>
          <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600 shadow-sm flex-1 space-y-1.5">
            <p className="font-medium">第 1 题讲解</p>
            <p>📌 知识点：三角函数</p>
            <p>🔍 题目分析：这道题考查的是三角函数的基本性质...</p>
            <p>✅ 正确答案是 B。因为...</p>
            <p>❌ 你选择了 A，可能是因为...</p>
            <p>💡 解题技巧：对于这类题目...</p>
            <button className="mt-1 px-2 py-1 bg-blue-500 text-white rounded text-[9px]">完成讲解，进入下一步</button>
          </div>
        </AIPanel>
      </div>
    </Card>
  )
}

// ========== 页面八：确认错误归因（步骤 2） ==========
function AttributionMockup() {
  const [showDialog, setShowDialog] = useState(false)
  return (
    <Card>
      <div className="flex gap-3 h-60 text-xs">
        <div className="flex-1 border border-gray-200 rounded-lg p-3 relative">
          <p className="font-medium text-gray-800 mb-2 text-[11px]">确认错误归因</p>
          {showDialog && (
            <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-10">
              <div className="border border-gray-200 rounded-lg p-3 bg-white shadow-lg w-64">
                <p className="font-medium text-gray-800 mb-2 text-[11px]">选择错误原因</p>
                <div className="space-y-1.5 mb-3">
                  {['知识点理解不足', '粗心大意', '解题方法不熟练', '概念混淆'].map((r) => (
                    <div key={r} className="flex items-start gap-2 text-[10px]">
                      <span className="mt-0.5">○</span>
                      <div>
                        <p className="text-gray-700">{r}</p>
                        <p className="text-gray-400 text-[9px]">说明文字</p>
                      </div>
                    </div>
                  ))}
                </div>
                <input className="w-full border border-gray-200 rounded px-2 py-1 text-[10px] mb-2" placeholder="其他原因（请描述）" />
                <div className="flex gap-2 justify-end">
                  <button onClick={() => setShowDialog(false)} className="px-2 py-1 border border-gray-200 rounded text-[9px]">取消</button>
                  <button onClick={() => setShowDialog(false)} className="px-2 py-1 bg-blue-500 text-white rounded text-[9px]">确认选择</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <AIPanel>
          <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600 shadow-sm flex-1 space-y-1.5">
            <p className="font-medium">错误原因分析</p>
            <p>📌 错误原因：知识点理解不足</p>
            <p>你对三角函数的周期性质理解不够深入，导致在判断周期时出错。正确的思路...</p>
            <div className="flex gap-2 mt-2">
              <button className="px-2 py-1 bg-green-500 text-white rounded text-[9px]">确认，这个原因说得对</button>
              <button onClick={() => setShowDialog(true)} className="px-2 py-1 bg-orange-400 text-white rounded text-[9px]">不太对，看看其他原因</button>
            </div>
          </div>
        </AIPanel>
      </div>
    </Card>
  )
}

// ========== 页面九：总结笔记（步骤 3） ==========
function NotesSummaryMockup() {
  return (
    <Card>
      <div className="flex gap-3 h-60 text-xs">
        <div className="flex-1 border border-gray-200 rounded-lg p-3">
          <p className="font-medium text-gray-800 mb-2 text-[11px]">总结订正笔记</p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-[10px] text-blue-800 mb-2">
            <p className="mb-1">建议从以下 3 个方面思考笔记内容，写好后发送给我：</p>
            <p>1. 这道题考察的是什么？</p>
            <p>2. 我的偏差在哪里？</p>
            <p>3. 下次我该怎么做？</p>
          </div>
          <textarea className="w-full h-20 border border-gray-200 rounded p-2 text-[10px]" placeholder="输入笔记内容..." />
          <button className="mt-2 px-3 py-1.5 bg-brand text-white rounded text-[10px]">发送</button>
        </div>
        <AIPanel>
          <div className="bg-white rounded-lg p-2 text-[10px] text-gray-600 shadow-sm flex-1 space-y-1.5">
            <p>很好，我看到了你的笔记，并帮你提交成功了。</p>
            <div className="border border-gray-100 rounded p-2 bg-gray-50">
              <p className="font-medium text-green-600">√ 已提交到我的笔记</p>
              <p className="text-gray-400 text-[9px]">2026.06.17 18:00</p>
              <p className="mt-1">这道题考察的是转折关系下的语义判断，我的偏差是没有抓住信号词，下次我需要先定位，再判断关系与改写。</p>
            </div>
          </div>
        </AIPanel>
      </div>
    </Card>
  )
}

// ========== 页面十：订正练习推送（步骤 4） ==========
function PracticePushMockup() {
  return (
    <Card>
      <div className="space-y-3 text-xs">
        <div className="flex items-center justify-between bg-blue-500 text-white px-3 py-2 rounded-lg">
          <span className="text-[11px]">已生成当前作业的订正练习，点击去练习巩固薄弱知识点</span>
          <div className="flex items-center gap-2 shrink-0">
            <button className="px-2 py-1 bg-white/20 rounded text-[10px]">去练习</button>
            <span className="cursor-pointer">×</span>
          </div>
        </div>
        <AIPanel className="w-full h-40">
          <div className="bg-white rounded-lg p-3 text-[11px] text-gray-600 shadow-sm flex-1 flex flex-col items-center justify-center text-center">
            <p className="font-medium mb-1">🎉 完成订正</p>
            <p className="mb-3">太棒了！已完成全部题目订正，接下来开始订正练习，准备好了吗~</p>
            <button className="px-4 py-1.5 bg-blue-500 text-white rounded text-[10px]">开始练习</button>
          </div>
        </AIPanel>
      </div>
    </Card>
  )
}

// ========== 页面十一：巩固训练（真题）— 订正练习 ==========
function ConsolidationRealMockup() {
  return (
    <Card>
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
            <p className="font-medium text-gray-800 text-[11px]">订正练习 - 数学作业 3</p>
            <p className="text-[10px] text-gray-400 mt-0.5">共 8 道题 · 预计 15 分钟</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="orange">未开始</Badge>
            <button className="px-3 py-1.5 bg-brand text-white rounded text-[10px]">开始练习</button>
          </div>
        </div>
      </div>
    </Card>
  )
}

// ========== 页面十二：巩固训练（单词）— 订正练习 ==========
function ConsolidationWordMockup() {
  return (
    <Card>
      <div className="space-y-3 text-xs">
        <div className="flex gap-2 border-b border-gray-200 pb-2">
          <button className="px-3 py-1.5 rounded-lg text-[10px] font-medium bg-blue-50 text-blue-600 relative">
            订正练习
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
        <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-800 text-[11px]">订正练习 - 单词作业 3</p>
            <p className="text-[10px] text-gray-400 mt-0.5">共 20 个单词</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="orange">未开始</Badge>
            <button className="px-3 py-1.5 bg-brand text-white rounded text-[10px]">开始练习</button>
          </div>
        </div>
      </div>
    </Card>
  )
}

// ========== 页面十三：笔记模块（学生端） ==========
function NotesModuleMockup() {
  const [active, setActive] = useState('correction')
  const tabs = [
    { id: 'practice', label: '练习笔记' },
    { id: 'correction', label: '订正笔记', badge: 'NEW' },
    { id: 'public', label: '公开笔记' },
  ]
  return (
    <Card>
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
    </Card>
  )
}

// ========== 入口 ==========
export default function HomeworkCorrectionMockup({ page }: MockupProps) {
  switch (page.id) {
    case 'page-student-result': return <StudentResultMockup />
    case 'page-teacher-result': return <TeacherResultMockup />
    case 'page-teacher-detail': return <TeacherDetailMockup />
    case 'page-ai-chat': return <AIChatMockup />
    case 'page-correction-page': return <CorrectionPageMockup />
    case 'page-correction-welcome': return <CorrectionWelcomeMockup />
    case 'page-explanation': return <ExplanationMockup />
    case 'page-attribution': return <AttributionMockup />
    case 'page-notes-summary': return <NotesSummaryMockup />
    case 'page-practice-push': return <PracticePushMockup />
    case 'page-consolidation-real': return <ConsolidationRealMockup />
    case 'page-consolidation-word': return <ConsolidationWordMockup />
    case 'page-notes-module': return <NotesModuleMockup />
    default: return <StudentResultMockup />
  }
}
