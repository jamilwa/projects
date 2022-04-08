import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import { configure ,shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { RegistrationPage } from "../containers/components/RegistrationPage";
import "core-js/stable";
import "regenerator-runtime/runtime";

configure({ adapter: new Adapter() });

it("check mount",()=> {
    const renderer = shallow(<RegistrationPage />);
    renderer.find('#btn-register').simulate('click');
    expect(renderer).toMatchSnapshot();
})
// it("check mounts",()=> {
//     const renderer = shallow(<RegistrationPage/>);
//     //renderer.find('#btn-clear').simulate('click');
//     // expect(renderer).toMatchSnapshot();
// })


// it("check for test cases ya",()=> {
//     const renderer = shallow(<RegistrationPage/>);
//     // renderer.instance().setState({
//     //     loggedIn:true
//     // })
//     // expect(renderer).toMatchSnapshot();
// })

it("check for test cases",()=> {
    const renderer = new ShallowRenderer();
    renderer.render(<RegistrationPage />);
    expect(renderer).toMatchSnapshot();
})