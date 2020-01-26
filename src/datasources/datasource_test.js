import { DataSource } from "apollo-datasource";

class TestDatasource extends DataSource {

    constructor(){
        super();
    }

    initialize(config) {
        this.context = config.context;
    }

}