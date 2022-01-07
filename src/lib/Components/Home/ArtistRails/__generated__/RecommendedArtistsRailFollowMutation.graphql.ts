/**
 * @generated SignedSource<<558f81deffed4ce34ca3bec9c9be3730>>
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
export type RecommendedArtistsRailFollowMutation$variables = {
  input: FollowArtistInput;
};
export type RecommendedArtistsRailFollowMutationVariables = RecommendedArtistsRailFollowMutation$variables;
export type RecommendedArtistsRailFollowMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly isFollowed: boolean | null;
    } | null;
  } | null;
};
export type RecommendedArtistsRailFollowMutationResponse = RecommendedArtistsRailFollowMutation$data;
export type RecommendedArtistsRailFollowMutation = {
  variables: RecommendedArtistsRailFollowMutationVariables;
  response: RecommendedArtistsRailFollowMutation$data;
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
    "name": "RecommendedArtistsRailFollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecommendedArtistsRailFollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4977eb4752d7fcf8cf11ce5fa90f5cb3",
    "id": null,
    "metadata": {},
    "name": "RecommendedArtistsRailFollowMutation",
    "operationKind": "mutation",
    "text": "mutation RecommendedArtistsRailFollowMutation(\n  $input: FollowArtistInput!\n) {\n  followArtist(input: $input) {\n    artist {\n      id\n      isFollowed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "054a8b1ef7f810861f694bb25111efc8";

export default node;
