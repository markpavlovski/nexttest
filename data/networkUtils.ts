import { GraphQLClient } from "graphql-request";
import {DatoCmsRequest} from "./types";
export const datoCmsRequest = ({ query, variables, preview }: DatoCmsRequest):any =>  {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 73eb2b6d11ae307c24352fc98d47b8`
    }
  });
  return client.request(query, variables);
};