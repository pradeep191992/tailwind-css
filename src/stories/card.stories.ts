
import { CardComponent } from './../app/modules/card/card.component';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Card',
  component: CardComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
});

export const FirstCard = Template.bind({});
FirstCard.args = {
  primary: true,
  label: 'FirstCard',
};
export const SecondCard = Template.bind({});
SecondCard.args = {
  primary: true,
  label: 'SecondCard',
};
export const ThirdCard = Template.bind({});
ThirdCard.args = {
  primary: true,
  label: 'ThirdCard',
};
export const FourthCard = Template.bind({});
FourthCard.args = {
  primary: true,
  label: 'FourthCard',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
