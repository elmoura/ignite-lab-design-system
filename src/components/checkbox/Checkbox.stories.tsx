import { Meta, StoryObj } from "@storybook/react"
import { Text } from '../text/Text'
import { CheckBox, CheckBoxProps } from "./Checkbox";

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='flex items-center gap-2'>
        {Story()}
        <Text size="sm" >Lembrar de mim por 30 dias.</Text>
      </div>
    )
  ],
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {};