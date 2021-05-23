import { EmailValidator } from '../presentation/protocols/email-validator'
import  validator  from 'validator'
export class  EmailValidatorAdapter implements EmailValidatorAdapter {
    isValid (email: string): boolean{
        return validator.isEmail(email)

    }
}