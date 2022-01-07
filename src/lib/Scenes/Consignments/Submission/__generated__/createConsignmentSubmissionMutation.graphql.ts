/**
 * @generated SignedSource<<4953fbf8a24cfc03bf8337c43d215e0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ConsignmentAttributionClass = "LIMITED_EDITION" | "OPEN_EDITION" | "UNIQUE" | "UNKNOWN_EDITION" | "%future added value";
export type ConsignmentSubmissionCategoryAggregation = "ARCHITECTURE" | "DESIGN_DECORATIVE_ART" | "DRAWING_COLLAGE_OR_OTHER_WORK_ON_PAPER" | "FASHION_DESIGN_AND_WEARABLE_ART" | "INSTALLATION" | "JEWELRY" | "MIXED_MEDIA" | "OTHER" | "PAINTING" | "PERFORMANCE_ART" | "PHOTOGRAPHY" | "PRINT" | "SCULPTURE" | "TEXTILE_ARTS" | "VIDEO_FILM_ANIMATION" | "%future added value";
export type ConsignmentSubmissionStateAggregation = "APPROVED" | "DRAFT" | "REJECTED" | "SUBMITTED" | "%future added value";
export type CreateSubmissionMutationInput = {
  additionalInfo?: string | null;
  artistID: string;
  attributionClass?: ConsignmentAttributionClass | null;
  authenticityCertificate?: boolean | null;
  category?: ConsignmentSubmissionCategoryAggregation | null;
  clientMutationId?: string | null;
  coaByAuthenticatingBody?: boolean | null;
  coaByGallery?: boolean | null;
  currency?: string | null;
  depth?: string | null;
  dimensionsMetric?: string | null;
  edition?: boolean | null;
  editionNumber?: string | null;
  editionSize?: number | null;
  editionSizeFormatted?: string | null;
  height?: string | null;
  locationCity?: string | null;
  locationCountry?: string | null;
  locationState?: string | null;
  medium?: string | null;
  minimumPriceDollars?: number | null;
  provenance?: string | null;
  sessionID?: string | null;
  signature?: boolean | null;
  sourceArtworkID?: string | null;
  state?: ConsignmentSubmissionStateAggregation | null;
  title?: string | null;
  userAgent?: string | null;
  userEmail?: string | null;
  userName?: string | null;
  userPhone?: string | null;
  utmMedium?: string | null;
  utmSource?: string | null;
  utmTerm?: string | null;
  width?: string | null;
  year?: string | null;
};
export type createConsignmentSubmissionMutation$variables = {
  input: CreateSubmissionMutationInput;
};
export type createConsignmentSubmissionMutationVariables = createConsignmentSubmissionMutation$variables;
export type createConsignmentSubmissionMutation$data = {
  readonly createConsignmentSubmission: {
    readonly consignmentSubmission: {
      readonly internalID: string | null;
    } | null;
  } | null;
};
export type createConsignmentSubmissionMutationResponse = createConsignmentSubmissionMutation$data;
export type createConsignmentSubmissionMutation = {
  variables: createConsignmentSubmissionMutationVariables;
  response: createConsignmentSubmissionMutation$data;
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
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createConsignmentSubmissionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSubmissionMutationPayload",
        "kind": "LinkedField",
        "name": "createConsignmentSubmission",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ConsignmentSubmission",
            "kind": "LinkedField",
            "name": "consignmentSubmission",
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
    "name": "createConsignmentSubmissionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateSubmissionMutationPayload",
        "kind": "LinkedField",
        "name": "createConsignmentSubmission",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ConsignmentSubmission",
            "kind": "LinkedField",
            "name": "consignmentSubmission",
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
    "cacheID": "fd4f1ff25cf937f269558e95330ce314",
    "id": null,
    "metadata": {},
    "name": "createConsignmentSubmissionMutation",
    "operationKind": "mutation",
    "text": "mutation createConsignmentSubmissionMutation(\n  $input: CreateSubmissionMutationInput!\n) {\n  createConsignmentSubmission(input: $input) {\n    consignmentSubmission {\n      internalID\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "960c9b16eb4c0b3f443f638be859c670";

export default node;
