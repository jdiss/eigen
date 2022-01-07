/**
 * @generated SignedSource<<054c086cda5390e388fab87e4d5848d0>>
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
export type PartnerFollowButtonFollowMutation$variables = {
  input: FollowProfileInput;
};
export type PartnerFollowButtonFollowMutationVariables = PartnerFollowButtonFollowMutation$variables;
export type PartnerFollowButtonFollowMutation$data = {
  readonly followProfile: {
    readonly profile: {
      readonly id: string;
      readonly slug: string;
      readonly internalID: string;
      readonly isFollowed: boolean | null;
    } | null;
  } | null;
};
export type PartnerFollowButtonFollowMutationResponse = PartnerFollowButtonFollowMutation$data;
export type PartnerFollowButtonFollowMutation = {
  variables: PartnerFollowButtonFollowMutationVariables;
  response: PartnerFollowButtonFollowMutation$data;
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
            "alias": null,
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
    "name": "PartnerFollowButtonFollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PartnerFollowButtonFollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f4c2974e310ac286342fa182af841885",
    "id": null,
    "metadata": {},
    "name": "PartnerFollowButtonFollowMutation",
    "operationKind": "mutation",
    "text": "mutation PartnerFollowButtonFollowMutation(\n  $input: FollowProfileInput!\n) {\n  followProfile(input: $input) {\n    profile {\n      id\n      slug\n      internalID\n      isFollowed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f6fcbe66e5993810a7dacca675e0c384";

export default node;
