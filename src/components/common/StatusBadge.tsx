interface StatusBadgeProps {
  status: string
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
    '规划中': { bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' },
    '设计中': { bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-500' },
    '开发中': { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500' },
    '测试中': { bg: 'bg-purple-50', text: 'text-purple-600', dot: 'bg-purple-500' },
    '已上线': { bg: 'bg-green-50', text: 'text-green-600', dot: 'bg-green-500' }
  }

  const config = statusConfig[status] || statusConfig['规划中']

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status}
    </span>
  )
}
