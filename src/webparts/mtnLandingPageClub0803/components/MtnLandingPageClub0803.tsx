import * as React from 'react';
import "../components/global.scss"
import { IMtnLandingPageClub0803Props } from './IMtnLandingPageClub0803Props';
import { escape } from '@microsoft/sp-lodash-subset';
import * as jQuery from "jquery";

export default class MtnLandingPageClub0803 extends React.Component<IMtnLandingPageClub0803Props, {}> {
  public render(): React.ReactElement<IMtnLandingPageClub0803Props> {
     jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
      <div className="mainContainer">
        <div className='Container'>
          <div className='Picture'>
            <h4>John Doe</h4>
            <h5>Chief Finance Officer(CFO)</h5>
          </div>
        </div>
        <div className='contentRight'>
          <h3>Welcme To</h3>
          <h3>Division One</h3>
          <p>Dear all, mtn Nigeria will be having her 20th</p>
          <p>celebration in a week time, kindly make you</p>
          <p>for this special event. Dear all,</p>
        </div>
      </div>
    );
  }
}
