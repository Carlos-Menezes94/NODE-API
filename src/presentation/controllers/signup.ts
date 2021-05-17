import { httpResponse, httpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
    handle (httpRequest: httpRequest): httpResponse {
        const requiredFileds = ['name', 'email', 'password', 'passwordConfirmation']
        for (const field of requiredFileds) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
        }    
    }
        
}