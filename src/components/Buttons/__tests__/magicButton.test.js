import React from 'react';
import ReactDOM from 'react-dom';
import MagicButton from './../magicButton';
import { isTSAnyKeyword } from '@babel/types';

it("renders without crashing",  () => {

    const div = document.createElement( "div" );
    ReactDOM.render( <MagicButton></MagicButton> , div )
}
)