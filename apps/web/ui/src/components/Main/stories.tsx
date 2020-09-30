import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [(Story) => <Story />],
} as Meta

export const Basic: Story = (args) => <Main {...args} />
