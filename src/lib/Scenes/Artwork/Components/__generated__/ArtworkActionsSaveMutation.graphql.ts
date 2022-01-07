/**
 * @generated SignedSource<<7a63cd54278433abba09b5f5331bfa4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SaveArtworkInput = {
  artworkID?: string | null;
  clientMutationId?: string | null;
  remove?: boolean | null;
};
export type ArtworkActionsSaveMutation$variables = {
  input: SaveArtworkInput;
};
export type ArtworkActionsSaveMutationVariables = ArtworkActionsSaveMutation$variables;
export type ArtworkActionsSaveMutation$data = {
  readonly saveArtwork: {
    readonly artwork: {
      readonly id: string;
      readonly is_saved: boolean | null;
    } | null;
  } | null;
};
export type ArtworkActionsSaveMutationResponse = ArtworkActionsSaveMutation$data;
export type ArtworkActionsSaveMutation = {
  variables: ArtworkActionsSaveMutationVariables;
  response: ArtworkActionsSaveMutation$data;
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
    "concreteType": "SaveArtworkPayload",
    "kind": "LinkedField",
    "name": "saveArtwork",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
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
            "alias": "is_saved",
            "args": null,
            "kind": "ScalarField",
            "name": "isSaved",
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
    "name": "ArtworkActionsSaveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtworkActionsSaveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5177deeca0d7ff411ca8c5807f3e8618",
    "id": null,
    "metadata": {},
    "name": "ArtworkActionsSaveMutation",
    "operationKind": "mutation",
    "text": "mutation ArtworkActionsSaveMutation(\n  $input: SaveArtworkInput!\n) {\n  saveArtwork(input: $input) {\n    artwork {\n      id\n      is_saved: isSaved\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d2defeccf752edd1928ff070c2a253f";

export default node;
