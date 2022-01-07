/**
 * @generated SignedSource<<98212425a5b5ec0cc704b7a36d573f36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowGeneInput = {
  clientMutationId?: string | null;
  geneID?: string | null;
  unfollow?: boolean | null;
};
export type HeaderFollowGeneMutation$variables = {
  input: FollowGeneInput;
};
export type HeaderFollowGeneMutationVariables = HeaderFollowGeneMutation$variables;
export type HeaderFollowGeneMutation$data = {
  readonly followGene: {
    readonly gene: {
      readonly id: string;
      readonly isFollowed: boolean | null;
    } | null;
  } | null;
};
export type HeaderFollowGeneMutationResponse = HeaderFollowGeneMutation$data;
export type HeaderFollowGeneMutation = {
  variables: HeaderFollowGeneMutationVariables;
  response: HeaderFollowGeneMutation$data;
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
    "concreteType": "FollowGenePayload",
    "kind": "LinkedField",
    "name": "followGene",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Gene",
        "kind": "LinkedField",
        "name": "gene",
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
    "name": "HeaderFollowGeneMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HeaderFollowGeneMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5aa1bfc9148a5b903c0e2955d9bca1e4",
    "id": null,
    "metadata": {},
    "name": "HeaderFollowGeneMutation",
    "operationKind": "mutation",
    "text": "mutation HeaderFollowGeneMutation(\n  $input: FollowGeneInput!\n) {\n  followGene(input: $input) {\n    gene {\n      id\n      isFollowed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "82fdf8dee7dfed66c7ac38b813cedd21";

export default node;
