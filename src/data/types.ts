export interface PrototypePage {
  id: string
  name: string
  description: string
  sections?: string[]
  actions?: string[]
  states?: string[]
  sourceDocument?: string
}

export interface PRDSection {
  id: string
  title: string
  content: string
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