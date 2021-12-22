// function Component(id: number) {
//     console.log('init component')
//     return (target: Function) => {
//         console.log('run component')
//         target.prototype.id = id
//     }
// }
//
// function Logger() {
//     console.log('init logger')
//     return (target: Function) => {
//         console.log('run logger')
//     }
// }
//
// function Method(
//     target: Object,
//     propertyKey: string,
//     propertyDescriptor: PropertyDescriptor
// ) {
//     console.log(propertyKey)
//     const oldValue = propertyDescriptor.value
//     propertyDescriptor.value = function (...args: Array<any>) {
//         return args[0] * 10
//     }
// }
//
// function Prop(
//     target: Object,
//     propertyKey: string,
// ) {
//     let value: number
//     const getter = () => {
//         console.log('GET!')
//         return value
//     }
//     const setter = (newValue: number) => {
//         console.log('SET!')
//         value = newValue
//     }
//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter
//     })
//
// }
// function Param(
//     target: Object,
//     propertyKey: string,
//     index: number
// ) {
//     console.log(propertyKey, index)
// }
//
// @Logger()
// @Component(1)
// export class User {
//     @Prop id: number
//
//     @Method
//     updateId(@Param newId: number) {
//         this.id = newId
//         return this.id
//     }
// }
//
// console.log(new User().id)
// console.log(new User().updateId(2))


import 'reflect-metadata'

function Injectable(key: string) {
    return (target: Function) => {
        Reflect.defineMetadata(key, 1, target)
        const meta = Reflect.getMetadata(key, target)
        console.log(meta)
    }
}

function Prop(
    target: Object,
    propertyKey: string,
) {

}
function Inject(key: string) {
    return (target: Function) => {
        Reflect.defineMetadata(key, 1, target)
        const meta = Reflect.getMetadata(key, target)
        console.log(meta)
    }
}

@Injectable('C')
class C {
    @Prop prop: number
}
@Injectable('D')
class D {
    constructor( c: C) {
    }
}