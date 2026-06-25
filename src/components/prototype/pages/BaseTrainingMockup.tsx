import DesktopMockup from '../DesktopMockup'

interface BaseTrainingMockupProps {
  featureCode: string
  pageIndex: number
}

export default function BaseTrainingMockup({ featureCode, pageIndex }: BaseTrainingMockupProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
            {pageIndex}
          </span>
          <span className="text-sm font-semibold text-gray-800">基础训练 - 错题巩固</span>
        </div>
        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
          {featureCode}-{String(pageIndex).padStart(2, '0')}
        </span>
      </div>

      <div className="flex justify-center overflow-x-auto">
        <DesktopMockup title="错题/基础训练" width={1000}>
          {/* Top bar with tabs */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 h-10">
            <div className="flex items-center gap-6 text-xs">
              <span className="text-gray-500">真题</span>
              <span className="text-brand border-b-2 border-brand h-10 flex items-center -mb-px font-medium">基础训练</span>
              <span className="text-gray-500">错词</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="w-4 h-4 rounded-full bg-gray-200" />
              <span className="w-4 h-4 rounded-full bg-amber-200" />
              <span className="w-4 h-4 rounded-full bg-orange-200" />
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 flex flex-col">
              {/* Sub tabs */}
              <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-100 text-[11px]">
                <span className="px-3 py-1 text-gray-500">托福</span>
                <span className="px-3 py-1 text-gray-500">雅思</span>
                <span className="px-3 py-1 text-gray-500">SAT</span>
                <span className="px-3 py-1 text-gray-500">ACT</span>
                <span className="px-3 py-1 text-gray-500">GRE</span>
                <span className="px-3 py-1 text-gray-500">SAT机考</span>
                <span className="px-3 py-1 text-gray-500">KET</span>
                <span className="px-3 py-1 text-gray-500">PET</span>
                <span className="px-3 py-1 text-gray-500">A-Level</span>
                <span className="px-3 py-1 text-gray-500">AP</span>
              </div>

              {/* Stats cards row */}
              <div className="grid grid-cols-3 gap-3 p-4">
                <div className="border border-gray-200 rounded-lg p-3">
                  <p className="text-[10px] text-gray-500 mb-1">我的进步</p>
                  <p className="text-[10px] text-green-500 mb-2">修复率 +18%</p>
                  <svg viewBox="0 0 180 48" className="w-full h-12" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke="#0B57D0"
                      strokeWidth="1.5"
                      points="0,42 9,38 18,35 27,30 36,28 45,25 54,22 63,18 72,15 81,12 90,10 99,7 108,8 117,10 126,14 135,16 144,20 153,18 162,14 171,10 180,8"
                    />
                    <polygon
                      fill="rgba(11,87,208,0.08)"
                      points="0,42 9,38 18,35 27,30 36,28 45,25 54,22 63,18 72,15 81,12 90,10 99,7 108,8 117,10 126,14 135,16 144,20 153,18 162,14 171,10 180,8 180,48 0,48"
                    />
                  </svg>
                  <div className="flex justify-between text-[9px] text-gray-400 mt-1">
                    <span>总修复错题 30</span>
                    <span>本周修复错题 30</span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-3">
                  <p className="text-[10px] text-gray-500 mb-1">我的错误归因</p>
                  <div className="flex items-center gap-3">
                    {/* Donut chart */}
                    <svg viewBox="0 0 42 42" className="w-16 h-16 -rotate-90">
                      <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#E5E7EB" strokeWidth="5" />
                      <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#2563EB" strokeWidth="5" strokeDasharray="38 62" strokeDashoffset="0" />
                      <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#60A5FA" strokeWidth="5" strokeDasharray="27 73" strokeDashoffset="-38" />
                      <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#C084FC" strokeWidth="5" strokeDasharray="21 79" strokeDashoffset="-65" />
                      <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#BFDBFE" strokeWidth="5" strokeDasharray="14 86" strokeDashoffset="-86" />
                    </svg>
                    <div className="flex-1 space-y-1 text-[9px]">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-sm bg-blue-600" />
                        <span className="text-gray-600">词根词缀</span>
                        <span className="ml-auto text-gray-500">38%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-sm bg-blue-400" />
                        <span className="text-gray-600">词根混淆</span>
                        <span className="ml-auto text-gray-500">27%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-sm bg-purple-400" />
                        <span className="text-gray-600">熟词生义</span>
                        <span className="ml-auto text-gray-500">21%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-sm bg-blue-200" />
                        <span className="text-gray-600">拼写错误</span>
                        <span className="ml-auto text-gray-500">14%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-2">最主要问题：词根词缀</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[10px] text-gray-500">知识点修复建议</p>
                    <span className="px-1 rounded bg-red-100 text-red-500 text-[8px]">特加强</span>
                  </div>
                  <p className="text-[9px] text-gray-400 mb-1">最需要修补的知识点</p>
                  <div className="space-y-1 text-[9px]">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600 w-20 truncate">新词</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded">
                        <div className="h-full bg-blue-500 rounded" style={{ width: '78%' }} />
                      </div>
                      <span className="text-gray-500 w-6 text-right">78%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600 w-20 truncate">词性</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded">
                        <div className="h-full bg-blue-500 rounded" style={{ width: '72%' }} />
                      </div>
                      <span className="text-gray-500 w-6 text-right">72%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600 w-20 truncate">同义词</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded">
                        <div className="h-full bg-blue-500 rounded" style={{ width: '68%' }} />
                      </div>
                      <span className="text-gray-500 w-6 text-right">68%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Knowledge point classification + table */}
              <div className="flex gap-3 px-4 pb-4">
                {/* Left tree */}
                <div className="w-44 border border-gray-200 rounded-lg p-2 text-[10px] space-y-1.5 shrink-0">
                  <p className="font-medium text-gray-700 mb-1">知识点分类</p>
                  <div className="flex items-center gap-1 text-gray-600 bg-blue-50 px-1 rounded">
                    <span className="w-3 h-3 rounded border border-gray-300 bg-brand flex items-center justify-center">
                      <span className="text-white text-[7px]">✓</span>
                    </span>
                    <span className="text-brand font-medium">不限</span>
                    <span className="ml-auto text-gray-400">856</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▼</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>代数与函数</span>
                    <span className="ml-auto text-gray-400">186</span>
                  </div>
                  <div className="ml-3 space-y-1">
                    <div className="flex items-center gap-1 text-gray-600">
                      <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                      <span>一元二次函数</span>
                      <span className="ml-auto text-gray-400">68</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                      <span>不等式</span>
                      <span className="ml-auto text-gray-400">42</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                      <span>函数与图像</span>
                      <span className="ml-auto text-gray-400">38</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                      <span>指数和对数</span>
                      <span className="ml-auto text-gray-400">38</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>几何与图形</span>
                    <span className="ml-auto text-gray-400">142</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>统计与概率</span>
                    <span className="ml-auto text-gray-400">98</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>力学</span>
                    <span className="ml-auto text-gray-400">124</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>电磁学</span>
                    <span className="ml-auto text-gray-400">86</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>化学反应</span>
                    <span className="ml-auto text-gray-400">102</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>阅读理解</span>
                    <span className="ml-auto text-gray-400">118</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>写作技巧</span>
                    <span className="ml-auto text-gray-400">72</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>细胞生物学</span>
                    <span className="ml-auto text-gray-400">64</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="text-brand">▶</span>
                    <span className="w-3 h-3 rounded border border-gray-300 bg-white"></span>
                    <span>世界历史</span>
                    <span className="ml-auto text-gray-400">54</span>
                  </div>
                </div>

                {/* Right table - simplified for base training */}
                <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-[10px]">
                      <span className="px-2 py-1 border border-gray-200 rounded text-gray-600">筛法</span>
                      <span className="px-2 py-1 border border-gray-200 rounded text-gray-600">排序</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <span className="text-gray-500">只看收藏</span>
                      <span className="w-6 h-3 rounded-full bg-brand relative">
                        <span className="absolute right-0.5 top-0.5 w-2 h-2 rounded-full bg-white" />
                      </span>
                    </div>
                  </div>
                  <table className="w-full text-[10px]">
                    <thead>
                      <tr className="bg-gray-50 text-gray-500 text-left">
                        <th className="px-2 py-1.5 font-normal w-8"></th>
                        <th className="px-2 py-1.5 font-normal">内容</th>
                        <th className="px-2 py-1.5 font-normal">题型</th>
                        <th className="px-2 py-1.5 font-normal">错课次数</th>
                        <th className="px-2 py-1.5 font-normal">错课归因</th>
                        <th className="px-2 py-1.5 font-normal">状态</th>
                        <th className="px-2 py-1.5 font-normal">操作</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {[
                        { content: 'Q: Tom ____ in the library every night over the last three months.', format: '口语阅读', errCount: '3' },
                        { content: 'Q: Tom ____ in the library every night over the last three months.', format: '口语阅读', errCount: '3' },
                        { content: 'Q: Tom ____ in the library every night over the last three months.', format: '口语阅读', errCount: '3' },
                        { content: 'Q: Tom ____ in the library every night over the last three months.', format: '口语阅读', errCount: '3' }
                      ].map((row, i) => (
                        <tr key={i} className="border-t border-gray-100">
                          <td className="px-2 py-2">
                            <span className="w-3 h-3 rounded border border-gray-300 bg-white inline-block" />
                          </td>
                          <td className="px-2 py-2">
                            <div className="flex items-start gap-1">
                              <span className="w-2.5 h-2.5 rounded-sm bg-brand/20 mt-0.5" />
                              <span>{row.content}</span>
                            </div>
                          </td>
                          <td className="px-2 py-2">{row.format}</td>
                          <td className="px-2 py-2">{row.errCount}</td>
                          <td className="px-2 py-2"></td>
                          <td className="px-2 py-2">
                            <span className={`px-1.5 py-0.5 rounded text-[9px] ${i % 2 === 0 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                              {i % 2 === 0 ? '特复习' : '已掌握'}
                            </span>
                          </td>
                          <td className="px-2 py-2 text-brand">收藏</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Batch action bar */}
                  <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 bg-gray-50">
                    <span className="text-[10px] text-gray-500">已选 0 项</span>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 text-[10px] bg-brand text-white rounded">开始练习</button>
                      <button className="px-3 py-1 text-[10px] border border-brand text-brand rounded">查看/订正</button>
                      <button className="px-3 py-1 text-[10px] border border-gray-300 text-gray-500 rounded">移除错题</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DesktopMockup>
      </div>

      {/* TODO notice */}
      <div className="flex items-center gap-1.5 text-xs text-amber-500 bg-amber-50 px-3 py-2 rounded-lg mt-4">
        <span>⚠</span>
        <span>原型图待补充细节</span>
      </div>
    </div>
  )
}
