interface StatusBadgeProps {
  status: string
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig: Record<string, { bg: string; text: string }> = {
    '规划中': { bg: 'bg-gray-100', text: 'text-gray-600' },
    '设计中': { bg: 'bg-blue-100', text: 'text-blue-600' },
    '开发中': { bg: 'bg-yellow-100', text: 'text-yellow-600' },
    '测试中': { bg: 'bg-purple-100', text: 'text-purple-600' },
    '已上线': { bg: 'bg-green-100', text: 'text-green-600' }
  }

  const config = statusConfig[status] || { bg: 'bg-gray-100', text: 'text-gray-600' }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {status}
    </span>
  )
}