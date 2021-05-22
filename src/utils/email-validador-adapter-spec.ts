import { EmailValidatorAdapter } from './email-validator'


describe ('EmailValidador Adaper', () => {
    test('Should return false if validador returns false', () => {
        const sut = new EmailValidatorAdapter ()
        const isValid = sut.isValid('invalid_email@mail.com')
        expect(isValid).toBe(false)    
    })
})