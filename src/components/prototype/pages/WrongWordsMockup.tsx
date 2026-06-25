import DesktopMockup from '../DesktopMockup'

interface WrongWordsMockupProps {
  featureCode: string
  pageIndex: number
}

interface WordItem {
  word: string
  phoneticUs: string
  phoneticUk: string
  cn: string
  exampleEn: string
  exampleCn: string
  errCount: number
  starred?: boolean
}

const wordList: WordItem[] = [
  { word: 'between', phoneticUs: 'bɪtwiːn', phoneticUk: 'bɪˈtwiːn', cn: 'prep.在（两者）之间；在......中间', exampleEn: 'There is a close connection between pain and tension', exampleCn: '疼痛和紧张之间有着紧密的联系。', errCount: 13, starred: true },
  { word: 'bedroom', phoneticUs: 'ˈbedrʊm', phoneticUk: 'ˈbedruːm', cn: 'n.卧室', exampleEn: 'Her bedroom curtains were drawn.', exampleCn: '她卧室的窗帘拉上了。', errCount: 12 },
  { word: 'ball', phoneticUs: 'bɔːl', phoneticUk: 'bɒl', cn: 'n.球', exampleEn: 'Thomas screwed the letter up into a ball.', exampleCn: '托马斯把信揉成一团。', errCount: 12 },
  { word: 'February', phoneticUs: 'ˈfebrʊəri', phoneticUk: 'ˈfebruəri', cn: 'n.二月', exampleEn: 'In February 1967, he introduced the Shipbuilding Industry Bill.', exampleCn: '1967年2月,他提出了造船工业议案。', errCount: 11 },
  { word: 'word', phoneticUs: 'wɜːd', phoneticUk: 'wɜːd', cn: 'n.单词', exampleEn: '', exampleCn: '', errCount: 11 },
  { word: 'nor', phoneticUs: 'nɔː', phoneticUk: 'nɔː', cn: 'conj.也不', exampleEn: 'If he won\'t go, nor shall I.', exampleCn: '他若不去，我也不去。', errCount: 13, starred: true },
  { word: 'letter', phoneticUs: 'ˈletə', phoneticUk: 'ˈletə', cn: 'n.信;字母', exampleEn: 'I have received your letter. The first letter should be capitalized.', exampleCn: '我收到了你的信。首字母要大写。', errCount: 12 },
  { word: 'meet', phoneticUs: 'miːt', phoneticUk: 'miːt', cn: 'met met', exampleEn: 'How did you come to meet him?', exampleCn: '你是怎么见到他的？', errCount: 11 },
  { word: 'where', phoneticUs: 'weə', phoneticUk: 'hweə', cn: 'adv.在哪里', exampleEn: 'Aha! So that\'s where I left it!', exampleCn: '啊哈！原来我把它丢在这儿了！', errCount: 11 }
]

