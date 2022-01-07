/**
 * @generated SignedSource<<99bc2b7019c805913e21d124e4f147c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageCarouselTestsQuery$variables = {};
export type ImageCarouselTestsQueryVariables = ImageCarouselTestsQuery$variables;
export type ImageCarouselTestsQuery$data = {
  readonly artwork: {
    readonly images: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ImageCarousel_images">;
    } | null> | null;
  } | null;
};
export type ImageCarouselTestsQueryResponse = ImageCarouselTestsQuery$data;
export type ImageCarouselTestsQuery$rawResponse = {
  readonly artwork: {
    readonly images: ReadonlyArray<{
      readonly url: string | null;
      readonly width: number | null;
      readonly height: number | null;
      readonly imageVersions: ReadonlyArray<string | null> | null;
      readonly deepZoom: {
        readonly image: {
          readonly tileSize: number | null;
          readonly url: string | null;
          readonly format: string | null;
          readonly size: {
            readonly width: number | null;
            readonly height: number | null;
          } | null;
        } | null;
      } | null;
    } | null> | null;
    readonly id: string;
  } | null;
};
export type ImageCarouselTestsQueryRawResponse = ImageCarouselTestsQuery$rawResponse;
export type ImageCarouselTestsQuery = {
  variables: ImageCarouselTestsQueryVariables;
  response: ImageCarouselTestsQuery$data;
  rawResponse: ImageCarouselTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "unused"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ImageCarouselTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ImageCarousel_images"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"unused\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ImageCarouselTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              {
                "alias": "url",
                "args": null,
                "kind": "ScalarField",
                "name": "imageURL",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "width",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "height",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "imageVersions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "DeepZoom",
                "kind": "LinkedField",
                "name": "deepZoom",
                "plural": false,
                "selections": [
                  {
                    "alias": "image",
                    "args": null,
                    "concreteType": "DeepZoomImage",
                    "kind": "LinkedField",
                    "name": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "tileSize",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "TileSize",
                        "storageKey": null
                      },
                      {
                        "alias": "url",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "Url",
                        "storageKey": null
                      },
                      {
                        "alias": "format",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "Format",
                        "storageKey": null
                      },
                      {
                        "alias": "size",
                        "args": null,
                        "concreteType": "DeepZoomImageSize",
                        "kind": "LinkedField",
                        "name": "Size",
                        "plural": false,
                        "selections": [
                          {
                            "alias": "width",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "Width",
                            "storageKey": null
                          },
                          {
                            "alias": "height",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "Height",
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"unused\")"
      }
    ]
  },
  "params": {
    "cacheID": "8792d37017c851a70dfa3671f759a20f",
    "id": null,
    "metadata": {},
    "name": "ImageCarouselTestsQuery",
    "operationKind": "query",
    "text": "query ImageCarouselTestsQuery {\n  artwork(id: \"unused\") {\n    images {\n      ...ImageCarousel_images\n    }\n    id\n  }\n}\n\nfragment ImageCarousel_images on Image {\n  url: imageURL\n  width\n  height\n  imageVersions\n  deepZoom {\n    image: Image {\n      tileSize: TileSize\n      url: Url\n      format: Format\n      size: Size {\n        width: Width\n        height: Height\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f69d35c674ffe60f75fa008371a55c7";

export default node;
