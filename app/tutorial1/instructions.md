## Introduction

Hello 👋🏻, Welcome to Tour of JSON Schema an interactive learning platform to make your experience of lerning JSON Schema easy and smooth.

## What is JSON Schema?

JSON Schema is a declarative language that you can use to annotate and validate the structure, constraints, and data types of your JSON documents. It provides a way to standardize and define expectations for your JSON data.

**Let's kickstart our journey from understanding how to create JSON Schema Defination.**

## Create a schema defination

To create a basic schema definition, define the following keywords:

`$schema`: specifies which draft of the JSON Schema standard the schema follows.

`$id`: sets a URI for the schema. We can use this unique URI to refer to elements of the schema from inside the same document or from external JSON documents.

`title` and `description`: these keywords are used to define the puropse of schema. They don’t add any constraints to the data being validated.

`type`: defines the type of JSON data.

<hr/>

**Amazing now we have a good undersatanding of schema definations now let's create our own for given json data.**

```json
{
    "title": "Hello JSON Schema",
    "description": "JSON Schema is amazing",
    "type": "object"
}
```

At first try to create the schema by your own if you feel blocked refer to below schema example :)

## Example

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/product.schema.json",
    "title": "Product",
    "description": "JSON Schema is amazing",
    "type": "object"
}
```

