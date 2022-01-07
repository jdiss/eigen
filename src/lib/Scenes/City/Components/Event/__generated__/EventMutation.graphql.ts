/**
 * @generated SignedSource<<d834ecb42701f39985d8e6158cf15dcc>>
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
export type EventMutation$variables = {
  input: FollowShowInput;
};
export type EventMutationVariables = EventMutation$variables;
export type EventMutation$data = {
  readonly followShow: {
    readonly show: {
      readonly slug: string;
      readonly internalID: string;
      readonly is_followed: boolean | null;
    } | null;
  } | null;
};
export type EventMutationResponse = EventMutation$data;
export type EventMutation = {
  variables: EventMutationVariables;
  response: EventMutation$data;
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
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": "is_followed",
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EventMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
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
    "name": "EventMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
    "cacheID": "bced02f9a2ec70e1c9d00d739b3e3247",
    "id": null,
    "metadata": {},
    "name": "EventMutation",
    "operationKind": "mutation",
    "text": "mutation EventMutation(\n  $input: FollowShowInput!\n) {\n  followShow(input: $input) {\n    show {\n      slug\n      internalID\n      is_followed: isFollowed\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d4b26e88376835149296362c173298c";

export default node;
