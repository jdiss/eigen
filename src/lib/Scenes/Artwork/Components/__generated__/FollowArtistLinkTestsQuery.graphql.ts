/**
 * @generated SignedSource<<45b06228fc6b501d2cfbd20349c570f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FollowArtistLinkTestsQuery$variables = {};
export type FollowArtistLinkTestsQueryVariables = FollowArtistLinkTestsQuery$variables;
export type FollowArtistLinkTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"FollowArtistLink_artist">;
  } | null;
};
export type FollowArtistLinkTestsQueryResponse = FollowArtistLinkTestsQuery$data;
export type FollowArtistLinkTestsQuery$rawResponse = {
  readonly artist: {
    readonly id: string;
    readonly slug: string;
    readonly internalID: string;
    readonly is_followed: boolean | null;
  } | null;
};
export type FollowArtistLinkTestsQueryRawResponse = FollowArtistLinkTestsQuery$rawResponse;
export type FollowArtistLinkTestsQuery = {
  variables: FollowArtistLinkTestsQueryVariables;
  response: FollowArtistLinkTestsQuery$data;
  rawResponse: FollowArtistLinkTestsQuery$rawResponse;
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
    "name": "FollowArtistLinkTestsQuery",
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
    "name": "FollowArtistLinkTestsQuery",
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
    "cacheID": "07ff4dc419cbdf0c5f7d6cd0bb12b008",
    "id": null,
    "metadata": {},
    "name": "FollowArtistLinkTestsQuery",
    "operationKind": "query",
    "text": "query FollowArtistLinkTestsQuery {\n  artist(id: \"artistID\") {\n    ...FollowArtistLink_artist\n    id\n  }\n}\n\nfragment FollowArtistLink_artist on Artist {\n  id\n  slug\n  internalID\n  is_followed: isFollowed\n}\n"
  }
};
})();

(node as any).hash = "98d40b3b1d0ef9309dd2e799b8e5c7da";

export default node;
