import { Module } from './types'

export const modules: Module[] = [
  {
    id: 'homework',
    name: '作业',
    icon: '📝',
    features: []
  },
  {
    id: 'question-bank',
    name: '题库',
    icon: '📚',
    features: []
  },
  {
    id: 'course',
    name: '课程',
    icon: '🎓',
    features: []
  }
]

export const getModuleById = (id: string): Module | undefined => {
  return modules.find(m => m.id === id)
}