import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AddForm } from "../containers/AddForm";

configure({ adapter: new Adapter() });

it("check for test cases", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AddForm />);
    expect(renderer).toMatchSnapshot();

})

const simulateOnChangeInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate("change", {
      target: { value: newValue },
    });
  
    return wrapper.find(inputSelector);
  };
  test('useState mock ', () => {
    const wrapper = shallow(<AddForm />);
    const updatedNameInput = simulateOnChangeInput(
        wrapper,
        "#input-ideaTitle",
        "new title"
      );
    
    wrapper.find('#btn-submit').simulate('click');
    expect(wrapper).toMatchSnapshot();
    // initial state is set and you can now test your component 
    })
    
    test('useState mock for ideaDesc ', () => {
        const wrapper = shallow(<AddForm />);
        const updatedName1Input = simulateOnChangeInput(
            wrapper,
            "#input-ideaDesc",
            "test description"
          );
        
        wrapper.find('#btn-submit').simulate('click');
        expect(wrapper).toMatchSnapshot();
        // initial state is set and you can now test your component 
        })