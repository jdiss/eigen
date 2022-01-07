/**
 * @generated SignedSource<<b6b2e606b6a4956a1b2ac32c9398fa51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InquiryMakeOfferButtonTestsQuery$variables = {
  id: string;
};
export type InquiryMakeOfferButtonTestsQueryVariables = InquiryMakeOfferButtonTestsQuery$variables;
export type InquiryMakeOfferButtonTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"InquiryMakeOfferButton_artwork">;
  } | null;
};
export type InquiryMakeOfferButtonTestsQueryResponse = InquiryMakeOfferButtonTestsQuery$data;
export type InquiryMakeOfferButtonTestsQuery = {
  variables: InquiryMakeOfferButtonTestsQueryVariables;
  response: InquiryMakeOfferButtonTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InquiryMakeOfferButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "InquiryMakeOfferButton_artwork"
          }
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
    "name": "InquiryMakeOfferButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "da6cd473326fc18a12dd16dadf24dfe5",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.id": (v2/*: any*/),
        "artwork.internalID": (v2/*: any*/)
      }
    },
    "name": "InquiryMakeOfferButtonTestsQuery",
    "operationKind": "query",
    "text": "query InquiryMakeOfferButtonTestsQuery(\n  $id: String!\n) {\n  artwork(id: $id) {\n    ...InquiryMakeOfferButton_artwork\n    id\n  }\n}\n\nfragment InquiryMakeOfferButton_artwork on Artwork {\n  internalID\n}\n"
  }
};
})();

(node as any).hash = "8df2bf6804ec5499775ba3df5afcc51b";

export default node;
