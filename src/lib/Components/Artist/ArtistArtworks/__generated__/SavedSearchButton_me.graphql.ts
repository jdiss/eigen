/**
 * @generated SignedSource<<110c5e9b328583be248d19fb27d4e4c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SavedSearchButton_me$data = {
  readonly savedSearch: {
    readonly internalID: string;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainerV1_me">;
  readonly " $fragmentType": "SavedSearchButton_me";
};
export type SavedSearchButton_me = SavedSearchButton_me$data;
export type SavedSearchButton_me$key = {
  readonly " $data"?: SavedSearchButton_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SavedSearchButton_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "criteria"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SavedSearchButton_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateSavedSearchContentContainerV1_me"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "criteria",
          "variableName": "criteria"
        }
      ],
      "concreteType": "SearchCriteria",
      "kind": "LinkedField",
      "name": "savedSearch",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "1730d25ffdafc2d4489ecd29bc3f4d3d";

export default node;
