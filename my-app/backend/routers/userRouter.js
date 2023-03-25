import Router from 'express'
import userRequestController from '../requests/userRequestController.js'

const userRouter = new Router()

userRouter.post('/', userRequestController.create)
userRouter.get('/', userRequestController.getAll)
userRouter.get('/:id', userRequestController.getOne)
userRouter.put('/', userRequestController.update)
userRouter.delete('/:id', userRequestController.delete)

export default userRouter
