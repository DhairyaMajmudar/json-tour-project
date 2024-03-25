# Array of Numbers

In this chapter, we'll create a JSON schema for array of numbers

In JSON Schema, `type` keyword is used to describe what kind of data each item in an array should be. If we want our array elements to be of type number only, we simply use `number` as the type for each element.

## Example

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "array",
    "items": {
        "type": "number"
    }
}
```

### Below json data is valid for the above schema

```json
[1, 2, 3]
```
