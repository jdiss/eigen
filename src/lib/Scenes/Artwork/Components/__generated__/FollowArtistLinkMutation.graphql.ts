/**
 * @generated SignedSource<<5324e232d3fd28f10ac5a3014bdbfbcf>>
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
export type FollowArtistLinkMutation$variables = {
  input: FollowArtistInput;
};
export type FollowArtistLinkMutationVariables = FollowArtistLinkMutation$variables;
export type FollowArtistLinkMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly is_followed: boolean | null;
    } | null;
  } | null;
};
export type FollowArtistLinkMutationResponse = FollowArtistLinkMutation$data;
export type FollowArtistLinkMutation = {
  variables: FollowArtistLinkMutationVariables;
  response: FollowArtistLinkMutation$data;
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
            "alias": "is_followed",
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
    "name": "FollowArtistLinkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FollowArtistLinkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2429a78fffc06f3861cfecb20d89ee35",
    "id": null,
    "metadata": {},
    "name": "FollowArtistLinkMutation",
    "operationKind": "mutation",
    "text": "mutation FollowArtistLinkMutation(\n  $input: FollowArtistInput!\n) {\n  followArtist(input: $input) {\n    artist {\n      id\n      is_followed: isFollowed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a6ba5891075f491cd96bb83dfff07883";

export default node;
