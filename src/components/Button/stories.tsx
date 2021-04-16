import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: '42.5rem' }}>
    <Button {...args} />
  </div>
)

Default.args = {
  children: 'Carrinho',
}
