import type { StructureResolver } from 'sanity/structure';

const singletonTypes = ['privacyPolicy', 'termsConditions', 'supportCenter'];

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // ---------- Group: Static Pages / Single Docs ----------
      S.listItem()
        .title('Site Pages')
        .child(
          S.list()
            .title('Site Pages')
            .items([
              S.listItem()
                .title('Privacy Policy')
                .child(
                  S.document()
                    .schemaType('privacyPolicy')
                    .documentId('privacyPolicy')
                ),

              S.listItem()
                .title('Terms & Conditions')
                .child(
                  S.document()
                    .schemaType('termsConditions')
                    .documentId('termsConditions')
                ),

              S.listItem()
                .title('Support Center')
                .child(
                  S.document()
                    .schemaType('supportCenter')
                    .documentId('supportCenter')
                ),
            ])
        ),

      // ---------- Normal Collections ----------
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.includes(item.getId() ?? '')
      ),
    ]);
