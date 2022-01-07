/**
 * @generated SignedSource<<0a2af7237ea21a12eaf8df5480d33b15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchEntity = "ARTICLE" | "ARTIST" | "ARTIST_SERIES" | "ARTWORK" | "CITY" | "COLLECTION" | "FAIR" | "FEATURE" | "GALLERY" | "GENE" | "INSTITUTION" | "PAGE" | "PROFILE" | "SALE" | "SHOW" | "TAG" | "VIEWING_ROOM" | "%future added value";
export type AutosuggestResultsPaginationQuery$variables = {
  query: string;
  count: number;
  cursor?: string | null;
  entities?: ReadonlyArray<SearchEntity | null> | null;
};
export type AutosuggestResultsPaginationQueryVariables = AutosuggestResultsPaginationQuery$variables;
export type AutosuggestResultsPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AutosuggestResults_results">;
};
export type AutosuggestResultsPaginationQueryResponse = AutosuggestResultsPaginationQuery$data;
export type AutosuggestResultsPaginationQuery$rawResponse = {
  readonly results: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly imageUrl: string | null;
        readonly href: string | null;
        readonly displayLabel: string | null;
        readonly __typename: "SearchableItem";
        readonly __isNode: "SearchableItem";
        readonly id: string;
        readonly internalID: string;
        readonly displayType: string | null;
        readonly slug: string;
      } | {
        readonly imageUrl: string | null;
        readonly href: string | null;
        readonly displayLabel: string | null;
        readonly __typename: "Artist";
        readonly __isNode: "Artist";
        readonly id: string;
        readonly internalID: string;
        readonly formattedNationalityAndBirthday: string | null;
        readonly slug: string;
        readonly statuses: {
          readonly artworks: boolean | null;
          readonly auctionLots: boolean | null;
        } | null;
      } | {
        readonly imageUrl: string | null;
        readonly href: string | null;
        readonly displayLabel: string | null;
        readonly __typename: string;
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
export type AutosuggestResultsPaginationQueryRawResponse = AutosuggestResultsPaginationQuery$rawResponse;
export type AutosuggestResultsPaginationQuery = {
  variables: AutosuggestResultsPaginationQueryVariables;
  response: AutosuggestResultsPaginationQuery$data;
  rawResponse: AutosuggestResultsPaginationQuery$rawResponse;
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
  "name": "entities"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v4 = {
  "kind": "Variable",
  "name": "entities",
  "variableName": "entities"
},
v5 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v6 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v4/*: any*/),
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
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AutosuggestResultsPaginationQuery",
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
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "AutosuggestResults_results"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "AutosuggestResultsPaginationQuery",
    "selections": [
      {
        "alias": "results",
        "args": (v6/*: any*/),
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "displayType",
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "type": "SearchableItem",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "formattedNationalityAndBirthday",
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtistStatuses",
                        "kind": "LinkedField",
                        "name": "statuses",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artworks",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "auctionLots",
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      }
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
        "alias": "results",
        "args": (v6/*: any*/),
        "filters": [
          "query",
          "mode",
          "entities"
        ],
        "handle": "connection",
        "key": "AutosuggestResults_results",
        "kind": "LinkedHandle",
        "name": "searchConnection"
      }
    ]
  },
  "params": {
    "cacheID": "adcd63106635dc5c6af6106507a452ea",
    "id": null,
    "metadata": {},
    "name": "AutosuggestResultsPaginationQuery",
    "operationKind": "query",
    "text": "query AutosuggestResultsPaginationQuery(\n  $query: String!\n  $count: Int!\n  $cursor: String\n  $entities: [SearchEntity]\n) {\n  ...AutosuggestResults_results_1qwknJ\n}\n\nfragment AutosuggestResults_results_1qwknJ on Query {\n  results: searchConnection(query: $query, mode: AUTOSUGGEST, first: $count, after: $cursor, entities: $entities) {\n    edges {\n      node {\n        imageUrl\n        href\n        displayLabel\n        __typename\n        ... on SearchableItem {\n          internalID\n          displayType\n          slug\n        }\n        ... on Artist {\n          internalID\n          formattedNationalityAndBirthday\n          slug\n          statuses {\n            artworks\n            auctionLots\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4728234ec8753da164769e76ebe1ef23";

export default node;
