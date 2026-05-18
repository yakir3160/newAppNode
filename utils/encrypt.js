import { hash,compare } from "bcrypt";



export const hashPassword  = async (plainPassword) =>{ 
   try {
    const hashedPassword =  await hash(plainPassword ,10)
        return hashedPassword
   } catch (error) {
     return error
   }

}
export const comparePasswords = async (plainPassword,hashedPassword) => {
      try {
    const isMatch =  await compare(plainPassword ,hashedPassword)
        return isMatch
   } catch (error) {
     return error
   }


}

