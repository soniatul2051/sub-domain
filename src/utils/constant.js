import { Router, AdminRouter, TeamRouter } from "../routers/router"
export const APPS = [
    {
        subdomain:"www",
        app: Router,
        main: true
    },
    {
        subdomain:"admin",
        app: AdminRouter,
        main: false
    },
    {
        subdomain:"team",
        app: TeamRouter,
        main: false
    }
]