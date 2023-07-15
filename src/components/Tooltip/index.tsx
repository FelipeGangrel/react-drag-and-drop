import * as RTooltip from '@radix-ui/react-tooltip'
import type { FC, ReactNode } from 'react'

type Props = {
  content: ReactNode
  portalProps?: RTooltip.PortalProps
  asChild?: boolean
} & RTooltip.TooltipContentProps

export const Tooltip: FC<Props> = ({
  children,
  content,
  asChild,
  ...props
}) => {
  return (
    <RTooltip.Root>
      <RTooltip.Trigger asChild={asChild}>{children}</RTooltip.Trigger>
      <RTooltip.Content
        {...props}
        sideOffset={5}
        className="select-none rounded-md bg-slate-800 px-4 py-2 text-xs leading-none text-white will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-sky-100 dark:text-black"
      >
        {content}
        <RTooltip.Arrow className="fill-slate-800 dark:fill-sky-100" />
      </RTooltip.Content>
    </RTooltip.Root>
  )
}
