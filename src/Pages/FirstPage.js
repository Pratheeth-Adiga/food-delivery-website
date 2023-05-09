import LogoSign from '../FirstPage/logoSign';
import Middle from '../FirstPage/Middle';
import Footer from '../FirstPage/Footer';
import React from 'react';

export default function FirstPage(){
    return(
        <div>
        <box>
          <LogoSign/>
        </box>
        <box>
          <Middle/>
        </box>
        <box>
          <Footer /> 
        </box>
      </div> 
    )
}