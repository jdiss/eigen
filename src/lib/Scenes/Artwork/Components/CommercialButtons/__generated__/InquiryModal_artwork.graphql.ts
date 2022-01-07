/**
 * @generated SignedSource<<756565e536407bbccbdaf22e0ed7a514>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InquiryModal_artwork$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly inquiryQuestions: ReadonlyArray<{
    readonly internalID: string;
    readonly question: string;
  } | null> | null;
  readonly " $fragmentSpreads": FragmentRefs<"CollapsibleArtworkDetails_artwork">;
  readonly " $fragmentType": "InquiryModal_artwork";
};
export type InquiryModal_artwork = InquiryModal_artwork$data;
export type InquiryModal_artwork$key = {
  readonly " $data"?: InquiryModal_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"InquiryModal_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InquiryModal_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollapsibleArtworkDetails_artwork"
    },
    (v0/*: any*/),
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
      "concreteType": "InquiryQuestion",
      "kind": "LinkedField",
      "name": "inquiryQuestions",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "question",
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

(node as any).hash = "21c3d19bcd206e8b4a432dd27d896c68";

export default node;
