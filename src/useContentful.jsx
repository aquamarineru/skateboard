import { createClient } from "contentful"
const useContentful = () => {
   const client = createClient({
        space: "aor43zbaylh8",
        accessToken:"PsSLw0G7z6cC2ObV4Vb0fsGQE7dRhMtSIJUDjyvCFfM" ,
        host: "preview.contentful.com"
    })


    const getProducts = async () => {
        try {
            const entries = await client.getEntries({ 
                content_type: "decks",
                select: "fields"
            } )
             
            const sanitaizedEntries = entries.includes.map((includes) =>{
                const  details  = includes.fields.details}
            )
               return {
                ...includes.fields,
                details
               }
            
    } catch(error) {
        console.log(`Error ${error}`)
    }
};
    return { getProducts };
}
export default useContentful