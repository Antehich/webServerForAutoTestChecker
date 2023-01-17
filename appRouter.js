import Router from 'express'
import appRequestController from './appRequestController.js'

const appRouter = new Router()

appRouter.post('/', appRequestController.create)
appRouter.get('/', appRequestController.getAll)
appRouter.get('/:id', appRequestController.getOne)
appRouter.put('/', appRequestController.update)
appRouter.delete('/:id', appRequestController.delete)

export default appRouter
