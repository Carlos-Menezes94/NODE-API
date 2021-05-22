import { EmailValidator } from '../presentation/protocols/email-validator'
import  validador  from 'validator'
export class  EmailValidatorAdapter implements EmailValidatorAdapter {
    isValid (email: string): boolean{
        return false

    }
}