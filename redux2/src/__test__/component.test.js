import React from 'react';
import Footer from '../component/footer';
import {create} from 'react-test-renderer';

describe('Snapshot Footer Test',() =>{
    test("Testing Footer",() => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})