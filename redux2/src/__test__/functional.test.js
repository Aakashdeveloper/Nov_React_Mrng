import React from 'react';
import {create} from 'react-test-renderer';
import BaseButton from '../component/BaseButton';

describe('Function Test',() => {
    test('it should show expected text when clicked',() => {
        const component = create(<BaseButton/>);
        const instance = component.root;
        const button = instance.findByType('button');
        button.props.onClick();
        expect(button.props.children).toBe('Some Things')
    })
})