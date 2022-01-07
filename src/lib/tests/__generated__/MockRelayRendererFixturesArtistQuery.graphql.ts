/**
 * @generated SignedSource<<11e62d11d40ef52066b99c3fad1256d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MockRelayRendererFixturesArtistQuery$variables = {
  id: string;
};
export type MockRelayRendererFixturesArtistQueryVariables = MockRelayRendererFixturesArtistQuery$variables;
export type MockRelayRendererFixturesArtistQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"MockRelayRendererFixtures_artist">;
  } | null;
};
export type MockRelayRendererFixturesArtistQueryResponse = MockRelayRendererFixturesArtistQuery$data;
export type MockRelayRendererFixturesArtistQuery = {
  variables: MockRelayRendererFixturesArtistQueryVariables;
  response: MockRelayRendererFixturesArtistQuery$data;
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MockRelayRendererFixturesArtistQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MockRelayRendererFixtures_artist"
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
    "name": "MockRelayRendererFixturesArtistQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
    "cacheID": "cbf4686647f004d150e5f1a608cbe861",
    "id": null,
    "metadata": {},
    "name": "MockRelayRendererFixturesArtistQuery",
    "operationKind": "query",
    "text": "query MockRelayRendererFixturesArtistQuery(\n  $id: String!\n) {\n  artist(id: $id) {\n    ...MockRelayRendererFixtures_artist\n    id\n  }\n}\n\nfragment MockRelayRendererFixtures_artist on Artist {\n  name\n}\n"
  }
};
})();

(node as any).hash = "aabded82722f7ed4c4f873a3d0b315be";

export default node;
