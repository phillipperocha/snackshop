import { Story, Meta } from '@storybook/react/types-6-0'
import ItemList from '.'

export default {
  title: 'ItemList',
  component: ItemList,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story = (args) => (
  <ItemList {...args}>
    <li>Coxinha</li>
    <li>Pastel de carne</li>
    <li>Pastel de queijo</li>
    <li>Esfirra</li>
  </ItemList>
)
