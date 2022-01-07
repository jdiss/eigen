/**
 * @generated SignedSource<<8deddf679d9e89fc455bc5203a300c8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ConfirmBidRefetchQuery$variables = {
  saleID: string;
};
export type ConfirmBidRefetchQueryVariables = ConfirmBidRefetchQuery$variables;
export type ConfirmBidRefetchQuery$data = {
  readonly me: {
    readonly has_qualified_credit_cards: boolean | null;
    readonly bidders: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
  } | null;
};
export type ConfirmBidRefetchQueryResponse = ConfirmBidRefetchQuery$data;
export type ConfirmBidRefetchQuery = {
  variables: ConfirmBidRefetchQueryVariables;
  response: ConfirmBidRefetchQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleID"
  }
],
v1 = {
  "alias": "has_qualified_credit_cards",
  "args": null,
  "kind": "ScalarField",
  "name": "hasQualifiedCreditCards",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "saleID",
      "variableName": "saleID"
    }
  ],
  "concreteType": "Bidder",
  "kind": "LinkedField",
  "name": "bidders",
  "plural": true,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConfirmBidRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConfirmBidRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ad1642dc31d8cc664803d629a050b4e9",
    "id": null,
    "metadata": {},
    "name": "ConfirmBidRefetchQuery",
    "operationKind": "query",
    "text": "query ConfirmBidRefetchQuery(\n  $saleID: String!\n) {\n  me {\n    has_qualified_credit_cards: hasQualifiedCreditCards\n    bidders(saleID: $saleID) {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a6ee6ff7504cdc72ac306e391d258c9c";

export default node;
