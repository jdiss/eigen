/**
 * @generated SignedSource<<4839443bfbe7d568b23d6019bec073e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairBMWArtActivationQuery$variables = {
  fairID: string;
};
export type FairBMWArtActivationQueryVariables = FairBMWArtActivationQuery$variables;
export type FairBMWArtActivationQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"FairBMWArtActivation_fair">;
  } | null;
};
export type FairBMWArtActivationQueryResponse = FairBMWArtActivationQuery$data;
export type FairBMWArtActivationQuery = {
  variables: FairBMWArtActivationQueryVariables;
  response: FairBMWArtActivationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fairID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "fairID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FairBMWArtActivationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairBMWArtActivation_fair"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FairBMWArtActivationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
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
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FairSponsoredContent",
            "kind": "LinkedField",
            "name": "sponsoredContent",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "activationText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pressReleaseUrl",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "68cc3854a45b4d6ed04997d8c7e1dc2f",
    "id": null,
    "metadata": {},
    "name": "FairBMWArtActivationQuery",
    "operationKind": "query",
    "text": "query FairBMWArtActivationQuery(\n  $fairID: String!\n) {\n  fair(id: $fairID) {\n    ...FairBMWArtActivation_fair\n    id\n  }\n}\n\nfragment FairBMWArtActivation_fair on Fair {\n  slug\n  internalID\n  sponsoredContent {\n    activationText\n    pressReleaseUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "4ed1740e79921612fd90343f396d79bf";

export default node;
