/**
 * @generated SignedSource<<96f3683d61cfddc4a395b700a8c98a7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null;
  unfollow?: boolean | null;
};
export type ArtistHeaderFollowArtistMutation$variables = {
  input: FollowArtistInput;
};
export type ArtistHeaderFollowArtistMutationVariables = ArtistHeaderFollowArtistMutation$variables;
export type ArtistHeaderFollowArtistMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly isFollowed: boolean | null;
    } | null;
  } | null;
};
export type ArtistHeaderFollowArtistMutationResponse = ArtistHeaderFollowArtistMutation$data;
export type ArtistHeaderFollowArtistMutation = {
  variables: ArtistHeaderFollowArtistMutationVariables;
  response: ArtistHeaderFollowArtistMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "FollowArtistPayload",
    "kind": "LinkedField",
    "name": "followArtist",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
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
            "name": "isFollowed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistHeaderFollowArtistMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtistHeaderFollowArtistMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ab85a2eccf1a38b11df8fe6fa1f4f700",
    "id": null,
    "metadata": {},
    "name": "ArtistHeaderFollowArtistMutation",
    "operationKind": "mutation",
    "text": "mutation ArtistHeaderFollowArtistMutation(\n  $input: FollowArtistInput!\n) {\n  followArtist(input: $input) {\n    artist {\n      id\n      isFollowed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ef30681f32ef143c1d431a5c309ceef";

export default node;
