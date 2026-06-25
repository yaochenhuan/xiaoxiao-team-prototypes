import { Feature, PRDBlock } from './types'

const p = (text: string): PRDBlock => ({ type: 'paragraph', text })
const h2 = (text: string): PRDBlock => ({ type: 'heading', level: 2, text })
const h3 = (text: string): PRDBlock => ({ type: 'heading', level: 3, text })
const h4 = (text: string): PRDBlock => ({ type: 'heading', level: 3, text })
const ul = (items: string[]): PRDBlock => ({ type: 'list', items })
const ol = (items: string[]): PRDBlock => ({ type: 'list', ordered: true, items })
const tbl = (headers: string[], rows: string[][]): PRDBlock => ({ type: 'table', headers, rows })
const code = (text: string, language?: string): PRDBlock => ({ type: 'code', text, language })
const note = (title: string, text: string, tone: 'info' | 'warn' | 'success' | 'danger' = 'info'): PRDBlock => ({
  type: 'callout',
  title,
  text,
  tone,
})
const hr = (): PRDBlock => ({ type: 'divider' })

void h2; void hr  // 保留辅助函数供后续章节复用

export const features: Feature[] = [
  {
    id: 'homework-correction',
    moduleId: 'homework',
    name: '作业订正',
    code: 'HW-001',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: 'homework/homework-correction',
    prototypePages: [
      {
        id: 'page-1',
        name: '作业列表页',
        description: '学生查看待订正作业列表',
        sections: ['头部导航', '作业列表', '状态筛选'],
        actions: ['点击作业进入详情', '筛选状态'],
        states: ['空状态', '加载中']
      },
      {
        id: 'page-2',
        name: '作业订正详情页',
        description: '查看作业详情和订正内容',
        sections: ['作业信息', '题目列表', '订正区域'],
        actions: ['提交订正', '查看解析'],
        states: ['订正成功', '订正失败']
      },
      {
        id: 'page-3',
        name: 'AI 订正结果页',
        description: 'AI 自动批改订正结果',
        sections: ['批改结果', '错误分析', '改进建议'],
        actions: ['查看详情', '重新订正'],
        states: ['批改完成', '批改失败']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '作业订正',
        module: '作业',
        pageCode: 'HW-001',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'homework-assignment',
    moduleId: 'homework',
    name: '作业布置',
    code: 'HW-002',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: 'homework/homework-assignment',
    prototypePages: [
      {
        id: 'page-1',
        name: '布置作业页',
        description: '教师布置新作业',
        sections: ['作业基本信息', '题目选择', '提交设置'],
        actions: ['保存草稿', '发布作业'],
        states: ['发布成功', '发布失败']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '作业布置',
        module: '作业',
        pageCode: 'HW-002',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'question-list',
    moduleId: 'question-bank',
    name: '题目列表',
    code: 'QB-001',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: '/question-bank/question-list',
    prototypePages: [
      {
        id: 'page-1',
        name: '题目列表页',
        description: '查看和筛选题目',
        sections: ['搜索栏', '筛选条件', '题目列表'],
        actions: ['搜索题目', '筛选分类', '批量操作'],
        states: ['空状态', '加载中']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '题目列表',
        module: '题库',
        pageCode: 'QB-001',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'question-detail',
    moduleId: 'question-bank',
    name: '题目详情',
    code: 'QB-002',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: '/question-bank/question-detail',
    prototypePages: [
      {
        id: 'page-1',
        name: '题目详情页',
        description: '查看题目详细信息',
        sections: ['题目内容', '答案解析', '相关题目'],
        actions: ['编辑题目', '删除题目', '收藏题目'],
        states: ['编辑模式', '查看模式']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '题目详情',
        module: '题库',
        pageCode: 'QB-002',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'question-generate',
    moduleId: 'question-bank',
    name: '题目生成',
    code: 'QB-003',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: '/question-bank/question-generate',
    prototypePages: [
      {
        id: 'page-1',
        name: '题目生成页',
        description: 'AI生成题目',
        sections: ['生成参数', '预览区域', '操作按钮'],
        actions: ['生成题目', '保存题目', '重新生成'],
        states: ['生成中', '生成成功', '生成失败']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '题目生成',
        module: '题库',
        pageCode: 'QB-003',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'course-list',
    moduleId: 'course',
    name: '课程列表',
    code: 'CR-001',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: '/course/course-list',
    prototypePages: [
      {
        id: 'page-1',
        name: '课程列表页',
        description: '查看课程列表',
        sections: ['搜索栏', '课程卡片', '分页'],
        actions: ['搜索课程', '进入课程'],
        states: ['空状态', '加载中']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '课程列表',
        module: '课程',
        pageCode: 'CR-001',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'course-detail',
    moduleId: 'course',
    name: '课程详情',
    code: 'CR-002',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: '/course/course-detail',
    prototypePages: [
      {
        id: 'page-1',
        name: '课程详情页',
        description: '查看课程详情',
        sections: ['课程信息', '课节列表', '课程介绍'],
        actions: ['开始学习', '加入收藏'],
        states: ['已加入', '未加入']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '课程详情',
        module: '课程',
        pageCode: 'CR-002',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'lesson-management',
    moduleId: 'course',
    name: '课节管理',
    code: 'CR-003',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: 'course/lesson-management',
    prototypePages: [
      {
        id: 'page-1',
        name: '课节管理页',
        description: '管理课程课节',
        sections: ['课节列表', '操作栏', '进度统计'],
        actions: ['添加课节', '编辑课节', '删除课节'],
        states: ['编辑模式', '查看模式']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '课节管理',
        module: '课程',
        pageCode: 'CR-003',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-23'
      },
      sections: [
        { id: 'doc-info', title: '文档信息', content: 'TODO：待根据产品文档补充' },
        { id: 'background', title: '背景与目标', content: 'TODO：待根据产品文档补充' },
        { id: 'pain-points', title: '用户痛点', content: 'TODO：待根据产品文档补充' },
        { id: 'user-roles', title: '用户角色', content: 'TODO：待根据产品文档补充' },
        { id: 'scope', title: '功能范围', content: 'TODO：待根据产品文档补充' },
        { id: 'flow', title: '业务流程', content: 'TODO：待根据产品文档补充' },
        { id: 'page-spec', title: '页面说明', content: 'TODO：待根据产品文档补充' },
        { id: 'interaction', title: '交互说明', content: 'TODO：待根据产品文档补充' },
        { id: 'fields', title: '字段说明', content: 'TODO：待根据产品文档补充' },
        { id: 'data-structure', title: '数据结构', content: 'TODO：待根据产品文档补充' },
        { id: 'permission', title: '权限规则', content: 'TODO：待根据产品文档补充' },
        { id: 'exception', title: '异常状态', content: 'TODO：待根据产品文档补充' },
        { id: 'empty-state', title: '空状态', content: 'TODO：待根据产品文档补充' },
        { id: 'success-state', title: '成功状态', content: 'TODO：待根据产品文档补充' },
        { id: 'acceptance', title: '验收标准', content: 'TODO：待根据产品文档补充' },
        { id: 'roadmap', title: '后续迭代', content: 'TODO：待根据产品文档补充' },
        { id: 'questions', title: '待确认问题', content: 'TODO：待根据产品文档补充' }
      ]
    }
  },
  {
    id: 'wrong-questions',
    moduleId: 'homework',
    name: '错题',
    code: 'HW-003',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-24',
    route: 'homework/wrong-questions',
    prototypePages: [
      {
        id: 'page-1',
        name: '真题',
        description: '学生基于真题场景练习错题',
        sections: ['顶部 Tab 切换', '学情统计区', '知识点分类树', '错题列表'],
        actions: ['切换考试类型', '筛选知识点', '查看错题详情', '收藏错题', '开始练习'],
        states: ['空状态', '加载中', '已收藏', '未收藏']
      },
      {
        id: 'page-2',
        name: '基础训练',
        description: '针对错题背后的知识点进行专项巩固练习',
        sections: ['顶部 Tab 切换', '学情统计区', '知识点分类树', '错题列表'],
        actions: ['切换考试类型', '筛选知识点', '查看错题详情', '收藏错题', '开始训练'],
        states: ['空状态', '加载中', '训练中', '训练完成']
      },
      {
        id: 'page-3',
        name: '错词',
        description: '错题中出现的词汇错题本，含生词本、复习方式选择',
        sections: ['顶部 Tab 切换', '错词本统计', '生词本统计', '开始练习设置区', '错词卡片网格'],
        actions: ['切换 Tab', '选择练习数量', '选择复习方式', '开始练习', '查看单词详情', '收藏单词'],
        states: ['空状态', '加载中', '已收藏', '练习中']
      }
    ],
    prd: {
      meta: {
        productName: '校校',
        featureName: '错题',
        module: '作业',
        pageCode: 'HW-003',
        version: 'v0.1',
        status: '规划中',
        updatedAt: '2026-06-24',
        author: '产品组',
        roles: ['学生', '家长', '教师'],
        references: [
          {
            label: '原型：错题三大入口（真题/基础训练/错词）',
            url: 'https://yaochenhuan.github.io/xiaoxiao-team-prototypes/%E9%94%99%E9%A2%98/2026-06-24.html',
          },
        ],
        revisionHistory: [
          { version: 'v0.1', date: '2026-06-24', author: '产品组', note: '初稿：业务背景、用户故事、原型结构、数据库/API 设计、状态机、AI 能力规划、验收标准' },
        ],
      },
      sections: [
        // ========== 层级 0：概览 ==========
        {
          id: 'doc-info',
          title: '产品基本信息',
          blocks: [
            tbl(
              ['字段', '内容'],
              [
                ['产品名称', '校校'],
                ['功能名称', '错题（Wrong Questions）'],
                ['所属模块', '作业'],
                ['页面编号', 'HW-003'],
                ['当前版本', 'v0.1（初稿）'],
                ['状态', '规划中'],
                ['文档更新时间', '2026-06-24'],
                ['文档作者', '产品组'],
                ['涉及角色', '学生（主）、家长（旁观）、教师（管理）'],
                ['终端形态', 'PC 端 Web（响应式适配至 1024px）'],
                ['核心页面数', '3 Pages（真题 / 基础训练 / 错词）'],
                ['AI 子模块', '1 AI Module（v0.3 规划：AI 错因归因 + 错题推荐）'],
              ],
            ),
          ],
        },

        // ========== 层级 1：背景与目标 ==========
        {
          id: 'background',
          title: '背景与目标',
          blocks: [
            h3('业务背景'),
            p('当前学生作业产生的错题分散在作业批改结果中，缺乏统一的回顾与巩固入口。学生在考前无法快速定位"高频错题"和"易错知识点"，家长也无法直观看到孩子的薄弱环节。同时错题中出现的关键英文词汇没有独立的生词本可反复练习，造成"错完就忘"的低效循环。'),
            p('因此需要将所有作业错题聚拢到统一的"错题"模块，构建"真题 → 基础训练 → 错词"三层错题体系，覆盖识别、巩固、词汇三大学习闭环。'),
            h3('用户痛点'),
            ul([
              '<strong>学生：</strong>错题入口隐藏深，找不回；不知道薄弱点在哪类知识点；错词只出现一次没有独立词汇本；高频错题和一次性错题混在一起没有优先级。',
              '<strong>家长：</strong>看不懂孩子错题分布；不知道该让孩子练什么，希望系统给出"特加强"建议。',
              '<strong>教师：</strong>无法批量跟踪班级错题趋势；缺乏"知识点掌握度"汇总用于针对性辅导。',
            ]),
            h3('产品目标 / KPI'),
            tbl(
              ['指标类型', '指标', '目标值', '统计周期'],
              [
                ['用户目标', '错题回访率（错题模块日活进入率）', '≥ 40%', '上线 30 天内'],
                ['用户目标', '错题再做率（模块内"开始练习"完成率）', '≥ 60%', '月度'],
                ['用户目标', '错词收藏率', '≥ 25%', '月度'],
                ['产品目标', '首屏加载时间 P95', '< 1.5s', '实时'],
                ['产品目标', '列表筛选响应 P95', '< 300ms', '实时'],
                
              ],
            ),
            h3('用户故事（User Story）'),
            ul([
              'As a <strong>学生</strong>, I want <strong>在错题模块按知识点和考试类型筛选错题</strong>, So that <strong>我能针对本次考试重点复习</strong>。',
              'As a <strong>学生</strong>, I want <strong>把高频错题一键加入练习队列并看到错因分析</strong>, So that <strong>我能系统性地攻克薄弱知识点</strong>。',
              'As a <strong>学生</strong>, I want <strong>将错题中的英文词汇自动沉淀到错词本并支持多种复习方式</strong>, So that <strong>我能反复巩固生词</strong>。',
              'As a <strong>家长</strong>, I want <strong>看到孩子错题薄弱知识点 TOP 3 和进步趋势</strong>, So that <strong>我能直观了解孩子的学习情况</strong>。',
              'As a <strong>教师</strong>, I want <strong>查看班级错题分布与高频错因</strong>, So that <strong>我能在课堂上针对性讲解</strong>。',
            ]),
          ],
        },

        // ========== 功能范围 ==========
        {
          id: 'scope',
          title: '功能范围',
          blocks: [
            h3('本期包含（In Scope）'),
            tbl(
              ['优先级', '功能', '说明'],
              [
                ['<span class="badge-red" style="color:#dc2626;font-weight:600">Must Have</span>', '错题三大入口', '真题 / 基础训练 / 错词 三个 Tab'],
                ['<span class="badge-red" style="color:#dc2626;font-weight:600">Must Have</span>', '顶部考试类型 Tab', '新化班2026、托福、雅思、SAT、ACT、GRE、SAT机考、KET、PET、A-Level、AP（11 种）'],
                ['<span class="badge-red" style="color:#dc2626;font-weight:600">Must Have</span>', '学情统计区', '我的进步（折线图）、Top高错点归因、知识点掌握度建议 TOP 5'],
                ['<span class="badge-red" style="color:#dc2626;font-weight:600">Must Have</span>', '知识点分类树', '学科 → 知识点两级展开，联动右侧列表筛选'],
                ['<span class="badge-red" style="color:#dc2626;font-weight:600">Must Have</span>', '错题列表', '级别/题型/难度/筛法/排序/只看收藏筛选、分页、批量操作'],
                ['<span class="badge-red" style="color:#dc2626;font-weight:600">Must Have</span>', '错词本 + 生词本', '两个独立统计卡 + 练习数量 + 复习方式选择'],
                ['<span class="badge-amber" style="color:#d97706;font-weight:600">Should Have</span>', '错题收藏', '支持收藏/取消收藏，仅错题本人可操作'],
                ['<span class="badge-amber" style="color:#d97706;font-weight:600">Should Have</span>', '错词发音', '调用 SpeechSynthesis API 发音'],
              ],
            ),
            h3('本期不包含（Out of Scope）'),
            ul([
              '教师布置错题训练任务（v0.2 规划）',
              '错题导出 PDF / 打印（v0.2 规划）',
              '移动端独立 App 入口，仅响应式适配',
              'AI 智能错因分析（v0.3 规划）',
              '错题相似题推荐（v0.3 规划）',
            ]),
          ],
        },

        // ========== 业务角色与权限 ==========
        {
          id: 'user-roles',
          title: '用户角色与权限',
          blocks: [
            tbl(
              ['角色', '职责', '数据范围', '可执行操作'],
              [
                ['<strong>学生</strong><br/>（主用户）', '查看错题、巩固练习、收藏错词', '仅本人错题 / 错词', '查看、收藏、开始练习、切换考试类型、筛选知识点'],
                ['<strong>家长</strong><br/>（旁观者）', '查看孩子错题统计与薄弱知识点', '绑定孩子的错题汇总（聚合统计）', '查看（只读），不可看具体错题内容'],
                ['<strong>教师</strong><br/>（管理者）', '查看班级错题分布', '所授班级学生的错题汇总（聚合统计）', '查看（只读），v0.2 起可布置错题训练任务'],
                ['<strong>管理员</strong>', '后台管理', '全量错题 / 错词', '全量查询、统计、数据修复'],
              ],
            ),
            h3('权限边界'),
            ul([
              '学生 A 不可访问学生 B 的错题数据。',
              '家长不可看到孩子具体错题内容，只能看汇总统计（聚合层裁剪）。',
              '教师不可看到具体错题内容，只能看分布/趋势（聚合层裁剪）。',
              '收藏操作仅本人可发起（按 token 中的 user_id 鉴权）。',
            ]),
          ],
        },

        // ========== 原型结构识别 ==========
        {
          id: 'structure',
          title: '原型结构识别',
          blocks: [
            h3('页面层（Pages）'),
            tbl(
              ['页面 ID', '页面名称', '原型绑定', '页面作用', '入口', '出口'],
              [
                ['<span style="color:#1d4ed8;font-weight:600">P001</span>', '真题', 'Page 1（错题/真题页）', '学生基于真题场景练习错题', '← 左侧菜单"错题"', '→ 错题详情 / P003 错词'],
                ['<span style="color:#1d4ed8;font-weight:600">P002</span>', '基础训练', 'Page 2（错题/基础训练页）', '针对错题背后的知识点进行专项巩固', '← 二级 Tab 切换', '→ 训练详情 / 标记掌握'],
                ['<span style="color:#1d4ed8;font-weight:600">P003</span>', '错词', 'Page 3（错题/错词页）', '错题中出现的词汇错题本 + 生词本', '← 二级 Tab 切换', '→ 单词详情 / v0.2 练习模式'],
              ],
            ),
            h3('模块层（Modules）'),
            tbl(
              ['模块 ID', '模块名称', '原型绑定', '是否全局', '触发方式', '所属页面'],
              [
                ['<span style="color:#6d28d9;font-weight:600">M001</span>', '考试类型 Tab 切换', '顶部横向 Tab', '是', '点击切换', 'P001 / P002'],
                ['<span style="color:#6d28d9;font-weight:600">M002</span>', '学情统计区', 'P001 / P002 上方 3 张卡片', '否', '页面加载自动获取', 'P001 / P002'],
                ['<span style="color:#6d28d9;font-weight:600">M003</span>', '知识点分类树', 'P001 / P002 左侧树', '否', '点击展开/收起/筛选', 'P001 / P002'],
                ['<span style="color:#6d28d9;font-weight:600">M004</span>', '错题列表 + 筛选', 'P001 / P002 右侧表格', '否', '页面加载 / 筛选触发', 'P001 / P002'],
                ['<span style="color:#6d28d9;font-weight:600">M005</span>', '错词本 + 生词本', 'P003 左侧栏', '否', '页面加载自动', 'P003'],
                ['<span style="color:#6d28d9;font-weight:600">M006</span>', '练习设置区', 'P003 左侧栏中部', '否', '用户操作', 'P003'],
                ['<span style="color:#6d28d9;font-weight:600">M007</span>', '错词卡片网格', 'P003 右侧网格（2 列）', '否', '页面加载 / 筛选触发', 'P003'],
              ],
            ),
            h3('产品架构图'),
            note(
              '关键路径',
              '进入错题（默认真题） → 切换考试类型 → 筛知识点 → 查看统计 → 列表分页/筛选 → 开始练习 / 收藏 → 切到错词 → 设置练习数量/复习方式 → 开始练习（v0.2）',
              'info',
            ),
            note(
              '模块依赖',
              'M002 学情统计 ← 错题聚合服务；M003 知识点树 ← 知识点服务；M004/M007 列表 ← 错题/错词服务（带分页、筛选、缓存）',
              'warn',
            ),
          ],
        },

        // ========== 页面逐页 PRD：P001 真题 ==========
        {
          id: 'p001',
          title: 'P001 · 真题页（产品逐页解析）',
          blocks: [
            note('页面目标', '学生按考试类型 / 知识点 / 错因快速定位真题场景下的错题，并通过学情统计了解自己的进步与薄弱点。', 'info'),
            h3('区域说明'),
            tbl(
              ['区域', '位置', '内容', '对应模块'],
              [
                ['考试类型 Tab', '顶部', '新化班2026 / 托福 / 雅思 / SAT / ACT / GRE / SAT机考 / KET / PET / A-Level / AP', 'M001'],
                ['学情统计区', '上方 3 张卡', '① 我的进步（折线图 + 数值）② Top高错点（环形 + 4 类归因）③ 知识点掌握度建议 TOP 5', 'M002'],
                ['知识点分类树', '左侧 280px', '学科一级 → 知识点二级，含数量徽标，支持展开/收起/筛选', 'M003'],
                ['筛选栏', '右上方', '级别 / 题型 / 难度 / 筛法 / 排序 + "只看收藏"开关', 'M004'],
                ['错题表格', '右侧主体', '内容 / 分项 / 级别 / 题型 / 难度 / 知识点 / 错课次数 / 错课归因 / 收藏 / 状态 / 操作', 'M004'],
                ['批量操作栏', '底部固定', '已选 N 项 + "开始练习" + "查看作文"', 'M004'],
              ],
            ),
            h3('交互逻辑'),
            ol([
              '页面加载 → 展示错题列表，统计区和列表区显示 loading skeleton。',
              '用户切换考试类型 Tab → 重新加载数据，列表区显示 loading skeleton 0.5s 内完成切换。',
              '用户点击知识点二级节点 → 表格内联筛选，无 toast。',
              '用户点击筛选项 → 单选确认后关闭下拉，列表自动筛选。',
              '用户勾选错题行 → 底部批量栏"开始练习"在选中项 ≥ 1 时蓝紫高亮，否则置灰。',
              '用户点击行内星标 → 立即乐观更新；toast 反馈"已收藏"或"已取消收藏"。',
            ]),
            h3('状态变化'),
            p('<span style="color:#1d4ed8;font-weight:600">loading</span>（骨架屏） → <span style="color:#059669;font-weight:600">success</span>（数据展示） → <span style="color:#dc2626;font-weight:600">error</span>（重试按钮） → <span style="color:#d97706;font-weight:600">empty</span>（插画 + "还没有错题" + 去做作业按钮）'),
          ],
        },

        // ========== P002 基础训练 ==========
        {
          id: 'p002',
          title: 'P002 · 基础训练页（产品逐页解析）',
          blocks: [
            note('页面目标', '针对错题背后的知识点进行专项巩固练习，题目来源为"该知识点对应的训练题库"，与真题页的差异在于题目池与状态字段。', 'info'),
            h3('与 P001 真题页的差异'),
            tbl(
              ['维度', 'P001 真题', 'P002 基础训练'],
              [
                ['题目来源', '作业真题错题池', '知识点对应训练题库（AI/题官生成）'],
                ['状态字段', '待复习 / 已掌握', '待复习 / 已掌握 / 特加强'],
                ['默认排序', '按错课次数降序', '按错课次数降序 + 优先级权重'],
                ['归因字段', '错课归因（5 类）', '错课归因 + 推荐训练原因'],
                ['批量操作', '开始练习 / 查看作文', '开始训练 / 标记掌握 / 加入错题本'],
              ],
            ),
            h3('区域说明'),
            ul([
              '<strong>考试类型 Tab（M001）</strong>：与 P001 复用同一组件，但默认选项切换为"新化班2026"，因基础训练主要服务于校内体系。',
              '<strong>学情统计区（M002）</strong>：复用同一组件，统计口径切换为"训练题库"维度。',
              '<strong>知识点分类树（M003）</strong>：复用同一组件，二级节点文案增加"推荐训练"标签。',
              '<strong>训练题目列表（M004 变体）</strong>：列头为"训练题 / 知识点 / 难度 / 错课次数 / 状态 / 操作"，操作列含"开始训练"和"标记掌握"。',
            ]),
            h3('交互逻辑'),
            ol([
              '用户进入 P002 → 默认展示最近一周内的高频错题知识点对应的训练题。',
              '点击知识点 → 列表筛选出该知识点下的训练题。',
              '点击"开始训练" → 弹出训练模式引导（v0.2 启用训练模式 v0.1 仅占位）。',
              '点击"标记掌握" → 立即乐观更新状态。',
            ]),
          ],
        },

        // ========== P003 错词 ==========
        {
          id: 'p003',
          title: 'P003 · 错词页（产品逐页解析）',
          blocks: [
            note('页面目标', '错题中出现的关键词汇自动沉淀到错词本，支持按复习方式（英译中 / 听音辨词等）反复训练，弥补"错完就忘"的低效循环。', 'info'),
            h3('区域说明'),
            tbl(
              ['区域', '位置', '内容', '对应模块'],
              [
                ['错词本统计', '左上方卡', '错词总数 + 近 7 天新增', 'M005'],
                ['生词本统计', '左中卡', '生词总数 + 重点词汇数', 'M005'],
                ['练习设置区', '左中下', '练习数量（10/20/50/100）+ 复习方式（英译中 / 听音辨词 / 拼写 / 看义选词）', 'M006'],
                ['筛选栏', '右上方', '排序（错误数/最近错误/字母 A-Z）+ "只看收藏"开关 + 搜索框', 'M007'],
                ['错词卡片网格', '右侧 2 列', '单词 / 美音+英音+发音按钮 / 中文释义 / 英文例句 / 中文例句 / 错误数 / 星标收藏', 'M007'],
                ['分页', '右下角', '每页 20/50/100 切换 + 页码跳转', 'M007'],
              ],
            ),
            h3('错词卡片结构'),
            code(
`┌──────────────────────────────────────────┐
│  abandon                                ★ │
│  /əˈbændən/   /əˈbændən/       [🔊 发音] │
│  v. 放弃；抛弃；遗弃                      │
│  例：He abandoned his car in the snow.   │
│  他在雪地里抛弃了他的车。                   │
│  错误数：3    收藏：是                    │
└──────────────────────────────────────────┘`,
              'text',
            ),
            h3('交互逻辑'),
            ol([
              '页面加载 → 展示错词列表，统计区显示加载态。',
              '用户设置"练习数量" → 默认 20，下拉选择后仅前端状态变更，点击"开始练习"才提交（v0.2）。',
              '用户切换"复习方式" → 单选 chip，选中态蓝紫描边。',
              '用户点击发音按钮 → 调用 <code>speechSynthesis.speak(utterance)</code>；不支持时降级为静态图标 + 提示。',
              '用户点击星标 → 立即乐观更新。',
              '用户点击单词卡片 → 展开单词详情（弹层 v0.2）。',
            ]),
          ],
        },

        // ========== 模块设计说明 ==========
        {
          id: 'modules',
          title: '模块设计说明',
          blocks: [
            h3('M001 — 考试类型 Tab 切换'),
            p('原型绑定：P001 / P002 顶部横向 Tab。支持 11 种考试类型，单选；选中态蓝紫底浅色 + 文字，未选中灰色。横向溢出时支持滚动。'),
            h3('M002 — 学情统计区'),
            p('原型绑定：P001 / P002 上方 3 张卡片。包含：① 我的进步（折线图 + 数值，正负号 + 整数 %）；② Top高错点（环形 + 4 类归因百分比）；③ 知识点掌握度建议 TOP 5。'),
            h3('M003 — 知识点分类树'),
            p('原型绑定：P001 / P002 左侧 280px 区域。支持多选知识点，默认选中"不限"展示全部数据。一级节点：三角箭头 ▶/▼ 表示展开/收起；二级节点：复选框 + 文字 + 数量徽标；选中态：浅蓝底 + 蓝紫文字。'),
            h3('M004 — 错题列表 + 筛选'),
            p('原型绑定：P001 / P002 右侧主体表格。5 个筛选 + 1 个开关 + 排序，支持单选/全选，行 hover 浅灰底，状态徽标带颜色。'),
            h3('M005 — 错词本 + 生词本'),
            p('原型绑定：P003 左侧栏。错词本来自做题中实际出错的词汇，生词本来自用户主动加入的生词；两个统计卡独立计数。'),
            h3('M006 — 练习设置区'),
            p('原型绑定：P003 左侧栏中部。提供"练习数量"下拉（10/20/50/100，默认 20）和"复习方式"chip 单选（v0.1 支持英译中、看义选词；v0.2 支持听音辨词、拼写）。'),
            h3('M007 — 错词卡片网格'),
            p('原型绑定：P003 右侧 2 列网格。每张卡片含单词、双音标、发音按钮、释义、英文例句、中文翻译、错误数、星标。支持 hover 阴影效果。'),
          ],
        },

        // ========== UI 原型映射 ==========
        {
          id: 'proto-map',
          title: 'UI 原型映射',
          blocks: [
            h3('页面 → 原型映射总表'),
            tbl(
              ['页面 ID', '页面名称', '原型图', '核心区域数', '弹窗数', '关键交互'],
              [
                ['P001', '真题', 'Page 1', '6 区域', '无', '切换考试类型 / 筛选 / 收藏 / 开始练习'],
                ['P002', '基础训练', 'Page 2', '6 区域', '无', '标记掌握 / 开始训练 / 切换状态'],
                ['P003', '错词', 'Page 3', '6 区域', '单词详情（v0.2）', '设置练习 / 发音 / 收藏 / 搜索'],
              ],
            ),
            h3('页面区域 → 模块映射'),
            tbl(
              ['页面 ID', '区域位置', '包含模块', '原型图位置'],
              [
                ['P001', '顶部横向 Tab', 'M001 考试类型', 'Page 1 顶部'],
                ['P001', '上方 3 张卡', 'M002 学情统计', 'Page 1 上方'],
                ['P001', '左侧 280px', 'M003 知识点树', 'Page 1 左侧'],
                ['P001', '右侧主体 + 底部固定', 'M004 错题列表 + 批量栏', 'Page 1 主体'],
                ['P002', '顶部 + 上方 + 左侧 + 右侧', 'M001 / M002 / M003 / M004 变体', 'Page 2'],
                ['P003', '左栏 + 右栏', 'M005 / M006 / M007', 'Page 3'],
              ],
            ),
          ],
        },

        // ========== 验收标准 ==========
        {
          id: 'acceptance',
          title: '验收标准',
          blocks: [
            h3('5.1 功能性验收（Functional Acceptance Criteria）'),
            h4('P001 真题页'),
            ul([
              '顶部 11 种考试类型 Tab 可正常切换，每次切换 < 1s 内刷新数据。',
              '学情统计 3 张卡片数值与后端一致（progress_pct、consolidation、knowledge_tips）。',
              '知识点分类树两级展开/收起正常，支持多选，默认选中"不限"。二级节点数量统计准确。',
              '错题列表 5 个筛选 + 1 个开关 + 排序组合生效，分页正常。',
              '行 hover 浅灰底，星标点击立即反馈，toast 正确展示。',
              '批量勾选 ≥ 1 项时"开始练习"按钮蓝紫高亮，否则置灰。',
            ]),
            h4('P002 基础训练页'),
            ul([
              '与 P001 共享同一布局，题目池与状态字段正确切换。',
              '"标记掌握"操作后状态从"待复习"变"已掌握"，列表立即更新。',
              '默认排序按 err_count desc 展示。',
            ]),
            h4('P003 错词页'),
            ul([
              '错词本 / 生词本两个统计卡数字与后端一致。',
              '练习数量下拉默认 20，复习方式 chip 单选生效。',
              '错词卡片 2 列网格布局，hover 出现阴影。',
              '点击发音按钮调用 SpeechSynthesis API，不支持时降级为静态图标 + 提示。',
              '"只看收藏"开关过滤生效，空列表展示"暂无收藏错词"。',
              '搜索框输入关键词，列表按 word 模糊匹配。',
            ]),
            h3('5.2 UI 状态验收'),
            tbl(
              ['状态', 'P001 / P002', 'P003'],
              [
                ['loading', '统计区 + 列表区同时骨架屏', '统计区 + 卡片网格骨架屏'],
                ['empty', '插画 + "还没有错题" + 去做作业按钮', '插画 + "错词本是空的，做题积累起来吧"'],
                ['error', '列表区"加载失败，点击重试"按钮', '网格区"加载失败，点击重试"按钮'],
                ['partial', '"只看收藏"开关打开后空：表格区"暂无收藏错题"', '"只看收藏"开关打开后空：网格区"暂无收藏错词"'],
                ['success', '数据正常展示，行 hover 有交互', '卡片网格正常展示，hover 有阴影'],
              ],
            ),
            h3('5.3 性能 & SLA 标准'),
            tbl(
              ['模块', 'SLA（P95）', '说明'],
              [
                ['首屏加载（PC）', '<1.5s', '骨架屏 + 渐进渲染'],
                ['列表筛选响应', '<300ms', '前端 debounce 200ms'],
                ['AI 错因归因（v0.3）', '<2.5s', '≤¥0.03/次'],
                ['AI 错题推荐（v0.3）', '<3s', '≤¥0.05/次'],
              ],
            ),
            h3('5.4 兼容性'),
            ul([
              'Chrome 90+ / Edge 90+ / Safari 14+ / Firefox 88+。',
              '分辨率 ≥ 1280×720；1024-1280 可用（响应式），< 1024 提示"请使用大屏访问"。',
              'SpeechSynthesis API 不可用时优雅降级（不发音按钮置灰 + tooltip 提示）。',
            ]),
            h3('5.5 边界场景验收'),
            ul([
              '网络断开：列表区显示"网络异常，请稍后重试"，按钮"重试"，已输入数据不丢失。',
              '网络恢复：自动重试未完成的请求。',
              '快速重复点击星标：200ms 防抖合并，仅发送一次请求。',
              '错题数 > 1000：分页上限 50/页，提示"数据量较大，建议筛选"。',
              'Token 过期：引导重新登录，保留当前 examType/筛选条件。',
              '并发冲突：A 标签页收藏，B 标签页刷新时拉取最新状态。',
              '音标包含非法字符：保存校验失败，提示"音标格式不正确"。',
              '错题内容 > 2000 字：列表截断 200 字 + "展开"按钮，详情页展示完整。',
            ]),
            h3('5.6 数据准确性'),
            ul([
              '我的进步 = (本周错题数 - 上周错题数) / 上周错题数 × 100%，四舍五入到整数。',
              '错题归因占比 = 该归因数 / 总错题数 × 100%，四舍五入到整数。',
              '知识点掌握度建议 = 1 - 知识点错题数 / 知识点总做题数，结果 × 100% 倒序取前 5。',
              '错词错误数 = 关联错题数 + 独立练习错误次数。',
              'err_count > 9999 显示"9999+"。',
            ]),
          ],
        },

        // ========== 后续迭代 ==========
        {
          id: 'roadmap',
          title: '后续迭代规划',
          blocks: [
            tbl(
              ['版本', '时间', '功能'],
              [
                ['<strong>v0.1</strong>', '2026-Q3', '三大入口（真题/基础训练/错词）、知识点树、列表筛选、收藏、错词卡片'],
                ['<strong>v0.2</strong>', '2026-Q4', '"开始练习"闭环（批量进入练习模式）、单词详情弹层、教师视角（班级错题趋势）'],
                ['<strong>v0.3</strong>', '2027-Q1', 'AI 错因归因（AI-CAP-001）、AI 错题推荐（AI-CAP-002）、AI 错词 SRS（AI-CAP-003）'],
                ['<strong>v0.4</strong>', '2027-Q2', '薄弱知识点解读（AI-CAP-004）、错题导出 PDF、家长端推送'],
                ['<strong>v1.0</strong>', '2027-Q3', '移动端 App 独立入口、多端同步、与直播课/模考系统打通'],
              ],
            ),
          ],
        },

        // ========== 需求评审会议稿 ==========
        {
          id: 'meeting',
          title: '需求评审会议稿',
          blocks: [
            note('30 秒背景', '本功能解决学生在错题环节"找不回、不会做、记不住"三大问题，覆盖 3 个核心页面（真题 / 基础训练 / 错词），形成"识别 → 巩固 → 词汇"的三层错题体系。', 'info'),
            h3('用户主流程'),
            ol([
              '<strong>P001 真题：</strong>学生进入错题模块（默认真题 Tab） → 切换考试类型 → 筛知识点 → 看学情统计 → 列表分页/筛选 → 收藏 / 开始练习。',
              '<strong>P002 基础训练：</strong>切换到基础训练 Tab → 查看训练题 → 标记掌握 / 开始训练。',
              '<strong>P003 错词：</strong>切换到错词 Tab → 设置练习数量 / 复习方式 → 查看错词卡片 → 收藏 / 发音。',
            ]),
            h3('核心决策点（待评审）'),
            ul([
              '1. 考试类型是否 v0.1 就支持 11 种，还是先上线托福 / 雅思 / SAT 三种？',
              '2. 学情统计的"我的进步"是否需要按日 / 周 / 月切换？',
              '3. 错题归因是 AI 自动判断（v0.3）还是学生手动选择（v0.1）？',
              '4. 错词"复习方式"v0.1 仅支持"英译中 / 看义选词"两种，是否够用？',
              '5. 教师布置错题训练任务是否提前到 v0.1？',
              '6. 家长端是否在 v0.1 提供"孩子错题汇总"页面？',
            ]),
            h3('待确认事项'),
            ul([
              '☐ 错题范围：是否仅"作业错题"，还是包含"模考错题"？',
              '☐ 错题是否需要按学科分组（数学 / 物理 / 英语）？',
              '☐ 错词本是否需要支持自定义分组（按考试 / 按学科）？',
              '☐ "开始练习"的题目来源：仅本错题 / 包含相似推荐？',
              '☐ 知识点分类树已支持多选，默认"不限"展示全部数据。',
              '☐ 错题列表是否需要支持"重做历史"显示？',
              '☐ 数据权限：家长可见的具体颗粒度（仅统计 / 含错题详情 / 含错词详情）？',
            ]),
          ],
        },

        // ========== 变更记录 ==========
        {
          id: 'changelog',
          title: 'PRD 变更记录',
          blocks: [
            h3('修订历史'),
            tbl(
              ['版本', '日期', '作者', '变更说明'],
              [
                ['v0.1', '2026-06-24', '产品组', '初稿：业务背景、用户故事、原型结构、3 页面逐页 PRD、3 张数据库表 + 1 张统计表 DDL、11 个 API 详细规格、3 个状态机、前端组件树 + Pinia 状态管理、4 个 AI 能力规划（v0.3 启用）、功能性 + UI 状态 + 性能 SLA + 边界场景验收、需求评审会议稿'],
              ],
            ),
          ],
        },
      ],
    },
  },
]

export const getFeatureById = (id: string): Feature | undefined => {
  return features.find(f => f.id === id)
}

export const getFeaturesByModuleId = (moduleId: string): Feature[] => {
  return features.filter(f => f.moduleId === moduleId)
}