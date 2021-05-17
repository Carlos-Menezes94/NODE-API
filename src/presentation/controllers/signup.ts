import { httpResponse, httpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, serverError } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from '../errors/invalid-param-error'

export class SignUpController implements Controller {
    private readonly emailValitador: EmailValidator

    constructor (emailValidator: any) {
        this.emailValitador = emailValidator
    }

    handle (httpRequest: httpRequest): httpResponse {
        try {    
            const requiredFileds = ['name', 'email', 'password', 'passwordConfirmation']
            for (const field of requiredFileds) {
                    if (!httpRequest.body[field]) {
                        return badRequest(new MissingParamError(field))
                    }
                } 
                const  isValid = this.emailValitador.isValid(httpRequest.body.email)   
                if (!isValid) {
                    return badRequest(new InvalidParamError ('email'))
                }
        } 

                catch(error) {
                return serverError()
                 }     
    }    
}