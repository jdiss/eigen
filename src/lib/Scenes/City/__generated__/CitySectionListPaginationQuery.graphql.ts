/**
 * @generated SignedSource<<f57ef2b92264a21f9ea856b3f2aabc1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EventStatus = "ALL" | "CLOSED" | "CLOSING_SOON" | "CURRENT" | "RUNNING" | "RUNNING_AND_UPCOMING" | "UPCOMING" | "%future added value";
export type PartnerShowPartnerType = "GALLERY" | "MUSEUM" | "%future added value";
export type ShowSorts = "END_AT_ASC" | "END_AT_DESC" | "FEATURED_ASC" | "FEATURED_DESC" | "FEATURED_DESC_END_AT_DESC" | "NAME_ASC" | "NAME_DESC" | "PARTNER_ASC" | "SORTABLE_NAME_ASC" | "SORTABLE_NAME_DESC" | "START_AT_ASC" | "START_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC" | "%future added value";
export type CitySectionListPaginationQuery$variables = {
  count: number;
  cursor?: string | null;
  citySlug: string;
  partnerType?: PartnerShowPartnerType | null;
  status?: EventStatus | null;
  dayThreshold?: number | null;
  sort?: ShowSorts | null;
};
export type CitySectionListPaginationQueryVariables = CitySectionListPaginationQuery$variables;
export type CitySectionListPaginationQuery$data = {
  readonly city: {
    readonly " $fragmentSpreads": FragmentRefs<"CitySectionList_city">;
  } | null;
};
export type CitySectionListPaginationQueryResponse = CitySectionListPaginationQuery$data;
export type CitySectionListPaginationQuery = {
  variables: CitySectionListPaginationQueryVariables;
  response: CitySectionListPaginationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "citySlug"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "dayThreshold"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "partnerType"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sort"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v7 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "citySlug"
  }
],
v8 = {
  "kind": "Variable",
  "name": "dayThreshold",
  "variableName": "dayThreshold"
},
v9 = {
  "kind": "Variable",
  "name": "partnerType",
  "variableName": "partnerType"
},
v10 = {
  "kind": "Variable",
  "name": "sort",
  "variableName": "sort"
},
v11 = {
  "kind": "Variable",
  "name": "status",
  "variableName": "status"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v13 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v8/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Literal",
    "name": "includeStubShows",
    "value": true
  },
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/)
],
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v17 = [
  (v14/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CitySectionListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "City",
        "kind": "LinkedField",
        "name": "city",
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
              },
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "CitySectionList_city"
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "CitySectionListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "City",
        "kind": "LinkedField",
        "name": "city",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          {
            "alias": "shows",
            "args": (v13/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
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
              },
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
                      (v14/*: any*/),
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
                        "name": "isStubShow",
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
                        "alias": "start_at",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startAt",
                        "storageKey": null
                      },
                      {
                        "alias": "end_at",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "status",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "href",
                        "storageKey": null
                      },
                      (v15/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": "cover_image",
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
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
                      },
                      {
                        "alias": "exhibition_period",
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          (v16/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v12/*: any*/),
                              (v15/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Profile",
                                "kind": "LinkedField",
                                "name": "profile",
                                "plural": false,
                                "selections": [
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
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "version",
                                            "value": "square"
                                          }
                                        ],
                                        "kind": "ScalarField",
                                        "name": "url",
                                        "storageKey": "url(version:\"square\")"
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v14/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v17/*: any*/),
                            "type": "Node",
                            "abstractKey": "__isNode"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v17/*: any*/),
                            "type": "ExternalPartner",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v16/*: any*/)
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
            "storageKey": null
          },
          {
            "alias": "shows",
            "args": (v13/*: any*/),
            "filters": [
              "includeStubShows",
              "sort",
              "partnerType",
              "status",
              "dayThreshold"
            ],
            "handle": "connection",
            "key": "CitySectionList_shows",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "144c98b1716d9f2a55c972ba6cbffe48",
    "id": null,
    "metadata": {},
    "name": "CitySectionListPaginationQuery",
    "operationKind": "query",
    "text": "query CitySectionListPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $citySlug: String!\n  $partnerType: PartnerShowPartnerType\n  $status: EventStatus\n  $dayThreshold: Int\n  $sort: ShowSorts\n) {\n  city(slug: $citySlug) {\n    ...CitySectionList_city_3BpxDU\n  }\n}\n\nfragment CitySectionList_city_3BpxDU on City {\n  name\n  shows: showsConnection(includeStubShows: true, first: $count, sort: $sort, after: $cursor, partnerType: $partnerType, status: $status, dayThreshold: $dayThreshold) {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        slug\n        internalID\n        isStubShow\n        is_followed: isFollowed\n        start_at: startAt\n        end_at: endAt\n        status\n        href\n        type\n        name\n        cover_image: coverImage {\n          url\n        }\n        exhibition_period: exhibitionPeriod(format: SHORT)\n        partner {\n          __typename\n          ... on Partner {\n            name\n            type\n            profile {\n              image {\n                url(version: \"square\")\n              }\n              id\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n          ... on ExternalPartner {\n            id\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff4164b2e2e4710f73ecfc8db61b2dd0";

export default node;
