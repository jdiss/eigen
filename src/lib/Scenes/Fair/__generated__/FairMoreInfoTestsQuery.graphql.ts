/**
 * @generated SignedSource<<87dc2922b906fbf99c41eb537901642f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairMoreInfoTestsQuery$variables = {
  fairID: string;
};
export type FairMoreInfoTestsQueryVariables = FairMoreInfoTestsQuery$variables;
export type FairMoreInfoTestsQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"FairMoreInfo_fair">;
  } | null;
};
export type FairMoreInfoTestsQueryResponse = FairMoreInfoTestsQuery$data;
export type FairMoreInfoTestsQuery = {
  variables: FairMoreInfoTestsQueryVariables;
  response: FairMoreInfoTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fairID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "fairID"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MARKDOWN"
  }
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
  "type": "Float"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FairMoreInfoTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairMoreInfo_fair"
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
    "name": "FairMoreInfoTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "name": "about",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tagline",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Profile",
            "kind": "LinkedField",
            "name": "profile",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "city",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address2",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "postalCode",
                "storageKey": null
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "LatLng",
                "kind": "LinkedField",
                "name": "coordinates",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lat",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lng",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FairSponsoredContent",
            "kind": "LinkedField",
            "name": "sponsoredContent",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "activationText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pressReleaseUrl",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ticketsLink",
            "storageKey": null
          },
          {
            "alias": "fairHours",
            "args": (v6/*: any*/),
            "kind": "ScalarField",
            "name": "hours",
            "storageKey": "hours(format:\"MARKDOWN\")"
          },
          {
            "alias": "fairLinks",
            "args": (v6/*: any*/),
            "kind": "ScalarField",
            "name": "links",
            "storageKey": "links(format:\"MARKDOWN\")"
          },
          {
            "alias": "fairTickets",
            "args": (v6/*: any*/),
            "kind": "ScalarField",
            "name": "tickets",
            "storageKey": "tickets(format:\"MARKDOWN\")"
          },
          (v5/*: any*/),
          {
            "alias": "fairContact",
            "args": (v6/*: any*/),
            "kind": "ScalarField",
            "name": "contact",
            "storageKey": "contact(format:\"MARKDOWN\")"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ee2a60a2db8666e23a65520be213660e",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "fair.about": (v7/*: any*/),
        "fair.fairContact": (v7/*: any*/),
        "fair.fairHours": (v7/*: any*/),
        "fair.fairLinks": (v7/*: any*/),
        "fair.fairTickets": (v7/*: any*/),
        "fair.id": (v8/*: any*/),
        "fair.internalID": (v8/*: any*/),
        "fair.location": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Location"
        },
        "fair.location.address": (v7/*: any*/),
        "fair.location.address2": (v7/*: any*/),
        "fair.location.city": (v7/*: any*/),
        "fair.location.coordinates": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "LatLng"
        },
        "fair.location.coordinates.lat": (v9/*: any*/),
        "fair.location.coordinates.lng": (v9/*: any*/),
        "fair.location.id": (v8/*: any*/),
        "fair.location.internalID": (v8/*: any*/),
        "fair.location.postalCode": (v7/*: any*/),
        "fair.location.summary": (v7/*: any*/),
        "fair.name": (v7/*: any*/),
        "fair.profile": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Profile"
        },
        "fair.profile.id": (v8/*: any*/),
        "fair.profile.name": (v7/*: any*/),
        "fair.slug": (v8/*: any*/),
        "fair.sponsoredContent": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FairSponsoredContent"
        },
        "fair.sponsoredContent.activationText": (v7/*: any*/),
        "fair.sponsoredContent.pressReleaseUrl": (v7/*: any*/),
        "fair.summary": (v7/*: any*/),
        "fair.tagline": (v7/*: any*/),
        "fair.ticketsLink": (v7/*: any*/)
      }
    },
    "name": "FairMoreInfoTestsQuery",
    "operationKind": "query",
    "text": "query FairMoreInfoTestsQuery(\n  $fairID: String!\n) {\n  fair(id: $fairID) {\n    ...FairMoreInfo_fair\n    id\n  }\n}\n\nfragment FairMoreInfo_fair on Fair {\n  internalID\n  slug\n  about\n  name\n  tagline\n  profile {\n    name\n    id\n  }\n  location {\n    ...LocationMap_location\n    coordinates {\n      lat\n      lng\n    }\n    summary\n    id\n  }\n  sponsoredContent {\n    activationText\n    pressReleaseUrl\n  }\n  ticketsLink\n  fairHours: hours(format: MARKDOWN)\n  fairLinks: links(format: MARKDOWN)\n  fairTickets: tickets(format: MARKDOWN)\n  summary\n  fairContact: contact(format: MARKDOWN)\n}\n\nfragment LocationMap_location on Location {\n  id\n  internalID\n  city\n  address\n  address2\n  postalCode\n  summary\n  coordinates {\n    lat\n    lng\n  }\n}\n"
  }
};
})();

(node as any).hash = "d167f0751ddd5dd102fe48feb743168a";

export default node;
