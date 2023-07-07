import { createSchema } from "sanity";

import product from './product';
import banner from './banner';

export const schemaTypes: any[] = [product, banner]
export default createSchema({
    name:'default',
    types:schemaTypes,
})
//export const schemaTypes = [pet]
