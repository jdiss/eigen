/**
 * @generated SignedSource<<f8169bb9ad3be529273405b617a31023>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MyProfilePaymentDeleteCardMutation$variables = {
  internalID: string;
};
export type MyProfilePaymentDeleteCardMutationVariables = MyProfilePaymentDeleteCardMutation$variables;
export type MyProfilePaymentDeleteCardMutation$data = {
  readonly deleteCreditCard: {
    readonly creditCardOrError: {
      readonly mutationError?: {
        readonly error: string | null;
      } | null;
    } | null;
  } | null;
};
export type MyProfilePaymentDeleteCardMutationResponse = MyProfilePaymentDeleteCardMutation$data;
export type MyProfilePaymentDeleteCardMutation = {
  variables: MyProfilePaymentDeleteCardMutationVariables;
  response: MyProfilePaymentDeleteCardMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "internalID"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "internalID"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
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
          "name": "error",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CreditCardMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MyProfilePaymentDeleteCardMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCreditCardPayload",
        "kind": "LinkedField",
        "name": "deleteCreditCard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "creditCardOrError",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
    "name": "MyProfilePaymentDeleteCardMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCreditCardPayload",
        "kind": "LinkedField",
        "name": "deleteCreditCard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "creditCardOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ca64d29ffc1dd3cce986a3aeef4b7b3f",
    "id": null,
    "metadata": {},
    "name": "MyProfilePaymentDeleteCardMutation",
    "operationKind": "mutation",
    "text": "mutation MyProfilePaymentDeleteCardMutation(\n  $internalID: String!\n) {\n  deleteCreditCard(input: {id: $internalID}) {\n    creditCardOrError {\n      __typename\n      ... on CreditCardMutationFailure {\n        mutationError {\n          error\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "05a4b6a44abe3b7bb9041abf172fd14e";

export default node;
