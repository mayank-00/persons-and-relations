import { createSelector } from "reselect";

const persons = state => state.persons?.data || {}

export const selectRelationships = createSelector(
  [
    persons,
    (state, person1, person2) => ({ person1, person2 })
  ],
  (data, personNames) => {
    const { person1, person2 } = personNames;
    const chains = [];

    if (!person1 || !person2) {
      return []
    }

    if (typeof data[person1] === "undefined" || typeof data[person2] === "undefined") {
      return []
    }

    function recursiveChaining(traversed, data, chains, person2, current) {
      traversed.push(current)
      data[current].forEach(element => {
        if (element === person2) {
          chains.push([...traversed, element])
          return
        }
        if (traversed.includes(element)) {
          return
        }
        recursiveChaining(traversed, data, chains, person2, element)
      })
      traversed.pop()
    }

    data[person1].forEach(element => {
      if (element === person2) {
        chains.push([person1, person2])
        return
      }
      let traversed = [person1]
      recursiveChaining(traversed, data, chains, person2, element)
    });

    return chains
  }
)