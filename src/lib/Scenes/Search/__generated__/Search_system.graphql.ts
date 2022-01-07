/**
 * @generated SignedSource<<92751e6900f2e4e98ce833e1a46a7557>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Search_system$data = {
  readonly algolia: {
    readonly appID: string;
    readonly apiKey: string;
    readonly indices: ReadonlyArray<{
      readonly name: string;
      readonly displayName: string;
      readonly key: string;
    }>;
  } | null;
  readonly __typename: "System";
  readonly " $fragmentType": "Search_system";
};
export type Search_system = Search_system$data;
export type Search_system$key = {
  readonly " $data"?: Search_system$data;
  readonly " $fragmentSpreads": FragmentRefs<"Search_system">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Search_system",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Algolia",
      "kind": "LinkedField",
      "name": "algolia",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "appID",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "apiKey",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AlgoliaIndex",
          "kind": "LinkedField",
          "name": "indices",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "displayName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "key",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "System",
  "abstractKey": null
};

(node as any).hash = "4b9c8adf82c5924e26b3f838a410f4b4";

export default node;
