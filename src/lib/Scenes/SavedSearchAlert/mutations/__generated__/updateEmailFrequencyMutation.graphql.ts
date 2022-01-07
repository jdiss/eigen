/**
 * @generated SignedSource<<51def5b9e992c6ece06fa917aa7c3070>>
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
export type updateEmailFrequencyMutation$variables = {
  input: UpdateMyProfileInput;
};
export type updateEmailFrequencyMutationVariables = updateEmailFrequencyMutation$variables;
export type updateEmailFrequencyMutation$data = {
  readonly updateMyUserProfile: {
    readonly userOrError: {
      readonly user?: {
        readonly internalID: string;
      } | null;
    } | null;
  } | null;
};
export type updateEmailFrequencyMutationResponse = updateEmailFrequencyMutation$data;
export type updateEmailFrequencyMutation = {
  variables: updateEmailFrequencyMutationVariables;
  response: updateEmailFrequencyMutation$data;
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
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "updateEmailFrequencyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMyProfilePayload",
        "kind": "LinkedField",
        "name": "updateMyUserProfile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userOrError",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "UpdateMyProfileMutationSuccess",
                "abstractKey": null
              }
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
    "name": "updateEmailFrequencyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMyProfilePayload",
        "kind": "LinkedField",
        "name": "updateMyUserProfile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userOrError",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
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
                "type": "UpdateMyProfileMutationSuccess",
                "abstractKey": null
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
    "cacheID": "c11e093b9357a7bb3ebe0c62f4802bcb",
    "id": null,
    "metadata": {},
    "name": "updateEmailFrequencyMutation",
    "operationKind": "mutation",
    "text": "mutation updateEmailFrequencyMutation(\n  $input: UpdateMyProfileInput!\n) {\n  updateMyUserProfile(input: $input) {\n    userOrError {\n      __typename\n      ... on UpdateMyProfileMutationSuccess {\n        user {\n          internalID\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "36b24d34a9c479d1c037ea22ec9b5961";

export default node;
