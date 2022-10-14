import { Envelope } from 'phosphor-react';
import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      [
        <TextInput.Icon children={<Envelope />} />,
        <TextInput.Input placeholder="type your e-mail address" />
      ]
    ),
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  }
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};

export const WithoutIcon: StoryObj<TextInputProps> = {
  args: {
    children: (
      <TextInput.Input placeholder='example@email.com' type={'email'} />
    )
  }
};