import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface Props {
  title: string
  description: string
}

export const ReadmePanel = ({ title, description }: Props): JSX.Element => {

  return (
    <Drawer>
      <DrawerTrigger>More details</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{ title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )

}