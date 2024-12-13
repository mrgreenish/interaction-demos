import { DrawerTrigger } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

interface Props {
  className?: string
}

export const MoreDetailsButton = ({ className }: Props): JSX.Element => {
  return (
    <DrawerTrigger className={cn(
      "px-4 py-2 my-4 bg-white text-black border border-gray-200 rounded-sm hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200",
      className
    )}>
      More details
    </DrawerTrigger>
  )
} 