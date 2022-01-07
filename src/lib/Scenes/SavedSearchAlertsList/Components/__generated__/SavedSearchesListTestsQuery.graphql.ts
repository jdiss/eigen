/**
 * @generated SignedSource<<2de5d192efc4a897123cfb6ae3faacdd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SavedSearchesListTestsQuery$variables = {};
export type SavedSearchesListTestsQueryVariables = SavedSearchesListTestsQuery$variables;
export type SavedSearchesListTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SavedSearchesList_me">;
  } | null;
};
export type SavedSearchesListTestsQueryResponse = SavedSearchesListTestsQuery$data;
export type SavedSearchesListTestsQuery = {
  variables: SavedSearchesListTestsQueryVariables;
  response: SavedSearchesListTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SavedSearchesListTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SavedSearchesList_me"
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
    "name": "SavedSearchesListTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "SearchCriteriaConnection",
            "kind": "LinkedField",
            "name": "savedSearchesConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchCriteriaEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SearchCriteria",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
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
                        "name": "artistID",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SavedSearchUserAlertSettings",
                        "kind": "LinkedField",
                        "name": "userAlertSettings",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "savedSearchesConnection(first:20)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "SavedSearches_savedSearchesConnection",
            "kind": "LinkedHandle",
            "name": "savedSearchesConnection"
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
    "cacheID": "ea9f9588dfdddf9ca39bb2c8639f9653",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": (v1/*: any*/),
        "me.savedSearchesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SearchCriteriaConnection"
        },
        "me.savedSearchesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "SearchCriteriaEdge"
        },
        "me.savedSearchesConnection.edges.cursor": (v2/*: any*/),
        "me.savedSearchesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SearchCriteria"
        },
        "me.savedSearchesConnection.edges.node.__typename": (v2/*: any*/),
        "me.savedSearchesConnection.edges.node.artistID": (v3/*: any*/),
        "me.savedSearchesConnection.edges.node.internalID": (v1/*: any*/),
        "me.savedSearchesConnection.edges.node.userAlertSettings": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "SavedSearchUserAlertSettings"
        },
        "me.savedSearchesConnection.edges.node.userAlertSettings.name": (v3/*: any*/),
        "me.savedSearchesConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.savedSearchesConnection.pageInfo.endCursor": (v3/*: any*/),
        "me.savedSearchesConnection.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "me.savedSearchesConnection.pageInfo.startCursor": (v3/*: any*/)
      }
    },
    "name": "SavedSearchesListTestsQuery",
    "operationKind": "query",
    "text": "query SavedSearchesListTestsQuery {\n  me {\n    ...SavedSearchesList_me\n    id\n  }\n}\n\nfragment SavedSearchesList_me on Me {\n  savedSearchesConnection(first: 20) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        internalID\n        artistID\n        userAlertSettings {\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d051faa41814d4960f1c8ade69a5748d";

export default node;
