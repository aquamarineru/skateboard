import { createClient } from "contentful"


const useContentful = () => {

   const client = createClient({
    space: "cj4kajigmc9i",
    accessToken: "Y3mbGG_OdO020zGcTKDZhOSHBlRVrbu1i4IeR8Fe5PU",
    host: "preview.contentful.com"
    });

    const getContentType = async (type) => {
        try {
            const entries = await client.getEntries({
                content_type: type,
                select: "fields"
            })

            const sanitizedEntries = entries.items.map((item) => {
  
                return {
                    ...item.fields
                 }
           })          

           return sanitizedEntries;
                 
        }

        catch (error) {
        console.log(`We are screwed: ${error}`)
        }
    };
     
    const getBearings = async () => {
       return getContentType("bearings")
    };  

    const getWheels = async () => {
        return getContentType("wheels")
     };  
     const getHardware = async () => {
        return getContentType("hardware")
     };  
     const getDecks = async () => {
        return getContentType("decks")
     };  
     const getTrucks = async () => {
        return getContentType("trucks")
     };  

     const getGriptape = async () => {
        return getContentType("griptape")
     };  
 
    

return { getDecks, getBearings, getHardware, getGriptape, getWheels, getTrucks }
};


export default useContentful