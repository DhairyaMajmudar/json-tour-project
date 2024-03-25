## Introduction

Hello 👋🏻, Welcome to Tour of JSON Schema an interactive learning platform for to make your experience of lerning JSON Schema easy and smooth.

## What is JSON Schema?

JSON Schema is a declarative language that you can use to annotate and validate the structure, constraints, and data types of your JSON documents. It provides a way to standardize and define expectations for your JSON data.

## Example

Let's follow up the below example to head start our journey for learning JSON Schema, copy the code snippet below and paste it in the code editor and click the validate button and check if it is validating below code snippet or not.

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/product.schema.json",
    "title": "Product",
    "description": "JSON Schema is amazing",
    "type": "object"
}
```

### Below json data is valid for the above schema

```json
{
    "title": "Hello JSON Schema",
    "description": "JSON Schema is amazing",
    "type": "object"
}
```
