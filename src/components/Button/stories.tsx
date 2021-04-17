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
  <div style={{ maxWidth: '42.5rem', width: '100%' }}>
    <Button {...args} />
  </div>
)

Default.args = {
  children: 'Carrinho',
}
