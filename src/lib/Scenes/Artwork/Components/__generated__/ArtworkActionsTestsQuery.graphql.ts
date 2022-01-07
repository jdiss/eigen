/**
 * @generated SignedSource<<c4adf3965fdb83ad16aa3e4d548d0072>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkActionsTestsQuery$variables = {};
export type ArtworkActionsTestsQueryVariables = ArtworkActionsTestsQuery$variables;
export type ArtworkActionsTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkActions_artwork">;
  } | null;
};
export type ArtworkActionsTestsQueryResponse = ArtworkActionsTestsQuery$data;
export type ArtworkActionsTestsQuery$rawResponse = {
  readonly artwork: {
    readonly id: string;
    readonly internalID: string;
    readonly slug: string;
    readonly title: string | null;
    readonly href: string | null;
    readonly is_saved: boolean | null;
    readonly is_hangable: boolean | null;
    readonly artists: ReadonlyArray<{
      readonly name: string | null;
      readonly id: string;
    } | null> | null;
    readonly image: {
      readonly url: string | null;
    } | null;
    readonly sale: {
      readonly isAuction: boolean | null;
      readonly isClosed: boolean | null;
      readonly id: string;
    } | null;
    readonly widthCm: number | null;
    readonly heightCm: number | null;
  } | null;
};
export type ArtworkActionsTestsQueryRawResponse = ArtworkActionsTestsQuery$rawResponse;
export type ArtworkActionsTestsQuery = {
  variables: ArtworkActionsTestsQueryVariables;
  response: ArtworkActionsTestsQuery$data;
  rawResponse: ArtworkActionsTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artworkID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkActionsTestsQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtworkActions_artwork"
          }
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkActionsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "name": "slug",
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
            "name": "href",
            "storageKey": null
          },
          {
            "alias": "is_saved",
            "args": null,
            "kind": "ScalarField",
            "name": "isSaved",
            "storageKey": null
          },
          {
            "alias": "is_hangable",
            "args": null,
            "kind": "ScalarField",
            "name": "isHangable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
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
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAuction",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isClosed",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "widthCm",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "heightCm",
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ]
  },
  "params": {
    "cacheID": "e227d3115b8cab1ec7dc4093962c848f",
    "id": null,
    "metadata": {},
    "name": "ArtworkActionsTestsQuery",
    "operationKind": "query",
    "text": "query ArtworkActionsTestsQuery {\n  artwork(id: \"artworkID\") {\n    ...ArtworkActions_artwork\n    id\n  }\n}\n\nfragment ArtworkActions_artwork on Artwork {\n  id\n  internalID\n  slug\n  title\n  href\n  is_saved: isSaved\n  is_hangable: isHangable\n  artists {\n    name\n    id\n  }\n  image {\n    url\n  }\n  sale {\n    isAuction\n    isClosed\n    id\n  }\n  widthCm\n  heightCm\n}\n"
  }
};
})();

(node as any).hash = "1ce0ea03e9165bee08b28482eaeb3d3a";

export default node;
