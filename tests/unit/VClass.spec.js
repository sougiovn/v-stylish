import { mount } from '@vue/test-utils';
import VClass from '@/VClass';

describe('v-class:is-blue', () => {
  const component = {
    template: `
        <h1 v-class:is-blue="isBlueClassActive"></h1>
      `,
    directives: {
      class: VClass
    },
    data() {
      return {
        isBlueClassActive: false
      };
    }
  };

  describe('First state evaluation', () => {
    it('false', () => {
      const wrapper = mount(component);


      expect(wrapper.find('h1').element.classList.contains('is-blue')).toBeFalsy();
    });

    it('true', () => {
      const wrapper = mount(component, {
        data() {
          return {
            isBlueClassActive: true
          };
        }
      });

      expect(wrapper.find('h1').element.classList.contains('is-blue')).toBeTruthy();
    });
  });

  describe('Update evaluation', () => {
    const wrapper = mount(component);

    it('false -> true', () => {
      wrapper.setData({
        isBlueClassActive: true
      });

      expect(wrapper.find('h1').element.classList.contains('is-blue')).toBeTruthy();
    });

    it('true -> false', () => {
      wrapper.setData({
        isBlueClassActive: false
      });

      expect(wrapper.find('h1').element.classList.contains('is-blue')).toBeFalsy();
    });
  });
});