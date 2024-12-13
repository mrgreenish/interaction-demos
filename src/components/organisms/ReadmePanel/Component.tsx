import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { FormattedText } from "@components/organisms/Timeline/FormattedText/Component"
import { MoreDetailsButton } from "@/components/atoms/MoreDetailsButton/Component"

interface Props {
  title: string
  description: string
}

export const ReadmePanel = ({ title, description }: Props): JSX.Element => {
  return (
    <Drawer>
      <MoreDetailsButton />
      <DrawerContent className="max-h-[100vh] overflow-hidden">
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>
              <FormattedText html={description} />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}