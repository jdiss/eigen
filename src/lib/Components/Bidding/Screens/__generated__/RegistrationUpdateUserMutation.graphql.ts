/**
 * @generated SignedSource<<e8218345e7dddb315774bab2b992a3a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateMyProfileInput = {
  artworksPerYear?: string | null;
  bio?: string | null;
  clientMutationId?: string | null;
  collectorLevel?: number | null;
  completedOnboarding?: boolean | null;
  email?: string | null;
  emailFrequency?: string | null;
  gender?: string | null;
  iconUrl?: string | null;
  industry?: string | null;
  isCollector?: boolean | null;
  location?: EditableLocation | null;
  name?: string | null;
  notes?: string | null;
  password?: string | null;
  phone?: string | null;
  priceRangeMax?: number | null;
  priceRangeMin?: number | null;
  privacy?: number | null;
  profession?: string | null;
  receiveLotOpeningSoonNotification?: boolean | null;
  receiveNewSalesNotification?: boolean | null;
  receiveNewWorksNotification?: boolean | null;
  receiveOutbidNotification?: boolean | null;
  receivePromotionNotification?: boolean | null;
  receivePurchaseNotification?: boolean | null;
  receiveSaleOpeningClosingNotification?: boolean | null;
  shareFollows?: boolean | null;
};
export type EditableLocation = {
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  state?: string | null;
  stateCode?: string | null;
  summary?: string | null;
};
export type RegistrationUpdateUserMutation$variables = {
  input: UpdateMyProfileInput;
};
export type RegistrationUpdateUserMutationVariables = RegistrationUpdateUserMutation$variables;
export type RegistrationUpdateUserMutation$data = {
  readonly updateMyUserProfile: {
    readonly clientMutationId: string | null;
    readonly user: {
      readonly phone: string | null;
    } | null;
  } | null;
};
export type RegistrationUpdateUserMutationResponse = RegistrationUpdateUserMutation$data;
export type RegistrationUpdateUserMutation = {
  variables: RegistrationUpdateUserMutationVariables;
  response: RegistrationUpdateUserMutation$data;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "phone",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegistrationUpdateUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMyProfilePayload",
        "kind": "LinkedField",
        "name": "updateMyUserProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
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
    "name": "RegistrationUpdateUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMyProfilePayload",
        "kind": "LinkedField",
        "name": "updateMyUserProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9e8a7891114d59f7905a4aa9027e24e0",
    "id": null,
    "metadata": {},
    "name": "RegistrationUpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation RegistrationUpdateUserMutation(\n  $input: UpdateMyProfileInput!\n) {\n  updateMyUserProfile(input: $input) {\n    clientMutationId\n    user {\n      phone\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0fa063813eeaa0721f07bde5237f58b";

export default node;
