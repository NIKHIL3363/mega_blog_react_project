/*import { Account, Client,ID } from "appwrite";
import conf from "../conf/conf";



export class AuthService
{
client =new Client()
account 

//to prevent wasteage of resorce use cleint method in constructor so that acoount will be created after constructoir caslled only
constructor()
{


    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectid)


    this.account=new Account(this.client)

}


async createAccount({email,password,name})
{
    try
    {
       const useraccount= await this.account.create(ID.unique(),email,password,name)


       if(useraccount)
       {
         //call another amthod 


         return this.login({email,password})

       }
       else{
        return useraccount

       }



    }
    catch(error)
    {



        throw error
    }

}


   async login({email,password})
    {
        try
        {
            const  loggedinuser =    await this.account.createEmailPasswordSession(email,password)

            if(loggedinuser)
{

    alert('user logged in')

}
else{
    alert('invalid credetials ')


}

        }
        catch(error)
        {


        }




    }




    async getCurrentUser()
    {
         try
         {
            const accountfetched=await this.account.get()


         }
         catch(error)
         {

            throw error

         }
    
    
    
    }

    async logout()
    {

        try{


            await this.account.deleteSessions()
        }
        catch(error)
        {

            throw error
        }
    }
}


const authservice=new AuthService()
export default authservice
*/
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            console.log('inside try')
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
            } 
        catch (error) {
            console.log(error)
            throw error

         }

        return null;
        
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

