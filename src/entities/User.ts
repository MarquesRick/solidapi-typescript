import { uuid } from "uuidv4";

export class User{
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;

    //todas as propriedades menos 'id', id opcional
    constructor(props: Omit<User, 'id'>, id?: string){
        //jeito mais rápido para fazer 'this.name = props.name' em todos os parametros do entity
        Object.assign(this, props);

        //ñ deixa a responsabilidade de criar id para o banco de dados
        if(!id){
            this.id = uuid();
        }
    }
    

}