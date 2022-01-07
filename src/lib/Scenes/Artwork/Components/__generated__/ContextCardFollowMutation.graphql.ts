/**
 * @generated SignedSource<<17bf9f05ba036cdfa184f2f380757c08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowShowInput = {
  clientMutationId?: string | null;
  partnerShowID?: string | null;
  unfollow?: boolean | null;
};
export type ContextCardFollowMutation$variables = {
  input: FollowShowInput;
};
export type ContextCardFollowMutationVariables = ContextCardFollowMutation$variables;
export type ContextCardFollowMutation$data = {
  readonly followShow: {
    readonly show: {
      readonly slug: string;
      readonly internalID: string;
      readonly isFollowed: boolean | null;
      readonly id: string;
    } | null;
  } | null;
};
export type ContextCardFollowMutationResponse = ContextCardFollowMutation$data;
export type ContextCardFollowMutation = {
  variables: ContextCardFollowMutationVariables;
  response: ContextCardFollowMutation$data;
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
    "concreteType": "FollowShowPayload",
    "kind": "LinkedField",
    "name": "followShow",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
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
          },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContextCardFollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContextCardFollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d492efc5bb01d11b8045f4bd9a8013d7",
    "id": null,
    "metadata": {},
    "name": "ContextCardFollowMutation",
    "operationKind": "mutation",
    "text": "mutation ContextCardFollowMutation(\n  $input: FollowShowInput!\n) {\n  followShow(input: $input) {\n    show {\n      slug\n      internalID\n      isFollowed\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d5670cb5205e24a337e07eec0afbf553";

export default node;
