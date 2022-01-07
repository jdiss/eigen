/**
 * @generated SignedSource<<4f77107d34c365e7f61540a36cad99e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BidResult_sale_artwork$data = {
  readonly sale: {
    readonly liveStartAt: string | null;
    readonly endAt: string | null;
    readonly slug: string;
  } | null;
  readonly " $fragmentType": "BidResult_sale_artwork";
};
export type BidResult_sale_artwork = BidResult_sale_artwork$data;
export type BidResult_sale_artwork$key = {
  readonly " $data"?: BidResult_sale_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"BidResult_sale_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidResult_sale_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
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
          "name": "slug",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};

(node as any).hash = "44a66e7bfb7bc37bde83d3bfdce023ca";

export default node;
