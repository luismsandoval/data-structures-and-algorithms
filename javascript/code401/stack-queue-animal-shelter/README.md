# Stack and Queue Animal Shelter

- Create a class called `AnimalShelter` that holds cat and dog objects.

- Shelter operates on FIFO basis dependent on the type of animal.

## Methods

### enqueue

- Arguments:
  - `name` _string_
  - `type` -> "cat" or "dog"

### dequeue

- Arguments:
  - `pref`, either a "cat" or "dog"
- Return:
  - a cat or dog _name_ based on `pref`
  - if no argument is given:
    - return the next animal _name_ in the queue

## Approach and Efficiency

- `shelter.enqueue()`
  - Time: O(1)
  - Space: O(1)

- `shelter.dequeue()`
  - Time: O(1)
  - Space: O(1)
