/**
 * @generated SignedSource<<f9daef663b9ebcd61cdbd1719f61a3cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerHeaderTestsQuery$variables = {};
export type PartnerHeaderTestsQueryVariables = PartnerHeaderTestsQuery$variables;
export type PartnerHeaderTestsQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerHeader_partner">;
  } | null;
};
export type PartnerHeaderTestsQueryResponse = PartnerHeaderTestsQuery$data;
export type PartnerHeaderTestsQuery$rawResponse = {
  readonly partner: {
    readonly name: string | null;
    readonly profile: {
      readonly name: string | null;
      readonly id: string;
      readonly internalID: string;
      readonly isFollowed: boolean | null;
    } | null;
    readonly counts: {
      readonly eligibleArtworks: any | null;
    } | null;
    readonly internalID: string;
    readonly slug: string;
    readonly id: string;
  } | null;
};
export type PartnerHeaderTestsQueryRawResponse = PartnerHeaderTestsQuery$rawResponse;
export type PartnerHeaderTestsQuery = {
  variables: PartnerHeaderTestsQueryVariables;
  response: PartnerHeaderTestsQuery$data;
  rawResponse: PartnerHeaderTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "gagosian"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PartnerHeader_partner"
          }
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PartnerHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Profile",
            "kind": "LinkedField",
            "name": "profile",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFollowed",
                "storageKey": null
              }
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ]
  },
  "params": {
    "cacheID": "b40a5708fe30e1c90843565893d045f7",
    "id": null,
    "metadata": {},
    "name": "PartnerHeaderTestsQuery",
    "operationKind": "query",
    "text": "query PartnerHeaderTestsQuery {\n  partner(id: \"gagosian\") {\n    ...PartnerHeader_partner\n    id\n  }\n}\n\nfragment PartnerFollowButton_partner on Partner {\n  internalID\n  slug\n  profile {\n    id\n    internalID\n    isFollowed\n  }\n}\n\nfragment PartnerHeader_partner on Partner {\n  name\n  profile {\n    name\n    id\n  }\n  counts {\n    eligibleArtworks\n  }\n  ...PartnerFollowButton_partner\n}\n"
  }
};
})();

(node as any).hash = "d333b5c461fbfb6443bf11449f66f0e3";

export default node;
