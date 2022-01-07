/**
 * @generated SignedSource<<dc1f60f00acc821e0f61957a3ad64b95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowProfileInput = {
  clientMutationId?: string | null;
  profileID?: string | null;
  unfollow?: boolean | null;
};
export type PartnerCardFollowMutation$variables = {
  input: FollowProfileInput;
};
export type PartnerCardFollowMutationVariables = PartnerCardFollowMutation$variables;
export type PartnerCardFollowMutation$data = {
  readonly followProfile: {
    readonly profile: {
      readonly id: string;
      readonly slug: string;
      readonly internalID: string;
      readonly is_followed: boolean | null;
    } | null;
  } | null;
};
export type PartnerCardFollowMutationResponse = PartnerCardFollowMutation$data;
export type PartnerCardFollowMutation = {
  variables: PartnerCardFollowMutationVariables;
  response: PartnerCardFollowMutation$data;
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
    "concreteType": "FollowProfilePayload",
    "kind": "LinkedField",
    "name": "followProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Profile",
        "kind": "LinkedField",
        "name": "profile",
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
            "name": "slug",
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
    "name": "PartnerCardFollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PartnerCardFollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "48248313b514d25fe6222fdd2cc25dab",
    "id": null,
    "metadata": {},
    "name": "PartnerCardFollowMutation",
    "operationKind": "mutation",
    "text": "mutation PartnerCardFollowMutation(\n  $input: FollowProfileInput!\n) {\n  followProfile(input: $input) {\n    profile {\n      id\n      slug\n      internalID\n      is_followed: isFollowed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a0a4c454804cc2315d016e42a33398fd";

export default node;
