export interface PrototypePage {
  id: string
  name: string
  description: string
  sections?: string[]
  actions?: string[]
  states?: string[]
  sourceDocument?: string
}

export type PRDBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'code'; language?: string; text: string }
  | { type: 'callout'; tone?: 'info' | 'warn' | 'success' | 'danger'; title?: string; text: string }
  | { type: 'divider' }

export interface PRDSection {
  id: string
  title: string
  /** 简单文本内容（向后兼容） */
  content?: string
  /** 结构化内容块（推荐） */
  blocks?: PRDBlock[]
  /** 子章节 */
  children?: PRDSection[]
}

export interface PRD {
  meta: {
    productName: string
    featureName: string
    module: string
    pageCode: string
    version: string
    status: string
    updatedAt: string
    /** 修订历史 */
    revisionHistory?: { version: string; date: string; author: string; note: string }[]
    /** 文档作者 */
    author?: string
    /** 关联角色 */
    roles?: string[]
    /** 关联文档/原型链接 */
    references?: { label: string; url: string }[]
  }
  sections: PRDSection[]
}

export interface Feature {
  id: string
  moduleId: string
  name: string
  code: string
  status: '规划中' | '设计中' | '开发中' | '测试中' | '已上线'
  version: string
  versionTag?: 'LTS' | 'Beta' | 'Draft'
  priority?: 'P0' | 'P1' | 'P2' | 'P3'
  owner?: string
  updatedAt: string
  route: string
  prototypePages: PrototypePage[]
  prd: PRD
}

export interface Module {
  id: string
  name: string
  icon: string
  features: Feature[]
}
