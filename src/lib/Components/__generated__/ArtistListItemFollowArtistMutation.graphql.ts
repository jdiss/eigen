/**
 * @generated SignedSource<<c7563a05bb301ef9419e3b20ba964954>>
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
export type ArtistListItemFollowArtistMutation$variables = {
  input: FollowArtistInput;
};
export type ArtistListItemFollowArtistMutationVariables = ArtistListItemFollowArtistMutation$variables;
export type ArtistListItemFollowArtistMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly is_followed: boolean | null;
    } | null;
  } | null;
};
export type ArtistListItemFollowArtistMutationResponse = ArtistListItemFollowArtistMutation$data;
export type ArtistListItemFollowArtistMutation = {
  variables: ArtistListItemFollowArtistMutationVariables;
  response: ArtistListItemFollowArtistMutation$data;
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
    "name": "ArtistListItemFollowArtistMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtistListItemFollowArtistMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d049c29f027bb21204ebd3afc42cb1a2",
    "id": null,
    "metadata": {},
    "name": "ArtistListItemFollowArtistMutation",
    "operationKind": "mutation",
    "text": "mutation ArtistListItemFollowArtistMutation(\n  $input: FollowArtistInput!\n) {\n  followArtist(input: $input) {\n    artist {\n      id\n      is_followed: isFollowed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2ba11cda7d0e8b5e39e28d148fb56e94";

export default node;
