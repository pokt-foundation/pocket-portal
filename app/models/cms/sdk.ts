import { GraphQLClient } from "graphql-request"
import * as Dom from "graphql-request/dist/types.dom"
import gql from "graphql-tag"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  GraphQLStringOrFloat: any
  Hash: any
  JSON: any
}

export type Query = {
  __typename?: "Query"
  questions: Array<questions>
  questions_aggregated: Array<questions_aggregated>
  questions_by_id?: Maybe<questions>
}

export type QueryquestionsArgs = {
  filter?: InputMaybe<questions_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type Queryquestions_aggregatedArgs = {
  filter?: InputMaybe<questions_filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  limit?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type Queryquestions_by_idArgs = {
  id: Scalars["ID"]
}

export type boolean_filter_operators = {
  _eq?: InputMaybe<Scalars["Boolean"]>
  _neq?: InputMaybe<Scalars["Boolean"]>
  _nnull?: InputMaybe<Scalars["Boolean"]>
  _null?: InputMaybe<Scalars["Boolean"]>
}

export type count_function_filter_operators = {
  count?: InputMaybe<number_filter_operators>
}

export type count_functions = {
  __typename?: "count_functions"
  count?: Maybe<Scalars["Int"]>
}

export type date_filter_operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>
  _eq?: InputMaybe<Scalars["String"]>
  _gt?: InputMaybe<Scalars["String"]>
  _gte?: InputMaybe<Scalars["String"]>
  _lt?: InputMaybe<Scalars["String"]>
  _lte?: InputMaybe<Scalars["String"]>
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>
  _neq?: InputMaybe<Scalars["String"]>
  _nnull?: InputMaybe<Scalars["Boolean"]>
  _null?: InputMaybe<Scalars["Boolean"]>
}

export type datetime_function_filter_operators = {
  day?: InputMaybe<number_filter_operators>
  hour?: InputMaybe<number_filter_operators>
  minute?: InputMaybe<number_filter_operators>
  month?: InputMaybe<number_filter_operators>
  second?: InputMaybe<number_filter_operators>
  week?: InputMaybe<number_filter_operators>
  weekday?: InputMaybe<number_filter_operators>
  year?: InputMaybe<number_filter_operators>
}

export type datetime_functions = {
  __typename?: "datetime_functions"
  day?: Maybe<Scalars["Int"]>
  hour?: Maybe<Scalars["Int"]>
  minute?: Maybe<Scalars["Int"]>
  month?: Maybe<Scalars["Int"]>
  second?: Maybe<Scalars["Int"]>
  week?: Maybe<Scalars["Int"]>
  weekday?: Maybe<Scalars["Int"]>
  year?: Maybe<Scalars["Int"]>
}

export type directus_files = {
  __typename?: "directus_files"
  charset?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  duration?: Maybe<Scalars["Int"]>
  embed?: Maybe<Scalars["String"]>
  filename_disk?: Maybe<Scalars["String"]>
  filename_download: Scalars["String"]
  filesize?: Maybe<Scalars["String"]>
  folder?: Maybe<directus_folders>
  height?: Maybe<Scalars["Int"]>
  id?: Maybe<Scalars["ID"]>
  location?: Maybe<Scalars["String"]>
  metadata?: Maybe<Scalars["JSON"]>
  metadata_func?: Maybe<count_functions>
  modified_by?: Maybe<directus_users>
  modified_on: Scalars["Date"]
  modified_on_func?: Maybe<datetime_functions>
  storage: Scalars["String"]
  tags?: Maybe<Scalars["JSON"]>
  tags_func?: Maybe<count_functions>
  title?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
  uploaded_by?: Maybe<directus_users>
  uploaded_on: Scalars["Date"]
  uploaded_on_func?: Maybe<datetime_functions>
  width?: Maybe<Scalars["Int"]>
}

export type directus_filesfolderArgs = {
  filter?: InputMaybe<directus_folders_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type directus_filesmodified_byArgs = {
  filter?: InputMaybe<directus_users_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type directus_filesuploaded_byArgs = {
  filter?: InputMaybe<directus_users_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type directus_files_filter = {
  _and?: InputMaybe<Array<InputMaybe<directus_files_filter>>>
  _or?: InputMaybe<Array<InputMaybe<directus_files_filter>>>
  charset?: InputMaybe<string_filter_operators>
  description?: InputMaybe<string_filter_operators>
  duration?: InputMaybe<number_filter_operators>
  embed?: InputMaybe<string_filter_operators>
  filename_disk?: InputMaybe<string_filter_operators>
  filename_download?: InputMaybe<string_filter_operators>
  filesize?: InputMaybe<string_filter_operators>
  folder?: InputMaybe<directus_folders_filter>
  height?: InputMaybe<number_filter_operators>
  id?: InputMaybe<string_filter_operators>
  location?: InputMaybe<string_filter_operators>
  metadata?: InputMaybe<string_filter_operators>
  metadata_func?: InputMaybe<count_function_filter_operators>
  modified_by?: InputMaybe<directus_users_filter>
  modified_on?: InputMaybe<date_filter_operators>
  modified_on_func?: InputMaybe<datetime_function_filter_operators>
  storage?: InputMaybe<string_filter_operators>
  tags?: InputMaybe<string_filter_operators>
  tags_func?: InputMaybe<count_function_filter_operators>
  title?: InputMaybe<string_filter_operators>
  type?: InputMaybe<string_filter_operators>
  uploaded_by?: InputMaybe<directus_users_filter>
  uploaded_on?: InputMaybe<date_filter_operators>
  uploaded_on_func?: InputMaybe<datetime_function_filter_operators>
  width?: InputMaybe<number_filter_operators>
}

export type directus_folders = {
  __typename?: "directus_folders"
  id?: Maybe<Scalars["ID"]>
  name: Scalars["String"]
  parent?: Maybe<directus_folders>
}

export type directus_foldersparentArgs = {
  filter?: InputMaybe<directus_folders_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type directus_folders_filter = {
  _and?: InputMaybe<Array<InputMaybe<directus_folders_filter>>>
  _or?: InputMaybe<Array<InputMaybe<directus_folders_filter>>>
  id?: InputMaybe<string_filter_operators>
  name?: InputMaybe<string_filter_operators>
  parent?: InputMaybe<directus_folders_filter>
}

export type directus_roles = {
  __typename?: "directus_roles"
  admin_access: Scalars["Boolean"]
  app_access: Scalars["Boolean"]
  description?: Maybe<Scalars["String"]>
  enforce_tfa: Scalars["Boolean"]
  icon: Scalars["String"]
  id?: Maybe<Scalars["ID"]>
  ip_access?: Maybe<Array<Maybe<Scalars["String"]>>>
  name: Scalars["String"]
  users?: Maybe<Array<Maybe<directus_users>>>
  users_func?: Maybe<count_functions>
}

export type directus_rolesusersArgs = {
  filter?: InputMaybe<directus_users_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type directus_roles_filter = {
  _and?: InputMaybe<Array<InputMaybe<directus_roles_filter>>>
  _or?: InputMaybe<Array<InputMaybe<directus_roles_filter>>>
  admin_access?: InputMaybe<boolean_filter_operators>
  app_access?: InputMaybe<boolean_filter_operators>
  description?: InputMaybe<string_filter_operators>
  enforce_tfa?: InputMaybe<boolean_filter_operators>
  icon?: InputMaybe<string_filter_operators>
  id?: InputMaybe<string_filter_operators>
  ip_access?: InputMaybe<string_filter_operators>
  name?: InputMaybe<string_filter_operators>
  users?: InputMaybe<directus_users_filter>
  users_func?: InputMaybe<count_function_filter_operators>
}

export type directus_users = {
  __typename?: "directus_users"
  auth_data?: Maybe<Scalars["JSON"]>
  auth_data_func?: Maybe<count_functions>
  avatar?: Maybe<directus_files>
  description?: Maybe<Scalars["String"]>
  email?: Maybe<Scalars["String"]>
  email_notifications?: Maybe<Scalars["Boolean"]>
  external_identifier?: Maybe<Scalars["String"]>
  first_name?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["ID"]>
  language?: Maybe<Scalars["String"]>
  last_access?: Maybe<Scalars["Date"]>
  last_access_func?: Maybe<datetime_functions>
  last_name?: Maybe<Scalars["String"]>
  last_page?: Maybe<Scalars["String"]>
  location?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["Hash"]>
  provider: Scalars["String"]
  role?: Maybe<directus_roles>
  status: Scalars["String"]
  tags?: Maybe<Scalars["JSON"]>
  tags_func?: Maybe<count_functions>
  tfa_secret?: Maybe<Scalars["Hash"]>
  theme?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
  token?: Maybe<Scalars["Hash"]>
}

export type directus_usersavatarArgs = {
  filter?: InputMaybe<directus_files_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type directus_usersroleArgs = {
  filter?: InputMaybe<directus_roles_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type directus_users_filter = {
  _and?: InputMaybe<Array<InputMaybe<directus_users_filter>>>
  _or?: InputMaybe<Array<InputMaybe<directus_users_filter>>>
  auth_data?: InputMaybe<string_filter_operators>
  auth_data_func?: InputMaybe<count_function_filter_operators>
  avatar?: InputMaybe<directus_files_filter>
  description?: InputMaybe<string_filter_operators>
  email?: InputMaybe<string_filter_operators>
  email_notifications?: InputMaybe<boolean_filter_operators>
  external_identifier?: InputMaybe<string_filter_operators>
  first_name?: InputMaybe<string_filter_operators>
  id?: InputMaybe<string_filter_operators>
  language?: InputMaybe<string_filter_operators>
  last_access?: InputMaybe<date_filter_operators>
  last_access_func?: InputMaybe<datetime_function_filter_operators>
  last_name?: InputMaybe<string_filter_operators>
  last_page?: InputMaybe<string_filter_operators>
  location?: InputMaybe<string_filter_operators>
  password?: InputMaybe<hash_filter_operators>
  provider?: InputMaybe<string_filter_operators>
  role?: InputMaybe<directus_roles_filter>
  status?: InputMaybe<string_filter_operators>
  tags?: InputMaybe<string_filter_operators>
  tags_func?: InputMaybe<count_function_filter_operators>
  tfa_secret?: InputMaybe<hash_filter_operators>
  theme?: InputMaybe<string_filter_operators>
  title?: InputMaybe<string_filter_operators>
  token?: InputMaybe<hash_filter_operators>
}

export type hash_filter_operators = {
  _empty?: InputMaybe<Scalars["Boolean"]>
  _nempty?: InputMaybe<Scalars["Boolean"]>
  _nnull?: InputMaybe<Scalars["Boolean"]>
  _null?: InputMaybe<Scalars["Boolean"]>
}

export type number_filter_operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>
  _eq?: InputMaybe<Scalars["GraphQLStringOrFloat"]>
  _gt?: InputMaybe<Scalars["GraphQLStringOrFloat"]>
  _gte?: InputMaybe<Scalars["GraphQLStringOrFloat"]>
  _in?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>
  _lt?: InputMaybe<Scalars["GraphQLStringOrFloat"]>
  _lte?: InputMaybe<Scalars["GraphQLStringOrFloat"]>
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>
  _neq?: InputMaybe<Scalars["GraphQLStringOrFloat"]>
  _nin?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>
  _nnull?: InputMaybe<Scalars["Boolean"]>
  _null?: InputMaybe<Scalars["Boolean"]>
}

export type questions = {
  __typename?: "questions"
  answer?: Maybe<Scalars["String"]>
  category?: Maybe<Scalars["String"]>
  date_created?: Maybe<Scalars["Date"]>
  date_created_func?: Maybe<datetime_functions>
  date_updated?: Maybe<Scalars["Date"]>
  date_updated_func?: Maybe<datetime_functions>
  id?: Maybe<Scalars["ID"]>
  question?: Maybe<Scalars["String"]>
  sort?: Maybe<Scalars["Int"]>
  status: Scalars["String"]
  user_created?: Maybe<directus_users>
  user_updated?: Maybe<directus_users>
}

export type questionsuser_createdArgs = {
  filter?: InputMaybe<directus_users_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type questionsuser_updatedArgs = {
  filter?: InputMaybe<directus_users_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type questions_aggregated = {
  __typename?: "questions_aggregated"
  avg?: Maybe<questions_aggregated_fields>
  avgDistinct?: Maybe<questions_aggregated_fields>
  count?: Maybe<questions_aggregated_count>
  countAll?: Maybe<Scalars["Int"]>
  countDistinct?: Maybe<questions_aggregated_count>
  group?: Maybe<Scalars["JSON"]>
  max?: Maybe<questions_aggregated_fields>
  min?: Maybe<questions_aggregated_fields>
  sum?: Maybe<questions_aggregated_fields>
  sumDistinct?: Maybe<questions_aggregated_fields>
}

export type questions_aggregated_count = {
  __typename?: "questions_aggregated_count"
  answer?: Maybe<Scalars["Int"]>
  category?: Maybe<Scalars["Int"]>
  date_created?: Maybe<Scalars["Int"]>
  date_updated?: Maybe<Scalars["Int"]>
  id?: Maybe<Scalars["Int"]>
  question?: Maybe<Scalars["Int"]>
  sort?: Maybe<Scalars["Int"]>
  status?: Maybe<Scalars["Int"]>
  user_created?: Maybe<Scalars["Int"]>
  user_updated?: Maybe<Scalars["Int"]>
}

export type questions_aggregated_fields = {
  __typename?: "questions_aggregated_fields"
  id?: Maybe<Scalars["Float"]>
  sort?: Maybe<Scalars["Float"]>
}

export type questions_filter = {
  _and?: InputMaybe<Array<InputMaybe<questions_filter>>>
  _or?: InputMaybe<Array<InputMaybe<questions_filter>>>
  answer?: InputMaybe<string_filter_operators>
  category?: InputMaybe<string_filter_operators>
  date_created?: InputMaybe<date_filter_operators>
  date_created_func?: InputMaybe<datetime_function_filter_operators>
  date_updated?: InputMaybe<date_filter_operators>
  date_updated_func?: InputMaybe<datetime_function_filter_operators>
  id?: InputMaybe<number_filter_operators>
  question?: InputMaybe<string_filter_operators>
  sort?: InputMaybe<number_filter_operators>
  status?: InputMaybe<string_filter_operators>
  user_created?: InputMaybe<directus_users_filter>
  user_updated?: InputMaybe<directus_users_filter>
}

export type string_filter_operators = {
  _contains?: InputMaybe<Scalars["String"]>
  _empty?: InputMaybe<Scalars["Boolean"]>
  _ends_with?: InputMaybe<Scalars["String"]>
  _eq?: InputMaybe<Scalars["String"]>
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  _ncontains?: InputMaybe<Scalars["String"]>
  _nempty?: InputMaybe<Scalars["Boolean"]>
  _nends_with?: InputMaybe<Scalars["String"]>
  _neq?: InputMaybe<Scalars["String"]>
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  _nnull?: InputMaybe<Scalars["Boolean"]>
  _nstarts_with?: InputMaybe<Scalars["String"]>
  _null?: InputMaybe<Scalars["Boolean"]>
  _starts_with?: InputMaybe<Scalars["String"]>
}

export type getQuestionsQueryVariables = Exact<{
  filter?: InputMaybe<questions_filter>
  limit?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  page?: InputMaybe<Scalars["Int"]>
  search?: InputMaybe<Scalars["String"]>
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>>
}>

export type getQuestionsQuery = {
  __typename?: "Query"
  questions: Array<{
    __typename?: "questions"
    answer?: string | null
    category?: string | null
    id?: string | null
    question?: string | null
    status: string
  }>
}

export const getQuestionsDocument = gql`
  query getQuestions(
    $filter: questions_filter
    $limit: Int
    $offset: Int
    $page: Int
    $search: String
    $sort: [String]
  ) {
    questions(
      filter: $filter
      limit: $limit
      offset: $offset
      page: $page
      search: $search
      sort: $sort
    ) {
      answer
      category
      id
      question
      status
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) =>
  action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getQuestions(
      variables?: getQuestionsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"],
    ): Promise<getQuestionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<getQuestionsQuery>(getQuestionsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getQuestions",
        "query",
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
