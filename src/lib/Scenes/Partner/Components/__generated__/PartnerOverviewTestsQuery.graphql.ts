/**
 * @generated SignedSource<<630daf10f0cfd88a6915a00692493d7d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerOverviewTestsQuery$variables = {};
export type PartnerOverviewTestsQueryVariables = PartnerOverviewTestsQuery$variables;
export type PartnerOverviewTestsQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerOverview_partner">;
  } | null;
};
export type PartnerOverviewTestsQueryResponse = PartnerOverviewTestsQuery$data;
export type PartnerOverviewTestsQuery$rawResponse = {
  readonly partner: {
    readonly internalID: string;
    readonly name: string | null;
    readonly cities: ReadonlyArray<string | null> | null;
    readonly profile: {
      readonly bio: string | null;
      readonly id: string;
    } | null;
    readonly artists: {
      readonly pageInfo: {
        readonly hasNextPage: boolean;
        readonly startCursor: string | null;
        readonly endCursor: string | null;
      };
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly internalID: string;
          readonly slug: string;
          readonly name: string | null;
          readonly initials: string | null;
          readonly href: string | null;
          readonly is_followed: boolean | null;
          readonly nationality: string | null;
          readonly birthday: string | null;
          readonly deathday: string | null;
          readonly image: {
            readonly url: string | null;
          } | null;
          readonly counts: {
            readonly artworks: any | null;
          } | null;
          readonly __typename: "Artist";
        } | null;
        readonly cursor: string;
        readonly id: string;
      } | null> | null;
    } | null;
    readonly slug: string;
    readonly locations: {
      readonly totalCount: number | null;
    } | null;
    readonly id: string;
  } | null;
};
export type PartnerOverviewTestsQueryRawResponse = PartnerOverviewTestsQuery$rawResponse;
export type PartnerOverviewTestsQuery = {
  variables: PartnerOverviewTestsQueryVariables;
  response: PartnerOverviewTestsQuery$data;
  rawResponse: PartnerOverviewTestsQuery$rawResponse;
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
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": "SORTABLE_ID_ASC"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerOverviewTestsQuery",
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
            "name": "PartnerOverview_partner"
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
    "name": "PartnerOverviewTestsQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cities",
            "storageKey": null
          },
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
                "kind": "ScalarField",
                "name": "bio",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "artists",
            "args": (v4/*: any*/),
            "concreteType": "ArtistPartnerConnection",
            "kind": "LinkedField",
            "name": "artistsConnection",
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
                "concreteType": "ArtistPartnerEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artist",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v1/*: any*/),
                      (v5/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "initials",
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtistCounts",
                        "kind": "LinkedField",
                        "name": "counts",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artworks",
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
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artistsConnection(first:10,sort:\"SORTABLE_ID_ASC\")"
          },
          {
            "alias": "artists",
            "args": (v4/*: any*/),
            "filters": [
              "sort"
            ],
            "handle": "connection",
            "key": "Partner_artists",
            "kind": "LinkedHandle",
            "name": "artistsConnection"
          },
          (v5/*: any*/),
          {
            "alias": "locations",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 0
              }
            ],
            "concreteType": "LocationConnection",
            "kind": "LinkedField",
            "name": "locationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              }
            ],
            "storageKey": "locationsConnection(first:0)"
          },
          (v3/*: any*/)
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ]
  },
  "params": {
    "cacheID": "96f92618f749eb7dd57038ad3cf202f8",
    "id": null,
    "metadata": {},
    "name": "PartnerOverviewTestsQuery",
    "operationKind": "query",
    "text": "query PartnerOverviewTestsQuery {\n  partner(id: \"gagosian\") {\n    ...PartnerOverview_partner\n    id\n  }\n}\n\nfragment ArtistListItem_artist on Artist {\n  id\n  internalID\n  slug\n  name\n  initials\n  href\n  is_followed: isFollowed\n  nationality\n  birthday\n  deathday\n  image {\n    url\n  }\n}\n\nfragment PartnerLocationSection_partner on Partner {\n  slug\n  name\n  cities\n  locations: locationsConnection(first: 0) {\n    totalCount\n  }\n}\n\nfragment PartnerOverview_partner on Partner {\n  internalID\n  name\n  cities\n  profile {\n    bio\n    id\n  }\n  artists: artistsConnection(sort: SORTABLE_ID_ASC, first: 10) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...ArtistListItem_artist\n        counts {\n          artworks\n        }\n        __typename\n      }\n      cursor\n      id\n    }\n  }\n  ...PartnerLocationSection_partner\n}\n"
  }
};
})();

(node as any).hash = "9d7ba1102dd3bf9fc758cb46ae6e9cb4";

export default node;
