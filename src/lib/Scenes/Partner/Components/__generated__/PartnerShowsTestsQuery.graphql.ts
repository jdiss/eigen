/**
 * @generated SignedSource<<4892b650b860750e86e777142684053c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerShowsTestsQuery$variables = {};
export type PartnerShowsTestsQueryVariables = PartnerShowsTestsQuery$variables;
export type PartnerShowsTestsQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerShows_partner">;
  } | null;
};
export type PartnerShowsTestsQueryResponse = PartnerShowsTestsQuery$data;
export type PartnerShowsTestsQuery$rawResponse = {
  readonly partner: {
    readonly slug: string;
    readonly internalID: string;
    readonly recentShows: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly isDisplayable: boolean | null;
        } | null;
      } | null> | null;
    } | null;
    readonly pastShows: {
      readonly pageInfo: {
        readonly hasNextPage: boolean;
        readonly startCursor: string | null;
        readonly endCursor: string | null;
      };
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly isDisplayable: boolean | null;
          readonly id: string;
          readonly name: string | null;
          readonly slug: string;
          readonly exhibitionPeriod: string | null;
          readonly coverImage: {
            readonly url: string | null;
            readonly aspectRatio: number;
          } | null;
          readonly href: string | null;
          readonly __typename: "Show";
        } | null;
        readonly cursor: string;
      } | null> | null;
    } | null;
    readonly currentAndUpcomingShows: {
      readonly pageInfo: {
        readonly hasNextPage: boolean;
        readonly startCursor: string | null;
        readonly endCursor: string | null;
      };
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly isDisplayable: boolean | null;
          readonly id: string;
          readonly internalID: string;
          readonly slug: string;
          readonly name: string | null;
          readonly exhibitionPeriod: string | null;
          readonly endAt: string | null;
          readonly images: ReadonlyArray<{
            readonly url: string | null;
          } | null> | null;
          readonly partner: {
            readonly __typename: "Partner";
            readonly __isNode: "Partner";
            readonly id: string;
            readonly name: string | null;
          } | {
            readonly __typename: "ExternalPartner";
            readonly __isNode: "ExternalPartner";
            readonly id: string;
          } | {
            readonly __typename: string;
            readonly __isNode: string;
            readonly id: string;
          } | null;
          readonly coverImage: {
            readonly url: string | null;
          } | null;
          readonly __typename: "Show";
        } | null;
        readonly cursor: string;
      } | null> | null;
    } | null;
    readonly id: string;
  } | null;
};
export type PartnerShowsTestsQueryRawResponse = PartnerShowsTestsQuery$rawResponse;
export type PartnerShowsTestsQuery = {
  variables: PartnerShowsTestsQueryVariables;
  response: PartnerShowsTestsQuery$data;
  rawResponse: PartnerShowsTestsQuery$rawResponse;
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
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "status",
  "value": "CURRENT"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDisplayable",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 32
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
v7 = {
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
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
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v13 = [
  "status",
  "sort"
],
v14 = [
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
  (v3/*: any*/)
],
v15 = [
  (v10/*: any*/)
],
v16 = [
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerShowsTestsQuery",
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
            "name": "PartnerShows_partner"
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
    "name": "PartnerShowsTestsQuery",
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
          (v2/*: any*/),
          {
            "alias": "recentShows",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              },
              (v3/*: any*/)
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
                      (v4/*: any*/),
                      (v5/*: any*/)
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
            "args": (v6/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              (v7/*: any*/),
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
                      (v5/*: any*/),
                      (v4/*: any*/),
                      (v8/*: any*/),
                      (v1/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
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
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "showsConnection(first:32,sort:\"END_AT_DESC\",status:\"CLOSED\")"
          },
          {
            "alias": "pastShows",
            "args": (v6/*: any*/),
            "filters": (v13/*: any*/),
            "handle": "connection",
            "key": "Partner_pastShows",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          },
          {
            "alias": "currentAndUpcomingShows",
            "args": (v14/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              (v7/*: any*/),
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
                      (v5/*: any*/),
                      (v4/*: any*/),
                      (v2/*: any*/),
                      (v1/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
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
                        "selections": (v15/*: any*/),
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
                          (v11/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v16/*: any*/),
                            "type": "Node",
                            "abstractKey": "__isNode"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v16/*: any*/),
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
                        "selections": (v15/*: any*/),
                        "storageKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "showsConnection(first:6,sort:\"END_AT_ASC\",status:\"CURRENT\")"
          },
          {
            "alias": "currentAndUpcomingShows",
            "args": (v14/*: any*/),
            "filters": (v13/*: any*/),
            "handle": "connection",
            "key": "Partner_currentAndUpcomingShows",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          },
          (v4/*: any*/)
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ]
  },
  "params": {
    "cacheID": "6848d1d2fca1e7321f8416af089e004a",
    "id": null,
    "metadata": {},
    "name": "PartnerShowsTestsQuery",
    "operationKind": "query",
    "text": "query PartnerShowsTestsQuery {\n  partner(id: \"gagosian\") {\n    ...PartnerShows_partner\n    id\n  }\n}\n\nfragment PartnerShowRailItem_show on Show {\n  internalID\n  slug\n  name\n  exhibitionPeriod(format: SHORT)\n  endAt\n  coverImage {\n    url\n  }\n  images {\n    url\n  }\n}\n\nfragment PartnerShowsRail_partner on Partner {\n  internalID\n  currentAndUpcomingShows: showsConnection(status: CURRENT, sort: END_AT_ASC, first: 6) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        isDisplayable\n        id\n        internalID\n        slug\n        name\n        exhibitionPeriod(format: SHORT)\n        endAt\n        images {\n          url\n        }\n        partner {\n          __typename\n          ... on Partner {\n            name\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n          ... on ExternalPartner {\n            id\n          }\n        }\n        ...PartnerShowRailItem_show\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment PartnerShows_partner on Partner {\n  slug\n  internalID\n  recentShows: showsConnection(status: CURRENT, first: 10) {\n    edges {\n      node {\n        id\n        isDisplayable\n      }\n    }\n  }\n  pastShows: showsConnection(status: CLOSED, sort: END_AT_DESC, first: 32) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        isDisplayable\n        id\n        name\n        slug\n        exhibitionPeriod(format: SHORT)\n        coverImage {\n          url\n          aspectRatio\n        }\n        href\n        __typename\n      }\n      cursor\n    }\n  }\n  ...PartnerShowsRail_partner\n}\n"
  }
};
})();

(node as any).hash = "4ffad96e22ba4428cd590512f82bd1fa";

export default node;
