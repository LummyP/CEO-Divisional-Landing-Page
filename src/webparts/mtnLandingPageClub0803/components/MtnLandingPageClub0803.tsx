import * as React from 'react';
import styles from './MtnLandingPageClub0803.module.scss';
import { IMtnLandingPageClub0803Props } from './IMtnLandingPageClub0803Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class MtnLandingPageClub0803 extends React.Component<IMtnLandingPageClub0803Props, {}> {
  public render(): React.ReactElement<IMtnLandingPageClub0803Props> {
    return (
      <div className={ styles.mtnLandingPageClub0803 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
