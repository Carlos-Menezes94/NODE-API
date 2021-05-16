import { SignUpController } from './signup'

describe('SignUp Controller', () => {
    test('Should return 400 if no name provided', () => {
        const sut = new SignUpController ()
        const httpRequest = {
            body:{
                email: 'any_email@mail.com',
                passoword: 'any_passowrod',
                passodwordConfirmation: 'any_passoword'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
  })