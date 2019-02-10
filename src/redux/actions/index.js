import { ADD_PERSON } from "../constants/action-types";

export function addPerson(payload) {
  return { type: ADD_PERSON, payload };
}