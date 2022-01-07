/**
 * @generated SignedSource<<91adb3f7754546b326d5979e553fcbee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesMetaTestsQuery$variables = {};
export type ArtistSeriesMetaTestsQueryVariables = ArtistSeriesMetaTestsQuery$variables;
export type ArtistSeriesMetaTestsQuery$data = {
  readonly artistSeries: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesMeta_artistSeries">;
  } | null;
};
export type ArtistSeriesMetaTestsQueryResponse = ArtistSeriesMetaTestsQuery$data;
export type ArtistSeriesMetaTestsQuery$rawResponse = {
  readonly artistSeries: {
    readonly internalID: string;
    readonly slug: string;
    readonly title: string;
    readonly description: string | null;
    readonly artists: ReadonlyArray<{
      readonly id: string;
      readonly internalID: string;
      readonly name: string | null;
      readonly slug: string;
      readonly isFollowed: boolean | null;
      readonly image: {
        readonly url: string | null;
      } | null;
    } | null> | null;
  } | null;
};
export type ArtistSeriesMetaTestsQueryRawResponse = ArtistSeriesMetaTestsQuery$rawResponse;
export type ArtistSeriesMetaTestsQuery = {
  variables: ArtistSeriesMetaTestsQueryVariables;
  response: ArtistSeriesMetaTestsQuery$data;
  rawResponse: ArtistSeriesMetaTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "pumpkins"
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
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesMetaTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistSeriesMeta_artistSeries"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistSeriesMetaTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
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
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 1
              }
            ],
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFollowed",
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
            "storageKey": "artists(size:1)"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ]
  },
  "params": {
    "cacheID": "c6bdf0625589dabe0421e06411cb32bc",
    "id": null,
    "metadata": {},
    "name": "ArtistSeriesMetaTestsQuery",
    "operationKind": "query",
    "text": "query ArtistSeriesMetaTestsQuery {\n  artistSeries(id: \"pumpkins\") {\n    ...ArtistSeriesMeta_artistSeries\n  }\n}\n\nfragment ArtistSeriesMeta_artistSeries on ArtistSeries {\n  internalID\n  slug\n  title\n  description\n  artists(size: 1) {\n    id\n    internalID\n    name\n    slug\n    isFollowed\n    image {\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2cf5b0db7dfe478f822b91fb4ee2e201";

export default node;
