/**
 * @generated SignedSource<<819774d432d2876a85a7c7fc7a261aad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateSavedSearchContentContainerV2_me$data = {
  readonly emailFrequency: string | null;
  readonly savedSearch: {
    readonly internalID: string;
  } | null;
  readonly " $fragmentType": "CreateSavedSearchContentContainerV2_me";
};
export type CreateSavedSearchContentContainerV2_me = CreateSavedSearchContentContainerV2_me$data;
export type CreateSavedSearchContentContainerV2_me$key = {
  readonly " $data"?: CreateSavedSearchContentContainerV2_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainerV2_me">;
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
  "name": "CreateSavedSearchContentContainerV2_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "emailFrequency",
      "storageKey": null
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

(node as any).hash = "c348cd49f594bb264f9e53f0d8caa3a0";

export default node;
