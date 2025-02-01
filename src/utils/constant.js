import { Router, AdminRouter, TeamRouter } from "../routers/router"
export const APPS = [
    {
        subdomain:"www",
        app: Router,
        isMain: true
    },
    {
        subdomain:"admin",
        app: AdminRouter,
        isMain: false
    },
    {
        subdomain:"team",
        app: TeamRouter,
        isMain: false
    }
]