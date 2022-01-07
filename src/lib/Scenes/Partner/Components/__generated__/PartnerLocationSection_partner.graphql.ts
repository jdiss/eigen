/**
 * @generated SignedSource<<5f0ec40b487c39f799b487c047ee45b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerLocationSection_partner$data = {
  readonly slug: string;
  readonly name: string | null;
  readonly cities: ReadonlyArray<string | null> | null;
  readonly locations: {
    readonly totalCount: number | null;
  } | null;
  readonly " $fragmentType": "PartnerLocationSection_partner";
};
export type PartnerLocationSection_partner = PartnerLocationSection_partner$data;
export type PartnerLocationSection_partner$key = {
  readonly " $data"?: PartnerLocationSection_partner$data;
  readonly " $fragmentSpreads": FragmentRefs<"PartnerLocationSection_partner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerLocationSection_partner",
  "selections": [
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cities",
      "storageKey": null
    },
    {
      "alias": "locations",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        }
      ],
      "concreteType": "LocationConnection",
      "kind": "LinkedField",
      "name": "locationsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "locationsConnection(first:0)"
    }
  ],
  "type": "Partner",
  "abstractKey": null
};

(node as any).hash = "432784fab5ee05283a2555d2b160dff6";

export default node;
