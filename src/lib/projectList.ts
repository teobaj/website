export type Project = {
    name: string,
    url: string,
    description?: string,
    style: {
        primaryColor: string;
        secundaryColor: string;
    }
}
export const projectList:Project[] = [
    {
        name:'Tulumba',
        url: "https://tulumba.vercel.app/",
        style: {
            primaryColor:'#3bba9c',
            secundaryColor: '#2E3047'
        }
        
    },
    {
        name: "JSON-to-Faker",
        url: "https://json-to-faker.vercel.app/",
        style: {
            primaryColor:'#710686',
            secundaryColor: '#242424'
        }
    },
    {
        name: "Blog",
        url: 'https://blog-teobaj.vercel.app/',
        style: {
            primaryColor: '#035968',
            secundaryColor: '#e0e3e8'
        }
    },
    {
        name: 'Sirloin',
        url: "https://sirloin.vercel.app/",
        style: {
            primaryColor: '#1976d2',
            secundaryColor: '#ffffff'
        }
    },
    {
        name: 'Way Provider',
        url: "https://way-provider-docs.vercel.app/",
        style: {
            primaryColor: '#2f84ea',
            secundaryColor: '#242526'
        }
    }
]