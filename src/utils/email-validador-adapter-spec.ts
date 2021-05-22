import { EmailValidatorAdapter } from './email-validator'
import validador from 'validator'

jest.mock('validator', () => ({
    isEmail (): boolean {
        return
    }
}))

describe ('EmailValidador Adaper', () => {
    test('Should return false if validador returns false', () => {
        const sut = new EmailValidatorAdapter ()
        jest.spyOn(validador, 'isEmail').mockReturnValueOnce(false)
        const isValid = sut.isValid('invalid_email@mail.com')
        expect(isValid).toBe(false)    
    })

    test('Should return true if validador returns false', () => {
        const sut = new EmailValidatorAdapter ()
        const isValid = sut.isValid('invalid_email@mail.com')
        expect(isValid).toBe(true)    
    })
})