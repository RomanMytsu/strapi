import type { Schema, Struct } from '@strapi/strapi';

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_item';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface SharedServiceSubcategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_subcategory';
  info: {
    displayName: 'Service Subcategory';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.service-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.service-item': SharedServiceItem;
      'shared.service-subcategory': SharedServiceSubcategory;
    }
  }
}
