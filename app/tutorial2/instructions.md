# Array of Numbers

In this chapter, we'll create a JSON schema for array of numbers

At first the keyword `items` is used to define varoius definations of array elements

Within which we can declare the keyword `type` to describe what kind of data each item in an array should be. If we want our array elements to be of type number only, we simply use `number` as the type for each element.

<hr/>

**Great!! now we have learnt about defining an array now let's create our own for given json data.**

```json
[1, 2, 3]
```

At first try to create the schema by your own if you feel blocked refer to below schema example :)

Validate if the schema created is corrected with the help of validate button.   

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
