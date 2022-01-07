/**
 * @generated SignedSource<<d0082c5e03bd6d8da4756b5e7bb54fc2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesHeaderTestsQuery$variables = {};
export type ArtistSeriesHeaderTestsQueryVariables = ArtistSeriesHeaderTestsQuery$variables;
export type ArtistSeriesHeaderTestsQuery$data = {
  readonly artistSeries: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesHeader_artistSeries">;
  } | null;
};
export type ArtistSeriesHeaderTestsQueryResponse = ArtistSeriesHeaderTestsQuery$data;
export type ArtistSeriesHeaderTestsQuery$rawResponse = {
  readonly artistSeries: {
    readonly image: {
      readonly url: string | null;
    } | null;
  } | null;
};
export type ArtistSeriesHeaderTestsQueryRawResponse = ArtistSeriesHeaderTestsQuery$rawResponse;
export type ArtistSeriesHeaderTestsQuery = {
  variables: ArtistSeriesHeaderTestsQueryVariables;
  response: ArtistSeriesHeaderTestsQuery$data;
  rawResponse: ArtistSeriesHeaderTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "pumpkins"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesHeaderTestsQuery",
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
            "name": "ArtistSeriesHeader_artistSeries"
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
    "name": "ArtistSeriesHeaderTestsQuery",
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
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ]
  },
  "params": {
    "cacheID": "2453dc5a4829c2699e9627c3f450faaf",
    "id": null,
    "metadata": {},
    "name": "ArtistSeriesHeaderTestsQuery",
    "operationKind": "query",
    "text": "query ArtistSeriesHeaderTestsQuery {\n  artistSeries(id: \"pumpkins\") {\n    ...ArtistSeriesHeader_artistSeries\n  }\n}\n\nfragment ArtistSeriesHeader_artistSeries on ArtistSeries {\n  image {\n    url\n  }\n}\n"
  }
};
})();

(node as any).hash = "8195b41790b6eb2e0d25a9d32e318b3f";

export default node;
