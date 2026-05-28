


export const userAuthDal = {
    getUserByUsername: async (username, includePassword = false) => {
        try {
            return  includePassword ?  {
                id:"12345",
                email:"udi@gmail.com",
                role:"user",
                password:"$2b$10$gZ1yRn5NjiT8TbMBjgoor.gDlv65dqvRPT2nxfrp3v2LdeIfp8ive"
            }: {
                id:"12345",
                email:"udi@gmail.com",
                role:"user",
            }

        } catch (error) {
            return error
        }
    },
    registeUser: async (user) =>{
       try {
         return user
       } catch (error) {
        
       }
    }
}