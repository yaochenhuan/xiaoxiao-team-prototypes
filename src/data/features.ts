import { Feature } from './types'

export const features: Feature[] = [
  {
    id: 'homework-correction',
    moduleId: 'homework',
    name: '作业订正',
    code: 'HW-001',
    status: '规划中',
    version: 'v0.1',
    updatedAt: '2026-06-23',
    route: '/homework/homework-correction',
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
        name: '作业详情页',
        description: '查看作业详情和订正内容',
        sections: ['作业信息', '题目列表', '订正区域'],
        actions: ['提交订正', '查看解析'],
        states: ['订正成功', '订正失败']
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
    route: '/homework/homework-assignment',
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
    route: '/course/lesson-management',
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
  }
]

export const getFeatureById = (id: string): Feature | undefined => {
  return features.find(f => f.id === id)
}

export const getFeaturesByModuleId = (moduleId: string): Feature[] => {
  return features.filter(f => f.moduleId === moduleId)
}