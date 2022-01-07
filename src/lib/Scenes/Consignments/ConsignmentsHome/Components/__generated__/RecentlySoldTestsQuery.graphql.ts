/**
 * @generated SignedSource<<f752a4d38235c6515fdc5ad6245770b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecentlySoldTestsQuery$variables = {};
export type RecentlySoldTestsQueryVariables = RecentlySoldTestsQuery$variables;
export type RecentlySoldTestsQuery$data = {
  readonly targetSupply: {
    readonly " $fragmentSpreads": FragmentRefs<"RecentlySold_targetSupply">;
  } | null;
};
export type RecentlySoldTestsQueryResponse = RecentlySoldTestsQuery$data;
export type RecentlySoldTestsQuery = {
  variables: RecentlySoldTestsQueryVariables;
  response: RecentlySoldTestsQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecentlySoldTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TargetSupply",
        "kind": "LinkedField",
        "name": "targetSupply",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecentlySold_targetSupply"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecentlySoldTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TargetSupply",
        "kind": "LinkedField",
        "name": "targetSupply",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TargetSupplyMicrofunnelItem",
            "kind": "LinkedField",
            "name": "microfunnel",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1
                  }
                ],
                "concreteType": "ArtworkConnection",
                "kind": "LinkedField",
                "name": "artworksConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtworkEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "node",
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
                            "kind": "ScalarField",
                            "name": "href",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artistNames",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "imageURL",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "realizedPrice",
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
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artworksConnection(first:1)"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9c872d63af54e43ab3fea379e092e6b4",
    "id": null,
    "metadata": {},
    "name": "RecentlySoldTestsQuery",
    "operationKind": "query",
    "text": "query RecentlySoldTestsQuery {\n  targetSupply {\n    ...RecentlySold_targetSupply\n  }\n}\n\nfragment RecentlySold_targetSupply on TargetSupply {\n  microfunnel {\n    artworksConnection(first: 1) {\n      edges {\n        node {\n          slug\n          internalID\n          href\n          artistNames\n          image {\n            imageURL\n          }\n          realizedPrice\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};

(node as any).hash = "5da441336da68f36aa8849b65827450b";

export default node;
