export default function generatePass(size: number){
  let password: string = ''
  let characters:string = 'Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!'
  let passwordLength = size ? size : 8

  for(let index = 0; index < passwordLength; index++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }

  return password
}