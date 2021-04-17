import { Story, Meta } from '@storybook/react/types-6-0'
import theme from 'styles/theme'

import ReturnArrowIcon from '.'

export default {
  title: 'ReturnArrowIcon',
  component: ReturnArrowIcon,
} as Meta

export const Default: Story = (args) => <ReturnArrowIcon {...args} />

Default.args = {
  size: '20px',
  color: theme.colors.primary,
}
