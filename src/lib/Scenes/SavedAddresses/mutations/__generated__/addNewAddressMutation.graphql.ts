/**
 * @generated SignedSource<<6d82fe5323db7321802b5ee9c6d91249>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserAddressInput = {
  attributes: UserAddressAttributes;
  clientMutationId?: string | null;
};
export type UserAddressAttributes = {
  addressLine1: string;
  addressLine2?: string | null;
  addressLine3?: string | null;
  city: string;
  country: string;
  name: string;
  phoneNumber?: string | null;
  phoneNumberCountryCode?: string | null;
  postalCode?: string | null;
  region?: string | null;
};
export type addNewAddressMutation$variables = {
  input: CreateUserAddressInput;
};
export type addNewAddressMutationVariables = addNewAddressMutation$variables;
export type addNewAddressMutation$data = {
  readonly createUserAddress: {
    readonly userAddressOrErrors: {
      readonly id?: string;
      readonly internalID?: string;
      readonly addressLine1?: string;
      readonly addressLine2?: string | null;
      readonly city?: string;
      readonly country?: string;
      readonly isDefault?: boolean;
      readonly name?: string | null;
      readonly phoneNumber?: string | null;
      readonly postalCode?: string | null;
      readonly region?: string | null;
      readonly errors?: ReadonlyArray<{
        readonly message: string;
      }>;
    };
  } | null;
};
export type addNewAddressMutationResponse = addNewAddressMutation$data;
export type addNewAddressMutation = {
  variables: addNewAddressMutationVariables;
  response: addNewAddressMutation$data;
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
      "name": "city",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "country",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDefault",
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
      "name": "phoneNumber",
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
      "name": "region",
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
    "name": "addNewAddressMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateUserAddressPayload",
        "kind": "LinkedField",
        "name": "createUserAddress",
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
    "name": "addNewAddressMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateUserAddressPayload",
        "kind": "LinkedField",
        "name": "createUserAddress",
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
    "cacheID": "48f9985b022e04924a8464b308ce2ee4",
    "id": null,
    "metadata": {},
    "name": "addNewAddressMutation",
    "operationKind": "mutation",
    "text": "mutation addNewAddressMutation(\n  $input: CreateUserAddressInput!\n) {\n  createUserAddress(input: $input) {\n    userAddressOrErrors {\n      __typename\n      ... on UserAddress {\n        id\n        internalID\n        addressLine1\n        addressLine2\n        city\n        country\n        isDefault\n        name\n        phoneNumber\n        postalCode\n        region\n      }\n      ... on Errors {\n        errors {\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "98ac48306b7d0e1a4ad2ecb4ea70e78b";

export default node;
