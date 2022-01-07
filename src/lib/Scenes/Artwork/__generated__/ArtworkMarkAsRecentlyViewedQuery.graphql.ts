/**
 * @generated SignedSource<<b731ba3abd048116a29ca24c5cca9867>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RecordArtworkViewInput = {
  artwork_id: string;
  clientMutationId?: string | null;
};
export type ArtworkMarkAsRecentlyViewedQuery$variables = {
  input: RecordArtworkViewInput;
};
export type ArtworkMarkAsRecentlyViewedQueryVariables = ArtworkMarkAsRecentlyViewedQuery$variables;
export type ArtworkMarkAsRecentlyViewedQuery$data = {
  readonly recordArtworkView: {
    readonly artworkId: string;
  } | null;
};
export type ArtworkMarkAsRecentlyViewedQueryResponse = ArtworkMarkAsRecentlyViewedQuery$data;
export type ArtworkMarkAsRecentlyViewedQuery = {
  variables: ArtworkMarkAsRecentlyViewedQueryVariables;
  response: ArtworkMarkAsRecentlyViewedQuery$data;
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
    "concreteType": "RecordArtworkViewPayload",
    "kind": "LinkedField",
    "name": "recordArtworkView",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "artworkId",
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
    "name": "ArtworkMarkAsRecentlyViewedQuery",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtworkMarkAsRecentlyViewedQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "63194f0a6a98703dcf55c36ca801cf39",
    "id": null,
    "metadata": {},
    "name": "ArtworkMarkAsRecentlyViewedQuery",
    "operationKind": "mutation",
    "text": "mutation ArtworkMarkAsRecentlyViewedQuery(\n  $input: RecordArtworkViewInput!\n) {\n  recordArtworkView(input: $input) {\n    artworkId\n  }\n}\n"
  }
};
})();

(node as any).hash = "4ddb094d53cb9316e9302947e1ff20c3";

export default node;
