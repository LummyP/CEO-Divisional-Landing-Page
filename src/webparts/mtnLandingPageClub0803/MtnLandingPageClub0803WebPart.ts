import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MtnLandingPageClub0803WebPartStrings';
import MtnLandingPageClub0803 from './components/MtnLandingPageClub0803';
import { IMtnLandingPageClub0803Props } from './components/IMtnLandingPageClub0803Props';

export interface IMtnLandingPageClub0803WebPartProps {
  description: string;
}

export default class MtnLandingPageClub0803WebPart extends BaseClientSideWebPart<IMtnLandingPageClub0803WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMtnLandingPageClub0803Props> = React.createElement(
      MtnLandingPageClub0803,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
