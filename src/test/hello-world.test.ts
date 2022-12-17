import { mount } from '@vue/test-utils';
import HelloWorld from '../components/HelloWorld.vue';

describe('App component test', () => {
  test('should render component', () => {
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Vite + Vue',
      },
    });

    expect(wrapper.text()).toContain('Vite + Vue');
  });
});
