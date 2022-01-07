/**
 * @generated SignedSource<<45fefb6db0a77f4ceafd1580d6ede128>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesFullArtistSeriesListTestsQuery$variables = {};
export type ArtistSeriesFullArtistSeriesListTestsQueryVariables = ArtistSeriesFullArtistSeriesListTestsQuery$variables;
export type ArtistSeriesFullArtistSeriesListTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesFullArtistSeriesList_artist">;
  } | null;
};
export type ArtistSeriesFullArtistSeriesListTestsQueryResponse = ArtistSeriesFullArtistSeriesListTestsQuery$data;
export type ArtistSeriesFullArtistSeriesListTestsQuery$rawResponse = {
  readonly artist: {
    readonly artistSeriesConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly slug: string;
          readonly internalID: string;
          readonly title: string;
          readonly featured: boolean;
          readonly artworksCountMessage: string | null;
          readonly image: {
            readonly url: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
    readonly id: string;
  } | null;
};
export type ArtistSeriesFullArtistSeriesListTestsQueryRawResponse = ArtistSeriesFullArtistSeriesListTestsQuery$rawResponse;
export type ArtistSeriesFullArtistSeriesListTestsQuery = {
  variables: ArtistSeriesFullArtistSeriesListTestsQueryVariables;
  response: ArtistSeriesFullArtistSeriesListTestsQuery$data;
  rawResponse: ArtistSeriesFullArtistSeriesListTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "a-great-artist"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesFullArtistSeriesListTestsQuery",
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
            "name": "ArtistSeriesFullArtistSeriesList_artist"
          }
        ],
        "storageKey": "artist(id:\"a-great-artist\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistSeriesFullArtistSeriesListTestsQuery",
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
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 50
              }
            ],
            "concreteType": "ArtistSeriesConnection",
            "kind": "LinkedField",
            "name": "artistSeriesConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistSeriesEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistSeries",
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
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "featured",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artworksCountMessage",
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
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artistSeriesConnection(first:50)"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artist(id:\"a-great-artist\")"
      }
    ]
  },
  "params": {
    "cacheID": "5ccd06c8080fdf65614a4744a117473a",
    "id": null,
    "metadata": {},
    "name": "ArtistSeriesFullArtistSeriesListTestsQuery",
    "operationKind": "query",
    "text": "query ArtistSeriesFullArtistSeriesListTestsQuery {\n  artist(id: \"a-great-artist\") {\n    ...ArtistSeriesFullArtistSeriesList_artist\n    id\n  }\n}\n\nfragment ArtistSeriesFullArtistSeriesList_artist on Artist {\n  artistSeriesConnection(first: 50) {\n    edges {\n      node {\n        slug\n        internalID\n        title\n        featured\n        artworksCountMessage\n        image {\n          url\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "439302971f623d6c11eed8192c4e0360";

export default node;
