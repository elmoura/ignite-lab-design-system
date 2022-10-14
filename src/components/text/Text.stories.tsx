import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    asChild: false,
    children: 'Lorem Ipsum.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: { disable: true }
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with p tag</p>
    )
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  }
};