/**
 * @generated SignedSource<<5c6d11622491f057c559dbf465200bf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddAssetToConsignmentSubmissionInput = {
  assetType?: string | null;
  clientMutationId?: string | null;
  filename?: string | null;
  geminiToken: string;
  sessionID?: string | null;
  size?: string | null;
  submissionID: string;
};
export type addAssetToConsignmentMutation$variables = {
  input: AddAssetToConsignmentSubmissionInput;
};
export type addAssetToConsignmentMutationVariables = addAssetToConsignmentMutation$variables;
export type addAssetToConsignmentMutation$data = {
  readonly addAssetToConsignmentSubmission: {
    readonly asset: {
      readonly submissionID: string | null;
    } | null;
  } | null;
};
export type addAssetToConsignmentMutationResponse = addAssetToConsignmentMutation$data;
export type addAssetToConsignmentMutation = {
  variables: addAssetToConsignmentMutationVariables;
  response: addAssetToConsignmentMutation$data;
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
  "name": "submissionID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addAssetToConsignmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddAssetToConsignmentSubmissionPayload",
        "kind": "LinkedField",
        "name": "addAssetToConsignmentSubmission",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ConsignmentSubmissionCategoryAsset",
            "kind": "LinkedField",
            "name": "asset",
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
    "name": "addAssetToConsignmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddAssetToConsignmentSubmissionPayload",
        "kind": "LinkedField",
        "name": "addAssetToConsignmentSubmission",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ConsignmentSubmissionCategoryAsset",
            "kind": "LinkedField",
            "name": "asset",
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "623bbe0f804e946ff688616d607f4bd2",
    "id": null,
    "metadata": {},
    "name": "addAssetToConsignmentMutation",
    "operationKind": "mutation",
    "text": "mutation addAssetToConsignmentMutation(\n  $input: AddAssetToConsignmentSubmissionInput!\n) {\n  addAssetToConsignmentSubmission(input: $input) {\n    asset {\n      submissionID\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "978fb7b6934654ffbae949e10f3d64d1";

export default node;
