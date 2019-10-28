import { ButtonComponent } from './app/button/button.component';

export default { title: 'My Button' };

export const withoutText = () => ({
  component: ButtonComponent
});

export const withText = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button'
  }
});

export const withEmoji = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯'
  }
});
