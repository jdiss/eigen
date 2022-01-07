/**
 * @generated SignedSource<<d604fc8cd9184f0ba4ad8f7973361eab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MakeOfferModal_artwork$data = {
  readonly internalID: string;
  readonly isEdition: boolean | null;
  readonly editionSets: ReadonlyArray<{
    readonly internalID: string;
    readonly editionOf: string | null;
    readonly isOfferableFromInquiry: boolean | null;
    readonly listPrice: {
      readonly display?: string | null;
    } | null;
    readonly dimensions: {
      readonly cm: string | null;
      readonly in: string | null;
    } | null;
  } | null> | null;
  readonly " $fragmentSpreads": FragmentRefs<"CollapsibleArtworkDetails_artwork" | "InquiryMakeOfferButton_artwork">;
  readonly " $fragmentType": "MakeOfferModal_artwork";
};
export type MakeOfferModal_artwork = MakeOfferModal_artwork$data;
export type MakeOfferModal_artwork$key = {
  readonly " $data"?: MakeOfferModal_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MakeOfferModal_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MakeOfferModal_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollapsibleArtworkDetails_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryMakeOfferButton_artwork"
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isEdition",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EditionSet",
      "kind": "LinkedField",
      "name": "editionSets",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "editionOf",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isOfferableFromInquiry",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "listPrice",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": (v1/*: any*/),
              "type": "Money",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": (v1/*: any*/),
              "type": "PriceRange",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "dimensions",
          "kind": "LinkedField",
          "name": "dimensions",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cm",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "in",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "043f135e7486062db6b928117562e2ec";

export default node;
