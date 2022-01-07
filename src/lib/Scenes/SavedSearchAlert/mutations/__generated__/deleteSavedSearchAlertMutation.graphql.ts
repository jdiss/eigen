/**
 * @generated SignedSource<<190a2ed7a727d1210c7809672126f124>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DisableSavedSearchInput = {
  clientMutationId?: string | null;
  searchCriteriaID: string;
};
export type deleteSavedSearchAlertMutation$variables = {
  input: DisableSavedSearchInput;
};
export type deleteSavedSearchAlertMutationVariables = deleteSavedSearchAlertMutation$variables;
export type deleteSavedSearchAlertMutation$data = {
  readonly disableSavedSearch: {
    readonly savedSearchOrErrors: {
      readonly internalID?: string;
    };
  } | null;
};
export type deleteSavedSearchAlertMutationResponse = deleteSavedSearchAlertMutation$data;
export type deleteSavedSearchAlertMutation = {
  variables: deleteSavedSearchAlertMutationVariables;
  response: deleteSavedSearchAlertMutation$data;
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
      "name": "internalID",
      "storageKey": null
    }
  ],
  "type": "SearchCriteria",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteSavedSearchAlertMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DisableSavedSearchPayload",
        "kind": "LinkedField",
        "name": "disableSavedSearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "savedSearchOrErrors",
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
    "name": "deleteSavedSearchAlertMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DisableSavedSearchPayload",
        "kind": "LinkedField",
        "name": "disableSavedSearch",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "savedSearchOrErrors",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7bd7cccae261a90832e94b3852427c30",
    "id": null,
    "metadata": {},
    "name": "deleteSavedSearchAlertMutation",
    "operationKind": "mutation",
    "text": "mutation deleteSavedSearchAlertMutation(\n  $input: DisableSavedSearchInput!\n) {\n  disableSavedSearch(input: $input) {\n    savedSearchOrErrors {\n      __typename\n      ... on SearchCriteria {\n        internalID\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e60bb2d52a6003c9d40767933daaa7bd";

export default node;
