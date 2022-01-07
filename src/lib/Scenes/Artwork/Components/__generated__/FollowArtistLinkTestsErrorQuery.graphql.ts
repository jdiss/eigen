/**
 * @generated SignedSource<<7c819585f6dc6ff6e7f42f3bc0bea578>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FollowArtistLinkTestsErrorQuery$variables = {};
export type FollowArtistLinkTestsErrorQueryVariables = FollowArtistLinkTestsErrorQuery$variables;
export type FollowArtistLinkTestsErrorQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"FollowArtistLink_artist">;
  } | null;
};
export type FollowArtistLinkTestsErrorQueryResponse = FollowArtistLinkTestsErrorQuery$data;
export type FollowArtistLinkTestsErrorQuery$rawResponse = {
  readonly artist: {
    readonly id: string;
    readonly slug: string;
    readonly internalID: string;
    readonly is_followed: boolean | null;
  } | null;
};
export type FollowArtistLinkTestsErrorQueryRawResponse = FollowArtistLinkTestsErrorQuery$rawResponse;
export type FollowArtistLinkTestsErrorQuery = {
  variables: FollowArtistLinkTestsErrorQueryVariables;
  response: FollowArtistLinkTestsErrorQuery$data;
  rawResponse: FollowArtistLinkTestsErrorQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artistID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FollowArtistLinkTestsErrorQuery",
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
            "name": "FollowArtistLink_artist"
          }
        ],
        "storageKey": "artist(id:\"artistID\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FollowArtistLinkTestsErrorQuery",
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
            "name": "id",
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
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": "is_followed",
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
            "storageKey": null
          }
        ],
        "storageKey": "artist(id:\"artistID\")"
      }
    ]
  },
  "params": {
    "cacheID": "4a7092df43033e624e44a96185a72ddc",
    "id": null,
    "metadata": {},
    "name": "FollowArtistLinkTestsErrorQuery",
    "operationKind": "query",
    "text": "query FollowArtistLinkTestsErrorQuery {\n  artist(id: \"artistID\") {\n    ...FollowArtistLink_artist\n    id\n  }\n}\n\nfragment FollowArtistLink_artist on Artist {\n  id\n  slug\n  internalID\n  is_followed: isFollowed\n}\n"
  }
};
})();

(node as any).hash = "dcc02c2ec5e8b1b6bb8faa6665ec4cee";

export default node;
