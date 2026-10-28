export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const GuidelinesPartsFragmentDoc = gql`
    fragment GuidelinesParts on Guidelines {
  __typename
  title
  section
  order
  isSubTopic
  parentTopic
  language
  body
}
    `;
export const ReleaseNotesPartsFragmentDoc = gql`
    fragment ReleaseNotesParts on ReleaseNotes {
  __typename
  version
  releaseDate
  body
}
    `;
export const GuidelinesDocument = gql`
    query guidelines($relativePath: String!) {
  guidelines(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GuidelinesParts
  }
}
    ${GuidelinesPartsFragmentDoc}`;
export const GuidelinesConnectionDocument = gql`
    query guidelinesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GuidelinesFilter) {
  guidelinesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GuidelinesParts
      }
    }
  }
}
    ${GuidelinesPartsFragmentDoc}`;
export const ReleaseNotesDocument = gql`
    query releaseNotes($relativePath: String!) {
  releaseNotes(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ReleaseNotesParts
  }
}
    ${ReleaseNotesPartsFragmentDoc}`;
export const ReleaseNotesConnectionDocument = gql`
    query releaseNotesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ReleaseNotesFilter) {
  releaseNotesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ReleaseNotesParts
      }
    }
  }
}
    ${ReleaseNotesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    guidelines(variables, options) {
      return requester(GuidelinesDocument, variables, options);
    },
    guidelinesConnection(variables, options) {
      return requester(GuidelinesConnectionDocument, variables, options);
    },
    releaseNotes(variables, options) {
      return requester(ReleaseNotesDocument, variables, options);
    },
    releaseNotesConnection(variables, options) {
      return requester(ReleaseNotesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
