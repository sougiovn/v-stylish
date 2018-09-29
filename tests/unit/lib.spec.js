import { mount, createLocalVue } from '@vue/test-utils';
import vStylish from '@/lib';

describe('vStylish Plugin', () => {
  const component = {
    template: `
        <h1 v-class:is-blue="isBlueClassActive" v-style:backgroundColor="backgroundColor"></h1>
      `,
    data() {
      return {
        isBlueClassActive: true,
        backgroundColor: 'blue'
      };
    }
  };

  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(global.console, 'error');
  });


  it("didn't installed plugin", () => {
    mount(component);

    expect(console.error).toHaveBeenCalledTimes(2);
  });

  it('install directives by using plugin', () => {
    const localVue = createLocalVue();

    localVue.use(vStylish);

    const wrapper = mount(component, {
      localVue
    });

    expect(console.error).not.toBeCalled();

    expect(wrapper.find('h1').element.classList.contains('is-blue')).toBeTruthy();
    expect(wrapper.find('h1').element.style.backgroundColor).toBe('blue');
  });

});