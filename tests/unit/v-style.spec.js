import { mount } from '@vue/test-utils';
import vStyle from '@/v-style';

describe('Cammel Case arg: v-style:backgroundColor', () => {
  const component = {
    template: `
        <h1 v-style:backgroundColor="backgroundColor"></h1>
      `,
    directives: {
      style: vStyle
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
      style: vStyle
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

describe('Arg with modifier: v-style:padding.px', () => {
  const component = {
    template: `
        <h1 v-style:padding.px="padding"></h1>
      `,
    directives: {
      style: vStyle
    },
    data() {
      return {
        padding: null
      };
    }
  };

  describe('First state evaluation', () => {
    it('null', () => {
      const wrapper = mount(component);

      expect(wrapper.find('h1').element.style.padding).toBe('');
    });

    it('10', () => {
      const wrapper = mount(component, {
        data() {
          return {
            padding: 10
          };
        }
      });

      expect(wrapper.find('h1').element.style.padding).toBe('10px');
    });
  });

  describe('Update evaluation', () => {
    const wrapper = mount(component);

    it('null -> 100', () => {
      wrapper.setData({
        padding: 100
      });

      expect(wrapper.find('h1').element.style.padding).toBe('100px');
    });
  });
});