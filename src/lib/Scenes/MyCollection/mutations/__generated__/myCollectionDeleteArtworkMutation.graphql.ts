/**
 * @generated SignedSource<<89b023e780e9167628ea5e2951d7ff20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MyCollectionDeleteArtworkInput = {
  artworkId: string;
  clientMutationId?: string | null;
};
export type myCollectionDeleteArtworkMutation$variables = {
  input: MyCollectionDeleteArtworkInput;
};
export type myCollectionDeleteArtworkMutationVariables = myCollectionDeleteArtworkMutation$variables;
export type myCollectionDeleteArtworkMutation$data = {
  readonly myCollectionDeleteArtwork: {
    readonly artworkOrError: {
      readonly success?: boolean | null;
      readonly mutationError?: {
        readonly message: string;
      } | null;
    } | null;
  } | null;
};
export type myCollectionDeleteArtworkMutationResponse = myCollectionDeleteArtworkMutation$data;
export type myCollectionDeleteArtworkMutation = {
  variables: myCollectionDeleteArtworkMutationVariables;
  response: myCollectionDeleteArtworkMutation$data;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "success",
      "storageKey": null
    }
  ],
  "type": "MyCollectionArtworkMutationDeleteSuccess",
  "abstractKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GravityMutationError",
      "kind": "LinkedField",
      "name": "mutationError",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MyCollectionArtworkMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "myCollectionDeleteArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MyCollectionDeleteArtworkPayload",
        "kind": "LinkedField",
        "name": "myCollectionDeleteArtwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artworkOrError",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "myCollectionDeleteArtworkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MyCollectionDeleteArtworkPayload",
        "kind": "LinkedField",
        "name": "myCollectionDeleteArtwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "artworkOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a4c6feed6074e0a2687410700d85f303",
    "id": null,
    "metadata": {},
    "name": "myCollectionDeleteArtworkMutation",
    "operationKind": "mutation",
    "text": "mutation myCollectionDeleteArtworkMutation(\n  $input: MyCollectionDeleteArtworkInput!\n) {\n  myCollectionDeleteArtwork(input: $input) {\n    artworkOrError {\n      __typename\n      ... on MyCollectionArtworkMutationDeleteSuccess {\n        success\n      }\n      ... on MyCollectionArtworkMutationFailure {\n        mutationError {\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9bf328c100be019ca7da7d3227d14065";

export default node;
