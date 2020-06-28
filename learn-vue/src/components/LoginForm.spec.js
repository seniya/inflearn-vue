import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  test('아이디는 이메일 형식이 아니어야 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'testc.com',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    // const idInput = wrapper.find('#username');

    //console.log('인풋 박스의 값', idInput.element.value);
    //console.log('isUsernameValid 값', wrapper.vm.isUsernameValid);
    // console.log('warningText ', warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });

  test('id 와 pw가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'a',
          password: '',
        };
      },
    });

    const button = wrapper.find('button');
    // button.element.disabled

    expect(button.element.disabled).toBeTruthy();
  });
});
