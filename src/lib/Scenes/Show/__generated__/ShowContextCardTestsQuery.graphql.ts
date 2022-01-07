/**
 * @generated SignedSource<<fc5e4eae7ca3f1393e6101a1a423db7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowContextCardTestsQuery$variables = {
  showID: string;
};
export type ShowContextCardTestsQueryVariables = ShowContextCardTestsQuery$variables;
export type ShowContextCardTestsQuery$data = {
  readonly show: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowContextCard_show">;
  } | null;
};
export type ShowContextCardTestsQueryResponse = ShowContextCardTestsQuery$data;
export type ShowContextCardTestsQuery = {
  variables: ShowContextCardTestsQueryVariables;
  response: ShowContextCardTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "showID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "showID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Profile"
},
v11 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowContextCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowContextCard_show"
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
    "name": "ShowContextCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isFairBooth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Fair",
            "kind": "LinkedField",
            "name": "fair",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "format",
                    "value": "SHORT"
                  }
                ],
                "kind": "ScalarField",
                "name": "exhibitionPeriod",
                "storageKey": "exhibitionPeriod(format:\"SHORT\")"
              },
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
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "icon",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "imageUrl",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "version",
                            "value": "untouched-png"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": "url(version:\"untouched-png\")"
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": "imageUrl",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": "large_rectangle"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(version:\"large_rectangle\")"
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cities",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 3
                      },
                      {
                        "kind": "Literal",
                        "name": "sort",
                        "value": "MERCHANDISABILITY_DESC"
                      }
                    ],
                    "concreteType": "ArtworkConnection",
                    "kind": "LinkedField",
                    "name": "artworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtworkEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "version",
                                        "value": "larger"
                                      }
                                    ],
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"larger\")"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "artworksConnection(first:3,sort:\"MERCHANDISABILITY_DESC\")"
                  }
                ],
                "type": "Partner",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v6/*: any*/),
                "type": "Node",
                "abstractKey": "__isNode"
              },
              {
                "kind": "InlineFragment",
                "selections": (v6/*: any*/),
                "type": "ExternalPartner",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "641daa15d75c0753b80dd1eb9d22d809",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "show": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "show.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "show.fair.exhibitionPeriod": (v7/*: any*/),
        "show.fair.id": (v8/*: any*/),
        "show.fair.image": (v9/*: any*/),
        "show.fair.image.imageUrl": (v7/*: any*/),
        "show.fair.internalID": (v8/*: any*/),
        "show.fair.name": (v7/*: any*/),
        "show.fair.profile": (v10/*: any*/),
        "show.fair.profile.icon": (v9/*: any*/),
        "show.fair.profile.icon.imageUrl": (v7/*: any*/),
        "show.fair.profile.id": (v8/*: any*/),
        "show.fair.slug": (v8/*: any*/),
        "show.id": (v8/*: any*/),
        "show.internalID": (v8/*: any*/),
        "show.isFairBooth": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "show.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "show.partner.__isNode": (v11/*: any*/),
        "show.partner.__typename": (v11/*: any*/),
        "show.partner.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "show.partner.artworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdge"
        },
        "show.partner.artworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "show.partner.artworksConnection.edges.node.id": (v8/*: any*/),
        "show.partner.artworksConnection.edges.node.image": (v9/*: any*/),
        "show.partner.artworksConnection.edges.node.image.url": (v7/*: any*/),
        "show.partner.cities": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "String"
        },
        "show.partner.id": (v8/*: any*/),
        "show.partner.internalID": (v8/*: any*/),
        "show.partner.name": (v7/*: any*/),
        "show.partner.profile": (v10/*: any*/),
        "show.partner.profile.id": (v8/*: any*/),
        "show.partner.profile.slug": (v8/*: any*/),
        "show.partner.slug": (v8/*: any*/),
        "show.slug": (v8/*: any*/)
      }
    },
    "name": "ShowContextCardTestsQuery",
    "operationKind": "query",
    "text": "query ShowContextCardTestsQuery(\n  $showID: String!\n) {\n  show(id: $showID) {\n    ...ShowContextCard_show\n    id\n  }\n}\n\nfragment ShowContextCard_show on Show {\n  internalID\n  slug\n  isFairBooth\n  fair {\n    internalID\n    slug\n    name\n    exhibitionPeriod(format: SHORT)\n    profile {\n      icon {\n        imageUrl: url(version: \"untouched-png\")\n      }\n      id\n    }\n    image {\n      imageUrl: url(version: \"large_rectangle\")\n    }\n    id\n  }\n  partner {\n    __typename\n    ... on Partner {\n      internalID\n      slug\n      name\n      profile {\n        slug\n        id\n      }\n      cities\n      artworksConnection(sort: MERCHANDISABILITY_DESC, first: 3) {\n        edges {\n          node {\n            image {\n              url(version: \"larger\")\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n    ... on ExternalPartner {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f518a6be996636d254fa30ff5c7cff4f";

export default node;
