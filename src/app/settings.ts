import { HttpHeaders } from "@angular/common/http";

export class Settings{

    private static instance: Settings = null;
  
    // Settings
    public static serverUrl = 'http://ec2-18-223-133-208.us-east-2.compute.amazonaws.com:8081';

    constructor() {}

     public static headers = new HttpHeaders({
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': 'true'
    });

    public static httpOptions = {
        headers: Settings.headers.delete('Access-Control-Allow-Origin')
                                 .delete('Access-Control-Allow-Methods')
                                 .delete('Access-Control-Allow-Headers')
                                 .delete('Access-Control-Allow-Credentials')
    };
}