export default function WrongWordsMockup({ featureCode, pageIndex }: WrongWordsMockupProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
            {pageIndex}
          </span>
          <span className="text-sm font-semibold text-gray-800">错词 - 错词本</span>
        </div>
        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
          {featureCode}-{String(pageIndex).padStart(2, '0')}
        </span>
      </div>

      <div className="flex justify-center overflow-x-auto">
        <DesktopMockup title="错题/错词" width={1000}>
          {/* Top bar with tabs */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 h-10">
            <div className="flex items-center gap-6 text-xs">
              <span className="text-gray-500">真题</span>
              <span className="text-gray-500">基础训练</span>
              <span className="text-brand border-b-2 border-brand h-10 flex items-center -mb-px font-medium">错词</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="w-4 h-4 rounded-full bg-gray-200" />
              <span className="w-4 h-4 rounded-full bg-amber-200" />
              <span className="w-4 h-4 rounded-full bg-orange-200" />
            </div>
          </div>

          <div className="flex">
            {/* Left sidebar */}
            <div className="w-44 border-r border-gray-200 p-3 shrink-0">
              {/* Stats cards */}
              <div className="border border-gray-200 rounded-lg p-2.5 mb-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[7px]">N</span>
                  <span className="text-[10px] text-gray-500">错词本</span>
                </div>
                <p className="text-2xl font-bold text-brand">1457</p>
                <p className="text-[9px] text-gray-400 mt-0.5">本词本共有错词数 1457</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-2.5 mb-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500 flex items-center justify-center text-white text-[7px]">P</span>
                  <span className="text-[10px] text-gray-500">生词本</span>
                </div>
                <p className="text-2xl font-bold text-amber-500">79</p>
                <p className="text-[9px] text-gray-400 mt-0.5">生词本有生词数 79</p>
              </div>

              {/* Start practice */}
              <div className="border border-gray-200 rounded-lg p-2.5">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-amber-500 text-[10px]">▶</span>
                  <span className="text-[10px] text-gray-700 font-medium">开始练习</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-[9px] text-gray-500 mb-0.5">练习单词数量</p>
                    <div className="border border-gray-200 rounded px-2 py-1 text-[10px] text-gray-600 bg-white">
                      20 个 ▾
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-500 mb-0.5">复习方式</p>
                    <div className="border border-gray-200 rounded px-2 py-1 text-[10px] text-gray-600 bg-white">
                      英语中 → 听音辨词 ▾
                    </div>
                  </div>
                  <button className="w-full bg-brand text-white text-[10px] py-1.5 rounded mt-1">
                    开始练习
                  </button>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 p-3">
              {/* Filter bar */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-2 py-1 border border-gray-200 rounded text-gray-600">排序 ▾</span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <span className="w-3 h-3 rounded-sm bg-brand" />
                    <span>只看收藏</span>
                  </span>
                </div>
                <div className="border border-gray-200 rounded px-2 py-1 text-[10px] text-gray-400 w-40">
                  请输入搜索内容
                </div>
              </div>

              {/* Words grid */}
              <div className="grid grid-cols-2 gap-2">
                {wordList.map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded p-2.5 relative">
                    <div className="absolute top-2 left-2">
                      <span className="w-3 h-3 rounded border border-gray-300 bg-white inline-block" />
                    </div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1 pl-4">
                      <span className="text-xs font-semibold text-gray-800">{item.word}</span>
                      <div className="flex items-center gap-1 text-[9px] text-gray-400">
                        <span>错误数: {item.errCount}</span>
                        {item.starred && <span className="text-yellow-400">★</span>}
                      </div>
                    </div>
                    {/* Phonetic */}
                    <div className="flex items-center gap-2 text-[9px] text-gray-500 mb-1.5">
                      <span>美 [{item.phoneticUs}]</span>
                      <span>🔊</span>
                      <span>英 [{item.phoneticUk}]</span>
                      <span>🔊</span>
                    </div>
                    {/* CN meaning */}
                    <p className="text-[10px] text-gray-700 mb-1">{item.cn}</p>
                    {/* Example */}
                    {item.exampleEn && (
                      <>
                        <p className="text-[9px] text-gray-500 leading-snug">{item.exampleEn}</p>
                        <p className="text-[9px] text-gray-400 leading-snug">{item.exampleCn}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-end gap-1 mt-3 text-[10px] text-gray-500">
                <span className="px-1.5 py-0.5 rounded bg-brand text-white">1</span>
                <span className="px-1.5 py-0.5 rounded">2</span>
                <span className="px-1.5 py-0.5 rounded">3</span>
                <span>...</span>
                <span className="px-1.5 py-0.5 rounded">10</span>
              </div>

              {/* Batch action bar */}
              <div className="flex items-center justify-between mt-3 px-3 py-2 border-t border-gray-200 bg-gray-50 rounded">
                <span className="text-[10px] text-gray-500">已选 0 个</span>
                <button className="px-3 py-1 text-[10px] border border-gray-300 text-gray-500 rounded">移除错词</button>
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
