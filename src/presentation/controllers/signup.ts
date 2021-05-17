import {httpResponse, httpRequest} from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
export class SignUpController {
    handle (httpRequest: httpRequest): httpResponse {
        const requiredFileds = ['name', 'email', 'password']
        for (const field of requiredFileds) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
        }    
    }
        
}