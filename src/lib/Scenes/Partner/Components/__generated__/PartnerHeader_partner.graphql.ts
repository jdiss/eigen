/**
 * @generated SignedSource<<a9f2c5e920b876a716a1a40b9853cda7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerHeader_partner$data = {
  readonly name: string | null;
  readonly profile: {
    readonly name: string | null;
  } | null;
  readonly counts: {
    readonly eligibleArtworks: any | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerFollowButton_partner">;
  readonly " $fragmentType": "PartnerHeader_partner";
};
export type PartnerHeader_partner = PartnerHeader_partner$data;
export type PartnerHeader_partner$key = {
  readonly " $data"?: PartnerHeader_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerHeader_partner">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerHeader_partner",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "profile",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PartnerCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "eligibleArtworks",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PartnerFollowButton_partner"
    }
  ],
  "type": "Partner",
  "abstractKey": null
};
})();

(node as any).hash = "a4406e5249ed94182cc5dd8dd47921ff";

export default node;
