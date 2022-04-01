import React from "react";
import { LoginPage } from "../components/LoginPage";
import ShallowRenderer from 'react-test-renderer/shallow';
import { configure ,shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from "enzyme/build";

configure({ adapter: new Adapter() });

it("check button click",()=> {
    const renderer = shallow(<LoginPage/>);
    //renderer.find('#btn-submit').simulate('click');
    expect(renderer).toMatchSnapshot();
})

it('should button disable', () => {
    const wrapper = mount(<LoginPage />);
    const submitButton = wrapper.find();
})


it("check for test cases",()=> {
    const renderer = new ShallowRenderer();
    renderer.render(<LoginPage />);
    expect(renderer).toMatchSnapshot();
})

// it("change state input", () => {
//     const wrapper = shallow(<Login />);

//     wrapper.instance().setState({
//         loggedIn: false,
       
//         username: "1001",
//         password: 'test'
//     })
//     let regNoInput = wrapper.find('#usernametest');
//     regNoInput.simulate('change', {
//         target: {
//             value: '1001'
//         }
//     });
//     expect(wrapper.state('username')).toEqual('1001');

// })

