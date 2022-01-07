/**
 * @generated SignedSource<<53e6e73d9b5a5f3caa6e52a126235bb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleHeader_sale$data = {
  readonly name: string | null;
  readonly slug: string;
  readonly liveStartAt: string | null;
  readonly endAt: string | null;
  readonly startAt: string | null;
  readonly timeZone: string | null;
  readonly coverImage: {
    readonly url: string | null;
  } | null;
  readonly " $fragmentType": "SaleHeader_sale";
};
export type SaleHeader_sale = SaleHeader_sale$data;
export type SaleHeader_sale$key = {
  readonly " $data"?: SaleHeader_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleHeader_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleHeader_sale",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liveStartAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "timeZone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "coverImage",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "fc4771b92fc4f9e7edf8fe8befec8c8b";

export default node;
