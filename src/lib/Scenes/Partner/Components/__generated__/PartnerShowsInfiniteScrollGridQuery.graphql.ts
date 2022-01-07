/**
 * @generated SignedSource<<9d5bf02ea57660bba41365aeadb30798>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerShowsInfiniteScrollGridQuery$variables = {
  id: string;
  cursor?: string | null;
  count: number;
};
export type PartnerShowsInfiniteScrollGridQueryVariables = PartnerShowsInfiniteScrollGridQuery$variables;
export type PartnerShowsInfiniteScrollGridQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerShows_partner">;
  } | null;
};
export type PartnerShowsInfiniteScrollGridQueryResponse = PartnerShowsInfiniteScrollGridQuery$data;
export type PartnerShowsInfiniteScrollGridQuery = {
  variables: PartnerShowsInfiniteScrollGridQueryVariables;
  response: PartnerShowsInfiniteScrollGridQuery$data;
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
  "name": "id"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v6 = {
  "kind": "Literal",
  "name": "status",
  "value": "CURRENT"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDisplayable",
  "storageKey": null
},
v9 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "END_AT_DESC"
  },
  {
    "kind": "Literal",
    "name": "status",
    "value": "CLOSED"
  }
],
v10 = {
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
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "format",
      "value": "SHORT"
    }
  ],
  "kind": "ScalarField",
  "name": "exhibitionPeriod",
  "storageKey": "exhibitionPeriod(format:\"SHORT\")"
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v16 = [
  "status",
  "sort"
],
v17 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "END_AT_ASC"
  },
  (v6/*: any*/)
],
v18 = [
  (v13/*: any*/)
],
v19 = [
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerShowsInfiniteScrollGridQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
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
              }
            ],
            "kind": "FragmentSpread",
            "name": "PartnerShows_partner"
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
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PartnerShowsInfiniteScrollGridQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "recentShows",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              },
              (v6/*: any*/)
            ],
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ShowEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Show",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "showsConnection(first:10,status:\"CURRENT\")"
          },
          {
            "alias": "pastShows",
            "args": (v9/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ShowEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Show",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v7/*: any*/),
                      (v11/*: any*/),
                      (v4/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
                        "plural": false,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "aspectRatio",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "href",
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "pastShows",
            "args": (v9/*: any*/),
            "filters": (v16/*: any*/),
            "handle": "connection",
            "key": "Partner_pastShows",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          },
          {
            "alias": "currentAndUpcomingShows",
            "args": (v17/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ShowEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Show",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v7/*: any*/),
                      (v5/*: any*/),
                      (v4/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "images",
                        "plural": true,
                        "selections": (v18/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          (v14/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v11/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v19/*: any*/),
                            "type": "Node",
                            "abstractKey": "__isNode"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v19/*: any*/),
                            "type": "ExternalPartner",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
                        "plural": false,
                        "selections": (v18/*: any*/),
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "showsConnection(first:6,sort:\"END_AT_ASC\",status:\"CURRENT\")"
          },
          {
            "alias": "currentAndUpcomingShows",
            "args": (v17/*: any*/),
            "filters": (v16/*: any*/),
            "handle": "connection",
            "key": "Partner_currentAndUpcomingShows",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4d4d134ac1b87227a626f9b30ac03904",
    "id": null,
    "metadata": {},
    "name": "PartnerShowsInfiniteScrollGridQuery",
    "operationKind": "query",
    "text": "query PartnerShowsInfiniteScrollGridQuery(\n  $id: String!\n  $cursor: String\n  $count: Int!\n) {\n  partner(id: $id) {\n    ...PartnerShows_partner_1G22uz\n    id\n  }\n}\n\nfragment PartnerShowRailItem_show on Show {\n  internalID\n  slug\n  name\n  exhibitionPeriod(format: SHORT)\n  endAt\n  coverImage {\n    url\n  }\n  images {\n    url\n  }\n}\n\nfragment PartnerShowsRail_partner on Partner {\n  internalID\n  currentAndUpcomingShows: showsConnection(status: CURRENT, sort: END_AT_ASC, first: 6) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        isDisplayable\n        id\n        internalID\n        slug\n        name\n        exhibitionPeriod(format: SHORT)\n        endAt\n        images {\n          url\n        }\n        partner {\n          __typename\n          ... on Partner {\n            name\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n          ... on ExternalPartner {\n            id\n          }\n        }\n        ...PartnerShowRailItem_show\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment PartnerShows_partner_1G22uz on Partner {\n  slug\n  internalID\n  recentShows: showsConnection(status: CURRENT, first: 10) {\n    edges {\n      node {\n        id\n        isDisplayable\n      }\n    }\n  }\n  pastShows: showsConnection(status: CLOSED, sort: END_AT_DESC, first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        isDisplayable\n        id\n        name\n        slug\n        exhibitionPeriod(format: SHORT)\n        coverImage {\n          url\n          aspectRatio\n        }\n        href\n        __typename\n      }\n      cursor\n    }\n  }\n  ...PartnerShowsRail_partner\n}\n"
  }
};
})();

(node as any).hash = "5693725793e322d2ab9fa67980502e06";

export default node;
