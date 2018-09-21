import { mount } from '@vue/test-utils';
import VStyle from '@/VStyle';

describe('Cammel Case arg: v-style:backgroundColor', () => {
  const component = {
    template: `
        <h1 v-style:backgroundColor="backgroundColor"></h1>
      `,
    directives: {
      style: VStyle
    },
    data() {
      return {
        backgroundColor: 'red'
      };
    }
  };

  describe('First state evaluation', () => {
    const wrapper = mount(component);

    it('red', () => {
      expect(wrapper.find('h1').element.style.backgroundColor).toBe('red');
    });
  });

  describe('Update evaluation', () => {
    const wrapper = mount(component);

    it('red -> yellow', () => {
      wrapper.setData({
        backgroundColor: 'yellow'
      });

      expect(wrapper.find('h1').element.style.backgroundColor).toBe('yellow');
    });
  });
});

describe('Kebab Case arg: v-style:background-color', () => {
  const component = {
    template: `
        <h1 v-style:background-color="backgroundColor"></h1>
      `,
    directives: {
      style: VStyle
    },
    data() {
      return {
        backgroundColor: 'red'
      };
    }
  };

  describe('First state evaluation', () => {
    const wrapper = mount(component);

    it('red', () => {
      expect(wrapper.find('h1').element.style.backgroundColor).toBe('red');
    });
  });

  describe('Update evaluation', () => {
    const wrapper = mount(component);

    it('red -> yellow', () => {
      wrapper.setData({
        backgroundColor: 'yellow'
      });

      expect(wrapper.find('h1').element.style.backgroundColor).toBe('yellow');
    });
  });
});