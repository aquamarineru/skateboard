import { createClient } from "contentful"


const useContentful = () => {

   const client = createClient({
    space: "cj4kajigmc9i",
    accessToken: "3AzIdyzpQh49YqAQO3wxuVAJF2oMXHiJ5nBggE7mxdg",
    host: "preview.contentful.com"
    });

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "skateboards",
                select: "fields"
            })

            const sanitizedEntries = entries.items.map((item) => {
                //const image = image.fields.file.url

                return {
                    ...item.fields,
                    //image
                }
           })          

           return sanitizedEntries;

           
             
        }

        
        
        catch (error) {
        console.log(`We are screwed: ${error}`)
        }
    };
    
    return { getProducts }
};

export default useContentful