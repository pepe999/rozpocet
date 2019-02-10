import { ADD_PERSON } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_PERSON, payload };
}