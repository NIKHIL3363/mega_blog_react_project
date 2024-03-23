import { Account, Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";



export class Service2
{

client=new Client();
database;
bucket;



    constructor()
    {

      this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectid)

    this.database=new Databases(this.client)
    this.bucket=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredimage,status,userid})
    {
        try
        {
            return await this.database.createDocument(conf.appwriteDatabaseid,conf.appwriteCollectionid,slug,{title,content,featuredimage,status,userid})

        }  
        catch(er){

            throw console(er);
        }        

    }

    async updatepost(slug,{title,content,featuredimage,status}){

        try{

            return  await this.database.updateDocument(conf.appwriteDatabaseid,conf.appwriteCollectionid,slug,{title,content,featuredimage,status})

        }
        catch(error){

            throw error
        }
    }
    async deletePost(slug)
    {
try{ 
   return  await this.database.deleteDocument(conf.appwriteDatabaseid,conf.appwriteCollectionid,slug)


}
catch(error)
{
throw error


}

    }
    async getDocument(slug)
    {

       try{


        return await this.database.getDocument(conf.appwriteDatabaseid,conf.appwriteCollectionid,slug)
       }
       catch(error)
       {

        console.log(error)
       }


    }
    async getalldocuments(queries=[Query.equal("status","active")])
    {

        try{
            return await this.database.listDocuments(conf.appwriteDatabaseid,conf.appwriteCollectionid,queries)
        }
        catch(error)
        {

            throw error
        }
    }

    async uploadFile(file)
    {
           try{

                return await  this.bucket.createFile(conf.appwritebucketid,ID.unique(),file)
              }
           catch(error)
           {

              

            throw error



           }
   
   
   

        }

        async deleteFile(fileId)
        {

            try{

               
                await this.bucket.deleteFile(conf.appwritebucketid,fileId)

                return  true
            }
            catch(err)
            {

                throw err
                return false 
            }
        }


        async getFilePreview(fileid)
        {


            return this.bucket.getFilePreview(conf.appwritebucketid,fileid)


            

        }

}
const service2=new Service2()
export default service2