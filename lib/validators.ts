// import { Validator } from "jsonschema";

// export function jsonschema(data: any, schema: any) {
//     var v = new Validator();
//     const validateRes = v.validate(data, schema);

//     return validateRes;
// }

import Ajv from "ajv/dist/2020";
// @ts-ignore
import betterAjvErrors from "better-ajv-errors";
export function ajv(data: any, schema: any) {
    const ajv = new Ajv({ allErrors: true, verbose: true });

    const validate = ajv.compile(schema);
    const valid = validate(data);
    const errors = betterAjvErrors(schema, data, validate.errors);
    return { valid, errors };
}

import {
    validate,
    registerSchema,
    setMetaSchemaOutputFormat,
    unregisterSchema,
} from "@hyperjump/json-schema/draft-2020-12";
import { VERBOSE, BASIC, DETAILED } from "@hyperjump/json-schema/experimental";
setMetaSchemaOutputFormat(VERBOSE);

export async function hyperjumpValidate(data: any, schema: any) {
    registerSchema(schema, "http://example.com/schemas/string");
    try {
        const output = await validate(
            "http://example.com/schemas/string",
            data
        );
        return output;
    } catch (e) {
    } finally {
        unregisterSchema("http://example.com/schemas/string");
    }
}
