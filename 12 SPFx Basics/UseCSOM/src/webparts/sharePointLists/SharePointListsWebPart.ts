import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SharePointListsWebPartStrings';
import SharePointLists from './components/SharePointLists';
import { ISharePointListsProps } from './components/ISharePointListsProps';

export interface ISharePointListsWebPartProps {
  description: string;
}

export default class SharePointListsWebPart extends BaseClientSideWebPart<ISharePointListsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISharePointListsProps > = React.createElement(
      SharePointLists,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
