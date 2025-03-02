import type { EntryFieldTypes } from 'contentful'

export interface Work {
  contentTypeId: 'work';
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    workPlaces: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<{
      contentTypeId: 'workPlace',
      fields: {
        name: EntryFieldTypes.Text;
        logo: EntryFieldTypes.AssetLink;
        workRoles: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<{
          contentTypeId: 'workRole',
          fields: {
            title: EntryFieldTypes.Text;
            startDate: EntryFieldTypes.Date;
            endDate: EntryFieldTypes.Date;
            description: EntryFieldTypes.RichText;
          }
        }>>
      }
    }>>
  };
}