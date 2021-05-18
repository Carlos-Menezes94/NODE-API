import { httpResponse, httpRequest, Controller, EmailValidator } from '../protocols/'
import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helpers'

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
                
                if (httpRequest.body.password !== httpRequest.body.passwordConfirmation)
                    return badRequest (new InvalidParamError('passwordConfirmation'))
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