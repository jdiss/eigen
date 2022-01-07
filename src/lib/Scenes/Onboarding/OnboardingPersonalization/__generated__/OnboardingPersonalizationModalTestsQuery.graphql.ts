/**
 * @generated SignedSource<<a7740f0c69118f5468b18a30ebe48748>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OnboardingPersonalizationModalTestsQuery$variables = {
  query: string;
  count: number;
};
export type OnboardingPersonalizationModalTestsQueryVariables = OnboardingPersonalizationModalTestsQuery$variables;
export type OnboardingPersonalizationModalTestsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"OnboardingPersonalizationModal_artists">;
};
export type OnboardingPersonalizationModalTestsQueryResponse = OnboardingPersonalizationModalTestsQuery$data;
export type OnboardingPersonalizationModalTestsQuery = {
  variables: OnboardingPersonalizationModalTestsQueryVariables;
  response: OnboardingPersonalizationModalTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v2 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v3 = [
  {
    "kind": "Literal",
    "name": "entities",
    "value": [
      "ARTIST"
    ]
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Literal",
    "name": "mode",
    "value": "AUTOSUGGEST"
  },
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "OnboardingPersonalizationModalTestsQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "OnboardingPersonalizationModal_artists"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "OnboardingPersonalizationModalTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "SearchableConnection",
        "kind": "LinkedField",
        "name": "searchConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchableEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imageUrl",
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
                    "name": "displayLabel",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
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
                        "name": "initials",
                        "storageKey": null
                      },
                      {
                        "alias": "is_followed",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFollowed",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "nationality",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "birthday",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "deathday",
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
                            "name": "url",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Artist",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
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
          },
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
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": [
          "query",
          "mode",
          "entities"
        ],
        "handle": "connection",
        "key": "OnboardingPersonalizationModal__searchConnection",
        "kind": "LinkedHandle",
        "name": "searchConnection"
      }
    ]
  },
  "params": {
    "cacheID": "28169aba4b9650853f5af5c1f06860cd",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "searchConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SearchableConnection"
        },
        "searchConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "SearchableEdge"
        },
        "searchConnection.edges.cursor": (v5/*: any*/),
        "searchConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Searchable"
        },
        "searchConnection.edges.node.__isNode": (v5/*: any*/),
        "searchConnection.edges.node.__typename": (v5/*: any*/),
        "searchConnection.edges.node.birthday": (v6/*: any*/),
        "searchConnection.edges.node.deathday": (v6/*: any*/),
        "searchConnection.edges.node.displayLabel": (v6/*: any*/),
        "searchConnection.edges.node.href": (v6/*: any*/),
        "searchConnection.edges.node.id": (v7/*: any*/),
        "searchConnection.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "searchConnection.edges.node.image.url": (v6/*: any*/),
        "searchConnection.edges.node.imageUrl": (v6/*: any*/),
        "searchConnection.edges.node.initials": (v6/*: any*/),
        "searchConnection.edges.node.internalID": (v7/*: any*/),
        "searchConnection.edges.node.is_followed": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "searchConnection.edges.node.name": (v6/*: any*/),
        "searchConnection.edges.node.nationality": (v6/*: any*/),
        "searchConnection.edges.node.slug": (v7/*: any*/),
        "searchConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "searchConnection.pageInfo.endCursor": (v6/*: any*/),
        "searchConnection.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        }
      }
    },
    "name": "OnboardingPersonalizationModalTestsQuery",
    "operationKind": "query",
    "text": "query OnboardingPersonalizationModalTestsQuery(\n  $query: String!\n  $count: Int!\n) {\n  ...OnboardingPersonalizationModal_artists_1bcUq5\n}\n\nfragment OnboardingPersonalizationModal_artists_1bcUq5 on Query {\n  searchConnection(query: $query, mode: AUTOSUGGEST, first: $count, entities: [ARTIST]) {\n    edges {\n      node {\n        __typename\n        imageUrl\n        href\n        displayLabel\n        ... on Artist {\n          id\n          internalID\n          slug\n          name\n          initials\n          href\n          is_followed: isFollowed\n          nationality\n          birthday\n          deathday\n          image {\n            url\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ef54bc3ac986956677b92498b3e86c1";

export default node;
