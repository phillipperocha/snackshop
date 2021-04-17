import { Story, Meta } from '@storybook/react/types-6-0'

import Header from '.'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    children: {
      type: 'string',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story = ({ children, ...args }) => (
  <div style={{ minWidth: '418px' }}>
    <Header {...args}>{children}</Header>
  </div>
)

Default.args = {
  children: 'Monte seu cento de salgado (1, 2 ou 4 opções)',
}

export const WithBanner: Story = ({ children, ...args }) => (
  <div style={{ minWidth: '418px' }}>
    <Header {...args}>{children}</Header>
  </div>
)

WithBanner.args = {
  children: 'Monte seu cento de salgado (1, 2 ou 4 opções)',
  withBanner: true,
  bannerText: (
    <>
      ESCOLHEU <strong>COXINHA</strong> GANHOU DESCONTO DE <strong>10%</strong>{' '}
      NO SEU CENTO DE SALGADOS
    </>
  ),
}
