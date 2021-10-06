import { Injectable } from "@angular/core";
import { DeviceConfig, DeviceDetails, dummyData, dummySensorData, rigList, RigSettings, sensorList, testList } from "../models/dummyData";

@Injectable({
    providedIn: 'root',
})

export class TestDataService{
    getTestData():dummyData[]{
        return testList;
    }

    getSensorData():dummySensorData[]{
        return sensorList;
    }

    getDeviceData():DeviceDetails[]{
        return DeviceConfig;
    }

    getSingleDevice(device:any){
        return sensorList.filter(x => x.device_name === device);
    }


    getRigList():RigSettings[]{
        return rigList;
    }

    getSingleRig(location:string):RigSettings[]{
        return rigList.filter(x => x.location === location);
    }

    getRigById(id:any):RigSettings[]{
        return rigList.filter(x => x._id === id);
    }
}