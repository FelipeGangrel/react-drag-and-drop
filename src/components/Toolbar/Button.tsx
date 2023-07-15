import type { FC, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Tooltip } from '@/components/Tooltip'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  tooltip?: string
}

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <Tooltip content={props.tooltip} asChild>
      <button
        type="button"
        {...props}
        className={twMerge(
          'rounded-md p-1 text-sky-600 transition-colors duration-300 hover:bg-sky-200 hover:text-sky-700 dark:text-sky-200',
          props.className,
        )}
      >
        {children}
      </button>
    </Tooltip>
  )
}
