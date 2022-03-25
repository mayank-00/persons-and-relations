import types from "./types";

const initialState = {
  data: {}
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_PERSONS:
      const { person1, person2 } = payload;
      const updatedPersons = Object.assign({}, state.data);
      console.log("state ", state)
      console.log("updatedPersons 1 ", updatedPersons);
      console.log("person1, person2 ", person1, " ", person2)
      if (typeof updatedPersons[person1] === "undefined") {
        updatedPersons[person1] = [person2]
      } else if (!updatedPersons[person1].includes(person2)) {
        updatedPersons[person1].push(person2)
      }

      console.log("updatedPersons 2 ", updatedPersons);

      if (typeof updatedPersons[person2] === "undefined") {
        updatedPersons[person2] = [person1]
      } else if (!updatedPersons[person2].includes(person1)) {
        updatedPersons[person2].push(person1)
      }

      console.log("updatedPersons 3 ", updatedPersons);

      return {
        data: updatedPersons
      }
    default:
      return state
  }
}

export default reducer