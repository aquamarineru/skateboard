import { createClient } from "contentful"


const useContentful = () => {

    const client = createClient({
        space: "2qxrnxo2qe5m",
        accessToken: "ATKEz-nthZMy07n2dV5HBW1yq-n9LKnxn8Ku7tG0nuQ",
        host: "https://cdn.contentful.com"
    });

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields"
            })

            const sanitizedEntries = entries.items.map((item) => {
                const avatar = item.avatar;

                return {
                    ...item.fields,
                    avatar
                }
           })          

           return sanitizedEntries;

           
             
        }

        
        
        catch (error) {
        console.log(`Error fetching data: ${error}`)
        }
    };
    
    return { getProducts }
};

export default useContentful