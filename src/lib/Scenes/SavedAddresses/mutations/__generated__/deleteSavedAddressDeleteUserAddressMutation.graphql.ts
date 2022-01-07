/**
 * @generated SignedSource<<9fc4fa78e93aedbaf3756317ac29a7d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteUserAddressInput = {
  clientMutationId?: string | null;
  userAddressID: string;
};
export type deleteSavedAddressDeleteUserAddressMutation$variables = {
  input: DeleteUserAddressInput;
};
export type deleteSavedAddressDeleteUserAddressMutationVariables = deleteSavedAddressDeleteUserAddressMutation$variables;
export type deleteSavedAddressDeleteUserAddressMutation$data = {
  readonly deleteUserAddress: {
    readonly userAddressOrErrors: {
      readonly id?: string;
      readonly internalID?: string;
      readonly name?: string | null;
      readonly addressLine1?: string;
      readonly addressLine2?: string | null;
      readonly addressLine3?: string | null;
      readonly city?: string;
      readonly region?: string | null;
      readonly postalCode?: string | null;
      readonly phoneNumber?: string | null;
      readonly isDefault?: boolean;
      readonly errors?: ReadonlyArray<{
        readonly code: string;
        readonly message: string;
      }>;
    };
  } | null;
};
export type deleteSavedAddressDeleteUserAddressMutationResponse = deleteSavedAddressDeleteUserAddressMutation$data;
export type deleteSavedAddressDeleteUserAddressMutation = {
  variables: deleteSavedAddressDeleteUserAddressMutationVariables;
  response: deleteSavedAddressDeleteUserAddressMutation$data;
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
      "name": "id",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "addressLine1",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "addressLine2",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "addressLine3",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "city",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "region",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postalCode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phoneNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDefault",
      "storageKey": null
    }
  ],
  "type": "UserAddress",
  "abstractKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Error",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "code",
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
  "type": "Errors",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteSavedAddressDeleteUserAddressMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteUserAddressPayload",
        "kind": "LinkedField",
        "name": "deleteUserAddress",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userAddressOrErrors",
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
    "name": "deleteSavedAddressDeleteUserAddressMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteUserAddressPayload",
        "kind": "LinkedField",
        "name": "deleteUserAddress",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userAddressOrErrors",
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
    "cacheID": "c575d1e45a866f470dcf45a28beeb522",
    "id": null,
    "metadata": {},
    "name": "deleteSavedAddressDeleteUserAddressMutation",
    "operationKind": "mutation",
    "text": "mutation deleteSavedAddressDeleteUserAddressMutation(\n  $input: DeleteUserAddressInput!\n) {\n  deleteUserAddress(input: $input) {\n    userAddressOrErrors {\n      __typename\n      ... on UserAddress {\n        id\n        internalID\n        name\n        addressLine1\n        addressLine2\n        addressLine3\n        city\n        region\n        postalCode\n        phoneNumber\n        isDefault\n      }\n      ... on Errors {\n        errors {\n          code\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "919ab63c8176f0ebdd4002b0055c6826";

export default node;
