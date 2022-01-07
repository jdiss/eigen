/**
 * @generated SignedSource<<4408be85bb02e08be3f9d595cea0cad4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EmailConfirmationBannerMutation$variables = {};
export type EmailConfirmationBannerMutationVariables = EmailConfirmationBannerMutation$variables;
export type EmailConfirmationBannerMutation$data = {
  readonly sendConfirmationEmail: {
    readonly confirmationOrError: {
      readonly unconfirmedEmail?: string | null;
      readonly mutationError?: {
        readonly error: string | null;
        readonly message: string;
      } | null;
    } | null;
  } | null;
};
export type EmailConfirmationBannerMutationResponse = EmailConfirmationBannerMutation$data;
export type EmailConfirmationBannerMutation = {
  variables: EmailConfirmationBannerMutationVariables;
  response: EmailConfirmationBannerMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "input",
    "value": {}
  }
],
v1 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unconfirmedEmail",
      "storageKey": null
    }
  ],
  "type": "SendConfirmationEmailMutationSuccess",
  "abstractKey": null
},
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
        },
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
  "type": "SendConfirmationEmailMutationFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EmailConfirmationBannerMutation",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SendConfirmationEmailMutationPayload",
        "kind": "LinkedField",
        "name": "sendConfirmationEmail",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "confirmationOrError",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "sendConfirmationEmail(input:{})"
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EmailConfirmationBannerMutation",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SendConfirmationEmailMutationPayload",
        "kind": "LinkedField",
        "name": "sendConfirmationEmail",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "confirmationOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "sendConfirmationEmail(input:{})"
      }
    ]
  },
  "params": {
    "cacheID": "90d2bd62d1af3056963ca33fbff85f72",
    "id": null,
    "metadata": {},
    "name": "EmailConfirmationBannerMutation",
    "operationKind": "mutation",
    "text": "mutation EmailConfirmationBannerMutation {\n  sendConfirmationEmail(input: {}) {\n    confirmationOrError {\n      __typename\n      ... on SendConfirmationEmailMutationSuccess {\n        unconfirmedEmail\n      }\n      ... on SendConfirmationEmailMutationFailure {\n        mutationError {\n          error\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8182aba3e36ec68ddd990739d7e718ff";

export default node;
