import { AboutMe } from "../model/aboutme";
import { Project } from "../model/project";


export const mockLogin = (userName: string, password: string) => new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {

        if (userName === process.env.REACT_APP_EMAIL && password === process.env.REACT_APP_PASS) {
            resolve(JSON.parse(
                `{
                 "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyOTM0ODIwOTM0ODkwODA5OCIsImVtYWlsIjoibHVjYXNmZXJuYW5kZXphcmFnb25AZ21haWwuY29tIiwiaWF0IjoxNjM2OTIzOTE4LCJleHAiOjE2MzY5Mjc1MTh9.3qHpT-ZKj04-QzkissGbuyCHFkgN_WXy8LkuXcrUUSw"
                 }`
            ));
        } else {
            rejected(new Unauthorized());
        }
    }, 2000);
    
})
export interface TokenResponse {
    token: string;
}
export interface ApiError {
    description?: string;
}
export class Unauthorized implements ApiError { }



export const mockAboutme = () => new Promise<AboutMe>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `{
            "id":"12389asdfasf8",
            "name":"León Esteban González",
            "birthday":550213200000,
            "nationality":"Colombia",
            "job":"Independent",
            "github":"https://github.com/legoncio"
            }`
        ));
    }, 500);

});

export const mockSaveProject = (
    project: { 
        title: string, 
        description: string, 
        link: string, 
        tags: string, 
        version: string
    }) => new Promise<Project>(function (resolve, rejected) {
        setTimeout(() => {
            resolve(
                {
                    id:"25rt34iuo468f8",
                    title: project.title,
                    description: project.description,
                    version: project.version,
                    link: project.link,
                    tag: project.tags,
                    timestamp : new Date()
                }
            )
        }, 1000)
})

export const mockProjects = () => new Promise<Project[]>(function (resolve, rejected) {
    setTimeout(() => {
        resolve(JSON.parse(
            `[
                {
                "id":"25634iuoasdf8",
                "title":"Expensify App",
                "description":"Aplicación para control de gastos.",
                "version":"1.0",
                "link":"https://github.com/legoncio/expensify-app",
                "tag":"React",
                "timestamp":"765817712004"
                },
                {
                "id":"7890asdf890",
                "title":"Chat App",
                "description":"Aplicación de chat en tiempo real con web sockets",
                "version":"1.0",
                "link":"https://github.com/legoncio/chat-app",
                "tag":"Nodejs, HTML",
                "timestamp":"765817712005"
                },
                {
                "id":"7890asdf890",
                "title":"Task manager App",
                "description":"API sencilla de notas simples: titulo y contenido",
                "version":"1.0",
                "link":"https://github.com/legoncio/task-manager-api",
                "tag":"Nodejs",
                "timestamp":"765817712006"
                },
                {
                "id":"7890asdf890",
                "title":"Weather App",
                "description":"Aplicación sencilla para obtener información del clima",
                "version":"1.0",
                "link":"https://github.com/legoncio/node-weather-website",
                "tag":"Nodejs, Handlebars",
                "timestamp":"765817712007"
                }
            ]`
        ));
    }, 500);

});