import {DataLoader} from "./DataLoader";
import {ProgramDataStore} from "../ProgramDataStore";
import {AuthService} from "../AuthService/AuthService";

export class WebDataLoader extends DataLoader {
    constructor(protected authService: AuthService, protected programDataStore: ProgramDataStore) {
        super(authService, programDataStore);
    }
}