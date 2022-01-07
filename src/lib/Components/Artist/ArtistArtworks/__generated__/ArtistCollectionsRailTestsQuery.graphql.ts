/**
 * @generated SignedSource<<936340c7b8719cf95a550e3fc9660352>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistCollectionsRailTestsQuery$variables = {};
export type ArtistCollectionsRailTestsQueryVariables = ArtistCollectionsRailTestsQuery$variables;
export type ArtistCollectionsRailTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistCollectionsRail_artist">;
  } | null;
  readonly marketingCollections: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ArtistCollectionsRail_collections">;
  }>;
};
export type ArtistCollectionsRailTestsQueryResponse = ArtistCollectionsRailTestsQuery$data;
export type ArtistCollectionsRailTestsQuery$rawResponse = {
  readonly artist: {
    readonly internalID: string;
    readonly slug: string;
    readonly id: string;
  } | null;
  readonly marketingCollections: ReadonlyArray<{
    readonly slug: string;
    readonly id: string;
    readonly title: string;
    readonly priceGuidance: number | null;
    readonly artworksConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly title: string | null;
          readonly image: {
            readonly url: string | null;
          } | null;
          readonly id: string;
        } | null;
      } | null> | null;
      readonly id: string;
    } | null;
  }>;
};
export type ArtistCollectionsRailTestsQueryRawResponse = ArtistCollectionsRailTestsQuery$rawResponse;
export type ArtistCollectionsRailTestsQuery = {
  variables: ArtistCollectionsRailTestsQueryVariables;
  response: ArtistCollectionsRailTestsQuery$data;
  rawResponse: ArtistCollectionsRailTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "david-hockney"
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistCollectionsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistCollectionsRail_artist"
          }
        ],
        "storageKey": "artist(id:\"david-hockney\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollections",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistCollectionsRail_collections"
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
    "name": "ArtistCollectionsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "artist(id:\"david-hockney\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollections",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceGuidance",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "TOTAL"
                ]
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 3
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "-decayed_merch"
              }
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksEdge",
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
                      (v3/*: any*/),
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
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": "artworksConnection(aggregations:[\"TOTAL\"],first:3,sort:\"-decayed_merch\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7f31ff216f50b4113089913bf65649a9",
    "id": null,
    "metadata": {},
    "name": "ArtistCollectionsRailTestsQuery",
    "operationKind": "query",
    "text": "query ArtistCollectionsRailTestsQuery {\n  artist(id: \"david-hockney\") {\n    ...ArtistCollectionsRail_artist\n    id\n  }\n  marketingCollections {\n    ...ArtistCollectionsRail_collections\n    id\n  }\n}\n\nfragment ArtistCollectionsRail_artist on Artist {\n  internalID\n  slug\n}\n\nfragment ArtistCollectionsRail_collections on MarketingCollection {\n  slug\n  id\n  title\n  priceGuidance\n  artworksConnection(first: 3, aggregations: [TOTAL], sort: \"-decayed_merch\") {\n    edges {\n      node {\n        title\n        image {\n          url\n        }\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0e53f596fa02241c960ca511ecded90";

export default node;
