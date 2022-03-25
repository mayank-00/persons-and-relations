import types from "./types";

export const addPerson = (person1, person2) => {
  return {
    type: types.ADD_PERSONS,
    payload: { person1, person2 }
  }
}