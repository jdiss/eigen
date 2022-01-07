/**
 * @generated SignedSource<<d4344a34b2b1a6dd6c09112aad759574>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OnboardingPersonalizationModalPaginationQuery$variables = {
  query: string;
  count: number;
  cursor?: string | null;
};
export type OnboardingPersonalizationModalPaginationQueryVariables = OnboardingPersonalizationModalPaginationQuery$variables;
export type OnboardingPersonalizationModalPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"OnboardingPersonalizationModal_artists">;
};
export type OnboardingPersonalizationModalPaginationQueryResponse = OnboardingPersonalizationModalPaginationQuery$data;
export type OnboardingPersonalizationModalPaginationQuery$rawResponse = {
  readonly searchConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "Artist";
        readonly imageUrl: string | null;
        readonly href: string | null;
        readonly displayLabel: string | null;
        readonly __isNode: "Artist";
        readonly id: string;
        readonly internalID: string;
        readonly slug: string;
        readonly name: string | null;
        readonly initials: string | null;
        readonly is_followed: boolean | null;
        readonly nationality: string | null;
        readonly birthday: string | null;
        readonly deathday: string | null;
        readonly image: {
          readonly url: string | null;
        } | null;
      } | {
        readonly __typename: string;
        readonly imageUrl: string | null;
        readonly href: string | null;
        readonly displayLabel: string | null;
        readonly __isNode: string;
        readonly id: string;
      } | null;
      readonly cursor: string;
    } | null> | null;
    readonly pageInfo: {
      readonly endCursor: string | null;
      readonly hasNextPage: boolean;
    };
  } | null;
};
export type OnboardingPersonalizationModalPaginationQueryRawResponse = OnboardingPersonalizationModalPaginationQuery$rawResponse;
export type OnboardingPersonalizationModalPaginationQuery = {
  variables: OnboardingPersonalizationModalPaginationQueryVariables;
  response: OnboardingPersonalizationModalPaginationQuery$data;
  rawResponse: OnboardingPersonalizationModalPaginationQuery$rawResponse;
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
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v3 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
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
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "OnboardingPersonalizationModalPaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v3/*: any*/)
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "OnboardingPersonalizationModalPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
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
                      (v5/*: any*/),
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
                      (v5/*: any*/)
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
        "args": (v4/*: any*/),
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
    "cacheID": "deef2cc6bff9c723f45b5876fd90805f",
    "id": null,
    "metadata": {},
    "name": "OnboardingPersonalizationModalPaginationQuery",
    "operationKind": "query",
    "text": "query OnboardingPersonalizationModalPaginationQuery(\n  $query: String!\n  $count: Int!\n  $cursor: String\n) {\n  ...OnboardingPersonalizationModal_artists_1jWD3d\n}\n\nfragment OnboardingPersonalizationModal_artists_1jWD3d on Query {\n  searchConnection(query: $query, mode: AUTOSUGGEST, first: $count, after: $cursor, entities: [ARTIST]) {\n    edges {\n      node {\n        __typename\n        imageUrl\n        href\n        displayLabel\n        ... on Artist {\n          id\n          internalID\n          slug\n          name\n          initials\n          href\n          is_followed: isFollowed\n          nationality\n          birthday\n          deathday\n          image {\n            url\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "76c95a815bf5da60220c58a89238b1c4";

export default node;
