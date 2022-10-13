import { createClient } from "contentful"


const useContentful = () => {
   const client = createClient({
    space: "aor43zbaylh8",
    accessToken:"ATWWatj9sJ6H3-Pphb9QuPbk93e8eIPJf0o0RcRf_xM" ,
/*         space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, */
        host: "cdn.contentful.com"
    })


    const getProducts = async () => {
        try {
            const entries = await client.getEntries({ 
                content_type: "decks",
                select: "fields"
            } )
             
           const sanitaizedEntries = entries.items.map((items) =>{
             const photo = items.fields.photo.fields
            return {
                ...items.fields,
                photo
            
               }
           })
              
      return sanitaizedEntries      
    } catch(error) {
        console.log(`Error ${error}`)
    }
};
    return { getProducts };
}

export default useContentful